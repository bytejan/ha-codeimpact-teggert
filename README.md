# Provision home assistant

## Tasks
- Create users, floors, labels, zones, areas
- Install HACS
- Add repo's in the addon store + install addons with settings
- Enable integrations
- Setup SSH
- create a ssl certificate


## Setup (Raspberry PI 5)

1) Install Raspberry Pi Manager 
2) Insert a SD card in your laptop/pc and flash home assistant on the card with the pi manager
3) After the sd card is flashed, insert the sd card in your raspberry
4) Be sure that the install_config.json in the root of the project is still the way you prefer
5) Install ansible and yarn (if not installed already)
6) run yarn install
7) run ansible-galaxy collection install community.crypto
8) Wait till http://homeassistant.local:8123/ is available 
9) Run ```npm run provision```
