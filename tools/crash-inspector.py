# run this script as a cronjob from the instrumentation/results directory and make sure cron has access to the ssh key agent

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
stack_hash_path = '/home/thmorale/qtjs/fuzzer/instrumentation/results/stack.hashes'

def isDupe(crash, _hash, stack_hashes):
    '''
    uses heuristics to check if the crash is a duplicate
    '''
    # stack hash duplicate
    if (_hash in stack_hashes):
        return True
    # self-reference (ordinaryToPrimitive <-> objectDefaultValue)
    if (crash.count('QV4::RuntimeHelpers::ordi') == 2 and crash.count('QV4::RuntimeHelpers::obje') == 2):
        return True
    # TODO: add more here! 


    return False


def clean():
    '''
    removes temporary files and push up new changes to git
    '''
    print('[...] cleaning')
    # remove the old artifacts (crashwalk,db and crash files)
    crash_files = crash_dir + '/*'
    subprocess.run(['rm', 'crashwalk.db'], shell=False)
    subprocess.run(['rm', triage_file], shell=False)

    # push to github
    subprocess.run(['git', '-C', repo_path, 'add', '.'], shell=False)
    subprocess.run(['git', '-C', repo_path, 'commit', '-am', '"new crashes to review"'], shell=False)
    subprocess.run(['git', '-C', repo_path, 'push'], shell=False)

def main():
    # pull before making changes
    subprocess.run(['git', '-C', repo_path, 'pull'], shell=False)
    #  delete protobuf files
    subprocess.run(['rm', '-rf', protobuf_files], shell=False)
    # run crashwalk
    cwtriage_cmd = [cwtriage, '-tidy','-ignore', dupe_path, '-root', crash_dir, harness_path, '@@']
    subprocess.run(cwtriage_cmd, shell=False)
    print('[...] running crashwalk')

    # run cwdump
    with open(triage_file, 'w') as outfile:
        cwdump_cmd = [cwdump, './crashwalk.db']
        subprocess.run(cwdump_cmd, stdout=outfile)
    print('[INFO] finished crashwalk')

    # open up new and global triage files
    triage = open(triage_file ,'r')
    global_triage = open(global_triage_file, 'a')


    data = triage.readlines()

    print('[...] removing duplicates')


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
                i += 1
                line = data[i]
            crash += '---END SUMMARY---\n'
            # turn it into a single string
            crash.join('\n')
            stack_hash_file = open(stack_hash_path, 'r')
            # get the database of stack hashes
            stack_hashes = hash_file.readlines()
            stack_hash_file.close()

            # skip the addition of duplicates to our crashes
            if isDupe(crash, _hash, stack_hashes):
                # remove the file so we dont process it again
                subprocess.run(['rm', file_name], shell=False)
                continue

            # move files to dirs
            new_file_name = file_name.split('-')[-1]
            if ' EXPLOITABLE' in crash:
                new_file_name = 'crashes/exploitable/' + new_file_name
            elif 'PROBABLY_NOT_EXPLOITABLE' in crash:
                new_file_name = 'crashes/not-exploitable/' + new_file_name
            elif 'PROBABLY_EXPLOITABLE' in crash:
                new_file_name = 'crashes/prob-exploitable/' + new_file_name
            else:
                new_file_name = 'crashes/unknown/' + new_file_name
            subprocess.run(['mv', file_name, new_file_name], shell=False)

            # write to hash file
            stack_hashes.append(_hash)
            stack_hash_file = open(stack_hash_path, 'w')
            stack_hash_file.writelines("%s\n" % item for item in stack_hashes)
            STACK_Hash_file.close()

            # write crash to global triage
            global_triage.write(crash)
            global_triage.close()
            

    clean()



if __name__ == '__main__':
    main()
