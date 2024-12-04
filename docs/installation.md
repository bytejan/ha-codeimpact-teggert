# Installation of home assistant

## Create a ssh key and download checkout the repo

1) Flash a sd card with the latest version of home assistant with the raspberry pi imager 
2) Go to the ha url and go through the installation
3) go to your user in the left bottom and activate Advanced mode
4) Go to settings -> addons and install "Advanced SSH & Web Terminal"

5) Check if a ssh key is created under ~/.ssh, else run the script in the bin folder (create_github_ssh_key.sh)
6) Add the key in the github repo under settings -> deployment keys
7) go to the config folder in the command line and do a git clone from the repo
8) copy all files in the config folder
9) run the command git checkout main -f

## Install addons 
1) Create a user for the mqtt broker (set local access only to true)
2) Run the script to install addons in the command line in the config folder `. ./bin/install_addons.sh`
3) 