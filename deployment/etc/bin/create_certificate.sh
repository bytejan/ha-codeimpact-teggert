#!/bin/bash

# Variables
DOMAIN="home.com"
EMAIL="info@codeimpact.com"
SSL_DIR="/etc/letsencrypt/live/$DOMAIN"
HA_SSL_DIR="/homeassistant/ssl" # Adjust this to your Home Assistant ssl directory

apk add certbot

sudo yum install certbot
# Or if you're using dnf:
sudo dnf install certbot
sudo pacman -S certbot

certbot certonly --manual --preferred-challenges dns -d home.com