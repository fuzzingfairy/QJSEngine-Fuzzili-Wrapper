# run this script as a cronjob from the instrumentation/results directory

import subprocess
import time

## CHANGE THESE
crash_dir = '/home/thmorale/qtjs/results/crashes' 
harness_path = '/home/thmorale/qtjs/fuzzer/instrumentation/tools/harness/harness'
dupe_path = '/home/thmorale/qtjs/results/crashes/duplicates'
triage_file = '/home/thmorale/qtjs/results/triage.txt'
global_triage_file = '/home/thmorale/qtjs/fuzzer/instrumentation/results/traige.txt'
repo_path = '/home/thmorale/qtjs/fuzzer/instrumentation'
protobuf_files = '/home/thmorale/qtjs/results/*.protobuf'
cwtriage = '/home/thmorale/qtjs/fuzzer/instrumentation/tools/crashwalk/cwtriage'
cwdump = '/home/thmorale/qtjs/fuzzer/instrumentation/tools/crashwalk/cwdump'

def isDupe():
    pass

def main():
    # pull before making changes
    subprocess.run(['git', '-C', repo_path, 'pull'], shell=False)
    #  delete protobuf files
    subprocess.run(['rm', '-rf', protobuf_files], shell=False)
    # run crashwalk
    cwtriage_cmd = [cwtriage, '-tidy','-ignore', dupe_path, '-root', crash_dir, harness_path, '@@']
    subprocess.run(cwtriage_cmd, shell=False)
    print('[...] running crashwalk')

    # ru cwdump
    with open(triage_file, 'w') as outfile:
        cwdump_cmd = [cwdump, './crashwalk.db']
        subprocess.run(cwdump_cmd, stdout=outfile)
    print('[INFO] finished crashwalk')

    # seperate into files
    triage = open(triage_file ,'r')
    global_triage = open(global_triage_file, 'a')


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
            # check for dupes
            crash.join('\n')
            new_file_name = file_name.split('-')[-1]

            # skip the addition of duplicates to our crashes
            if isDupe(crash):
                continue

            # move files to dirs
            if ' EXPLOITABLE' in crash:
                new_file_name = 'crashes/exploitable/' + new_file_name
            elif 'PROBABLY_NOT_EXPLOITABLE' in crash:
                new_file_name = 'crashes/not-exploitable/' + new_file_name
            elif 'PROBABLY_EXPLOITABLE' in crash:
                new_file_name = 'crashes/prob-exploitable/' + new_file_name
            else:
                new_file_name = 'crashes/unknown/' + new_file_name
            # write to global triage


            subprocess.run(['mv', file_name, new_file_name], shell=False)

    # remove the old artifacts (crashwalk,db and crash files)
    crash_files = crash_dir + '/*'
    subprocess.run(['rm', 'crashwalk.db'], shell=False)
    subprocess.run(['rm', triage_file], shell=False)

    # push to github
    subprocess.run(['git', '-C', repo_path, 'add', '.'], shell=False)
    subprocess.run(['git', '-C', repo_path, 'commit', '-am', '"new crashes to review"'], shell=False)
    subprocess.run(['git', '-C', repo_path, 'push'], shell=False)


if __name__ == '__main__':
    main()
