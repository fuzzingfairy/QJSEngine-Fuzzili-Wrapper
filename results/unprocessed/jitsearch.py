from pwn import *
import glob

context.terminal = ["bash"]
for file in glob.glob("*.js"):
    gdb.debug(exe="../../tools/harness/harness",args=[], gdbscript='break main')
    print(file)
