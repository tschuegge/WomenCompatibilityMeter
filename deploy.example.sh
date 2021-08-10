#!/bin/bash

### EXAMPLE ###

# Remove finder trash on macOS
find ./ -name '.DS_Store' -type f -delete

# delete previous release
ssh username@host.com "rm -rf ./deploypath/*"

# deploy release
scp -r ./www/* username@host.com:/deploypath/
