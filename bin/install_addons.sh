#!/bin/bash


# Function to install a core add-on directly
install_addon_by_slug() {
    local addon_slug="$1"
    echo "Installing add-on by slug: $addon_slug..."
    ha addons install "$addon_slug"
    if [ $? -eq 0 ]; then
        echo "Successfully installed add-on: $addon_slug"
    else
        echo "Failed to install add-on: $addon_slug"
    fi
}

# Function to install a non-core add-on by adding the repository ID prefix
install_addon() {
    local addon_name="$1"
    if [[ "$addon_name" == core_* ]]; then
        # For core add-ons, directly use the provided name as slug
        install_addon_by_slug "$addon_name"
    else
        # For non-core add-ons, prepend the repository ID
        local repository_id="a0d7b954" # Replace with your repository ID
        local addon_slug="${repository_id}_${addon_name}"
        install_addon_by_slug "$addon_slug"
    fi
}


# Function to install a HACS integration
# install_hacs_integration() {
#     local integration_repo=$1
#     echo "Installing $integration_repo integration via HACS..."

#     # Navigate to the HACS configuration directory
#     HASS_CONFIG_DIR="/usr/share/hassio/homeassistant"
#     CUSTOM_COMPONENTS_DIR="$HASS_CONFIG_DIR/custom_components"

#     mkdir -p "$CUSTOM_COMPONENTS_DIR"

#     # Clone or download the HACS integration
#     REPO_NAME=$(basename "$integration_repo")
#     wget -q -O /tmp/"$REPO_NAME".zip "https://github.com/$integration_repo/archive/refs/heads/main.zip"
#     unzip -q /tmp/"$REPO_NAME".zip -d "$CUSTOM_COMPONENTS_DIR"
#     mv "$CUSTOM_COMPONENTS_DIR/$REPO_NAME-main" "$CUSTOM_COMPONENTS_DIR/$REPO_NAME"
#     rm /tmp/"$REPO_NAME".zip

#     echo "$integration_repo integration installed."
# }

# Check if the 'ha' command is available
# if ! command -v ha &> /dev/null; then
#     echo "Home Assistant CLI ('ha') is not installed or not in PATH."
#     echo "Please ensure you are using Home Assistant OS or Supervised with 'ha' CLI available."
#     exit 1
# fi

install_addon "core_samba"    # Samba share for easy access to config files
install_addon "core_mosquitto" # MQTT broker
install_addon "vscode" # Non-core add-on by name

# Install HACS
# wget -O - https://get.hacs.xyz | bash -

# Install desired HACS integrations
#install_hacs_integration "custom-components/alexa_media_player"
#install_hacs_integration "custom-components/sensor.custom_json"

echo "All add-ons and HACS integrations have been installed and configured."