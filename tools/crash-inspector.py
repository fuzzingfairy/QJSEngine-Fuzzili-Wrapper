# run this script as a cronjob from the instrumentation/results directory

import subprocess
import time

crash_dir = '/home/thmorale/qtjs/results/crashes' 
harness_path = '/home/thmorale/qtjs/fuzzer/instrumentation/tools/harness/harness'
dupe_path = '/home/thmorale/qtjs/results/crashes/duplicates'
triage_file = '/home/thmorale/qtjs/results/triage.txt'

# pull before making changes
subprocess.run(['git', '-C', '/home/thmorale/qtjs/fuzzer/instrumentation', 'pull'], shell=False)
#  delete protobuf files
subprocess.run(['rm', '-rf', '/home/thmorale/qtjs/results/*.protobuf'], shell=False)
# run crashwalk
cwtriage_cmd = ['/home/thmorale/qtjs/fuzzer/instrumentation/tools/crashwalk/cwtriage', '-tidy','-ignore', dupe_path, '-root', crash_dir, harness_path, '@@']
subprocess.run(cwtriage_cmd, shell=False)
print('[...]running crashwalk')

# ru cwdump
with open(triage_file, 'w') as outfile:
    cwdump_cmd = ['/home/thmorale/qtjs/fuzzer/instrumentation/tools/crashwalk/cwdump', './crashwalk.db']
    subprocess.run(cwdump_cmd, stdout=outfile)
print('[INFO] finished crashwalk')

time.sleep(2)
# seperate into files
triage = open(triage_file ,'r')
exploitable = open('./crashes/exploitable/triage.txt', 'a')
unknown = open('./crashes/unknown/triage.txt', 'a')
not_exploitable = open('./crashes/not-exploitable/triage.txt', 'a')
probably_exploitable = open('./crashes/prob-exploitable/triage.txt', 'a')


data = triage.readlines()

print('...seperating results')


for i in range(len(data)):
    line = data[i]
    if '---CRASH SUMMARY---' in line:
        crash = ''
        file_name = ''
        _hash = ''
        while not 'END SUMMARY' in line:
            crash += line
            if 'Filename: ' in line:
                file_name = line.split()[1]
                file_name = file_name.replace('instrumentation/results/', '')
            i += 1
            line = data[i]
        crash += '---END SUMMARY---\n'
        crash.join('\n')
        new_file_name = file_name.split('-')[-1]

        if ' EXPLOITABLE' in crash:
            exploitable.write(crash)
            new_file_name = 'crashes/exploitable/' + new_file_name
        elif 'PROBABLY_NOT_EXPLOITABLE' in crash:
            not_exploitable.write(crash)
            new_file_name = 'crashes/not-exploitable/' + new_file_name
        elif 'PROBABLY_EXPLOITABLE' in crash:
            probably_exploitable.write(crash)
            new_file_name = 'crashes/prob-exploitable/' + new_file_name
        else:
            unknown.write(crash)
            new_file_name = 'crashes/unknown/' + new_file_name


        subprocess.run(['mv', file_name, new_file_name], shell=False)

# remove the old artifacts (crashwalk,db and crash files)
crash_files = crash_dir + '/*'
subprocess.run(['rm', 'crashwalk.db'], shell=False)
subprocess.run(['rm', triage_file], shell=False)

# push to github
subprocess.run(['git', '-C', '/home/thmorale/qtjs/fuzzer/instrumentation', 'add', '.'], shell=False)
subprocess.run(['git', '-C', '/home/thmorale/qtjs/fuzzer/instrumentation', 'commit', '-am', '"new crashes to review"'], shell=False)
subprocess.run(['git', '-C', '/home/thmorale/qtjs/fuzzer/instrumentation', 'push'], shell=False)

