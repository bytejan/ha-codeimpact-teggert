#!/bin/bash

# Function to install and configure an add-on
install_addon() {
    local addon_slug=$1
    echo "Installing $addon_slug add-on..."
    ha addons install "$addon_slug"
    echo "Setting $addon_slug add-on to start on boot..."
    ha addons start "$addon_slug"
    ha addons options --auto "$addon_slug"
    echo "$addon_slug add-on installed and configured to start on boot."
}

# Function to install a HACS integration
install_hacs_integration() {
    local integration_repo=$1
    echo "Installing $integration_repo integration via HACS..."

    # Navigate to the HACS configuration directory
    HASS_CONFIG_DIR="/usr/share/hassio/homeassistant"
    CUSTOM_COMPONENTS_DIR="$HASS_CONFIG_DIR/custom_components"

    mkdir -p "$CUSTOM_COMPONENTS_DIR"

    # Clone or download the HACS integration
    REPO_NAME=$(basename "$integration_repo")
    wget -q -O /tmp/"$REPO_NAME".zip "https://github.com/$integration_repo/archive/refs/heads/main.zip"
    unzip -q /tmp/"$REPO_NAME".zip -d "$CUSTOM_COMPONENTS_DIR"
    mv "$CUSTOM_COMPONENTS_DIR/$REPO_NAME-main" "$CUSTOM_COMPONENTS_DIR/$REPO_NAME"
    rm /tmp/"$REPO_NAME".zip

    echo "$integration_repo integration installed."
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

# Install HACS
wget -O - https://get.hacs.xyz | bash -

# Install desired HACS integrations
install_hacs_integration "custom-components/alexa_media_player"
install_hacs_integration "custom-components/sensor.custom_json"

echo "All add-ons and HACS integrations have been installed and configured."