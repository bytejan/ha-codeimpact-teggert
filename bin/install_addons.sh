#!/bin/bash

# Function to install and configure an add-on
install_addon() {
    local addon_slug=$1
    echo "Installing $addon_slug add-on..."
    ha addons install "$addon_slug"
    echo "Setting $addon_slug add-on to start on boot..."
    ha addons start "$addon_slug"
#    ha addons options --auto "$addon_slug"
    echo "$addon_slug add-on installed and configured to start on boot."
}

# Check if the 'ha' command is available
if ! command -v ha &> /dev/null; then
    echo "Home Assistant CLI ('ha') is not installed or not in PATH."
    echo "Please ensure you are using Home Assistant OS or Supervised with 'ha' CLI available."
    exit 1
fi

# Install desired add-ons
install_addon "core_ssh"      # SSH & Web Terminal
install_addon "core_samba"    # Samba share for easy access to config files
install_addon "core_mosquitto" # MQTT broker
install_addon "core_hacc"     # HACC (example slug, replace if needed)

echo "All add-ons have been installed and configured."