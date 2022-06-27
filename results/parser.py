import subprocess

triage = open('./triage.txt' ,'r')
exploitable = open('./crashes/exploitable/triage.txt', 'w')
unknown = open('./crashes/unknown/triage.txt', 'w')
not_exploitable = open('./crashes/not-exploitable/triage.txt', 'w')


data = triage.readlines()
print('read lines')


for i in range(len(data)):
    line = data[i]
    if '---CRASH SUMMARY---' in line:
        crash = line
        file_name = ''
        _hash = ''
        while not 'END SUMMARY' in line:
            crash += line
            if 'Filename: ' in line:
                file_name = line.split()[1]
                file_name = file_name.replace('instrumentation/results/', '')
            if 'Hash: ' in line:
                _hash = line.split()[1]
            i += 1
            line = data[i]
        crash += '---END SUMMARY---'
        crash.join('\n')
        new_file_name = _hash[:5] + '.js'

        if ' EXPLOITABLE' in crash:
            exploitable.write(crash)
            new_file_name = 'crashes/exploitable/' + new_file_name
        elif 'PROBABLY_NOT_EXPLOITABLE' in crash:
            not_exploitable.write(crash)
            new_file_name = 'crashes/not-exploitable/' + new_file_name
        else:
            unknown.write(crash)
            new_file_name = 'crashes/unknown/' + new_file_name


        subprocess.run(['cp', file_name, new_file_name])
