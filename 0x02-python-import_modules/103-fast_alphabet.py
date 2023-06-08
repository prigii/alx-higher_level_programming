#!/usr/bin/python3
import string
print(''.join(getattr(string, '__dict__')['ascii_uppercase']), end='\n')
