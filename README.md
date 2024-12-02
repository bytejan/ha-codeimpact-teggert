# Home Assistant Configuration

This repository contains the configuration files, scripts, and automations for my smart home setup, which integrates various devices, protocols, and custom components to create a fully automated, responsive home environment.

## Table of Contents
- [Overview](#overview)
- [Protocols & Platforms](#protocols--platforms)
- [Global Configuration ](#global-configuration)
- [Devices & Integrations](#devices--integrations)
  - [Smart Speakers](#smart-speakers)
  - [Custom Devices](#custom-devices)
  - [Unifi Network & Security](#unifi-network--security)
- [Room Configurations](#room-configurations)
  - [Rooms](#rooms)
  - [Room setup](#room-setup)
- [Scripts & Automations](#scripts--automations)
- [Security Setup](#security-setup)
- [Future Plans](#future-plans)
- [Additional Information](#additional-information)

---

## Overview
This configuration leverages **Home Assistant** to integrate and automate various smart devices, including lighting, security, and media control across multiple rooms. Key protocols and technologies used include KNX, Zigbee, Matter, WiFi, and Unifi.

### Functionality

- See if there is somebody at home and distinguish between the different people like family and guests
- Overview of devices and their status
- Setting the alarm system
- Notifications when there is an agenda item, bad weather, or when the alarm system is triggered
- Control the lights and the heating
- Overview of the energy consumption
- Control the music and the TV

### Main Dashboard

- Agenda (based on the User's Calendar)
- Weather forecast
- Presence per room
- Notifications (like the alarm system)
- Media control
- Air quality
- Scenes
- Overview of running devices (like lights, heating, and music)
- Camera's
- Power consumption
- Alarm system
- Next meeting
- Climate control

## Protocols & Platforms
These are the core protocols and platforms integrated into this smart home setup:

- **KNX**: Wired protocol for stable, hardwired connections. Used for lighting, security sensors, and other core automations.
- **Zigbee**: Wireless protocol, primarily for low-power devices (sensors, switches).
- **Matter**: Interoperability protocol for enhanced cross-device compatibility.
- **WiFi**: Utilized for certain high-bandwidth devices and custom-built devices.
- **ESPHome** (Planned): Potential platform for custom devices built on ESP32/ESP8266 boards, offering control over sensors, lights, and other components.

## Global Configuration

- MQTT

## Devices & Integrations

### Smart Speakers
- **Amazon Echo (Alexa)**: Voice assistant for controlling various devices and automations.
- **Google Mini**: Google Assistant for voice control and routines.
- **Apple HomePod Mini**: Apple’s ecosystem voice assistant. Planned to integrate with Home Assistant via HomeKit.
  
> **Future**: Considering custom-built speakers based on ESP32/Zigbee for local control without dependency on external cloud services.

### Custom Devices
- **ESPHome/Zigbee/WiFi Devices**: Custom devices being developed, with the potential to replace current smart speakers with local-control alternatives.

### Unifi Network & Security
The network setup is powered by Ubiquiti’s Unifi ecosystem:

- **Unifi Dream Machine**: Central management for all Unifi network devices.
- **Unifi Switch**: Managed PoE switch connecting various networked devices.
- **Unifi Cameras**: Security cameras connected to the Unifi setup for real-time monitoring.
- **Unifi Doorbell**: Smart doorbell integrated with Home Assistant to trigger automations.
- **Alarmo Integration**: Planned integration to manage security events triggered by the doorbell and cameras.

## Room Configurations

### Rooms
Crawl Space

First floor
-	Driveway (Optional)
-	Front yard
-	Entrance
-	Hall (Cabinet)
-	Toilet
-	Kitchen
-	Laundry Room
-	Living Room
-	Dining room
-	Office
-	(stairs)
-	Toilet
-	Backyard

2nd floor
-	Bathroom
-	Bedroom
-	Guest room
-	Landing
-	Boiler Room

### Room setup
Each room has unique configurations based on the devices and protocols used:

1. **Living Room**:
   - Devices: Amazon Echo, smart TV, motion sensors
   - Automations: Lights dimming based on time, motion-activated lighting

2. **Kitchen**:
   - Devices: Google Mini, temperature sensors, KNX lighting
   - Automations: Motion-activated lights, temperature-based fan control

3. **Bedrooms**:
   - Devices: HomePod Mini, Zigbee sensors, smart lights
   - Automations: Wake-up lights, evening routines

4. **Office**:
   - Devices: Custom ESP32 devices, motion sensors, Unifi security camera
   - Automations: Lighting based on occupancy, security monitoring

## Scripts & Automations
This setup includes several scripts and automations to control devices and manage interactions across the home.

- **Lighting Automations**: Based on occupancy, time of day, or manual triggers.
- **Security Automations**: Integrates doorbell, Unifi cameras, and motion sensors. Alarm triggers from cameras and doorbell activate notifications and other security responses.
- **Environmental Controls**: Automations to manage air quality, temperature, and lighting based on room occupancy and conditions.

## Security Setup
Security is managed with Unifi’s cameras, doorbell, and the `Alarrmo` integration in Home Assistant. These are set up to:

- **Monitor key entry points**: Cameras cover main entryways, and the doorbell records visitors.
- **Trigger Automations**: Security alerts can trigger additional lighting, alarms, or notifications.
- **Frigate Integration** (Separate Server): Frigate is installed on a dedicated server for enhanced camera analytics, offering real-time person detection and alerting based on camera feeds.

## Future Plans
- **Expand Custom Devices**: Develop more custom-built devices with ESPHome and/or Zigbee.
- **Create Local-Control Smart Speakers**: Replace current smart speakers with privacy-focused, local-control options.
- **Enhance Security Automations**: Add more automated routines based on person detection and integrate advanced scene control with Loxone.

## Additional Information
- **Network Topology**: Detailed network map is included in the network configuration files.
- **Git Integration**: Configurations, custom themes, and scripts are managed in Git to ensure easy tracking and version control.
- **Backup and Recovery**: Regular backups are configured for critical configurations and automations.

This setup allows for efficient, stable, and highly configurable smart home management, using a blend of commercial and custom-built devices.
