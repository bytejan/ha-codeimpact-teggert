#!/bin/bash

# Variables
KEY_NAME="id_rsa_github"
KEY_COMMENT="GitHub SSH Key"

# Generate SSH key
echo "Generating SSH key..."
ssh-keygen -t rsa -b 4096 -C "$KEY_COMMENT" -f ~/.ssh/$KEY_NAME -N ""

# Create SSH config file and add configuration for GitHub
echo "Configuring SSH to use the new key for GitHub..."
CONFIG_FILE=~/.ssh/config
if [ ! -f "$CONFIG_FILE" ]; then
    touch "$CONFIG_FILE"
    chmod 600 "$CONFIG_FILE"
fi

# Add GitHub-specific configuration to ~/.ssh/config
echo -e "Host github.com\n\tHostName github.com\n\tUser git\n\tIdentityFile ~/.ssh/$KEY_NAME\n" >> "$CONFIG_FILE"

# Display the public key
echo "SSH key created: ~/.ssh/$KEY_NAME"
echo "Public key for GitHub:"
cat ~/.ssh/${KEY_NAME}.pub

# Instructions for GitHub
echo -e "\nCopy the above public key and add it to GitHub:"
echo "1. Go to GitHub -> Settings -> SSH and GPG keys -> New SSH key"
echo "2. Paste the key and save."

# Test SSH connection (optional step)
echo "Testing connection to GitHub..."
ssh -T git@github.com