#!/bin/bash

### Settings Example ###
remoteUsername='remoteUser'
remoteHost='remote.host.example'
remotePath='/remote/path/'
sshPort='22'

# Build project
ng build --configuration=production

# Remove macOS Finder Trash
find ./ -name '.DS_Store' -type f -delete

# Upload source files to remote host
rsync --rsh "ssh -p $sshPort" --archive --compress --progress --delete ./www/ $remoteUsername@$remoteHost:$remotePath/