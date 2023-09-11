#!/bin/bash

# Check if $PYCODE is set
if [[ -z "$PYCODE" ]]; then
echo "Error: Environment variable \$PYCODE is not set."
exit 1
fi

# Run the Python code
 python -c "$PYCODE"

