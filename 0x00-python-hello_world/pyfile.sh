#!/bin/bash

# check if $PYFILE is set
if [[ -z "$PYFILE" ]]; then
echo "Error: Environment variable \$PYFILE is not set."
exit 1
fi
# check if the file exist
if [[ ! -f "$PYFILE" ]]; then
echo "Error: File '$PYFILE' does not exist."
exit 1
fi

# Run the Python script
python "$PYFILE"
