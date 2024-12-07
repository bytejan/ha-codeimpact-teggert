Option 1: Use the "Custom Header" Add-On (if available)
Install the Custom Header add-on:

This is a custom add-on for Home Assistant that allows you to control the visibility of tabs based on users, themes, and more.
Install it via HACS (Home Assistant Community Store).
Configure the visibility:

Add the following to your configuration.yaml or the custom_header section in your Home Assistant UI:


custom_header:
  compact_mode: true
  tab_hide:
    - 'frigate'
  exceptions:
    - conditions:
        user: AdminUser
      config:
        tab_hide: []

Replace AdminUser with the name of the admin user. The tab_hide directive hides the Frigate tab for all users except the admin.
Restart Home Assistant to apply the changes.


Option 2: Use YAML Automation for a Custom View
If you don't want to use third-party tools, you can set up a conditional dashboard:

Create separate dashboards:

In the Home Assistant UI, go to Configuration > Dashboards and create a new dashboard for non-admin users.
Customize the dashboard:

Remove the Frigate tab from the dashboard meant for non-admins.
Restrict access:

Use the visibility option in lovelace configuration to assign specific dashboards to specific users.
Example YAML:

yaml
Copy code
views:
  - title: Admin View
    visible:
      - user: admin_user_id
    badges: []
    cards:
      - type: entities
        entities:
          - sensor.frigate
  - title: Non-Admin View
    visible:
      - user: non_admin_user_id
    badges: []
    cards:
      - type: entities
        entities:
          - sensor.weather
Replace admin_user_id and non_admin_user_id with the actual user IDs. You can find the user IDs in the Configuration > People section.

Set default dashboard per user:

In Configuration > Users, assign the new dashboard to non-admin users.
Option 3: Conditional Lovelace Cards
If you want to keep a single dashboard but show/hide specific cards or tabs:

Use Conditional Cards:

Wrap your Frigate tab or card in a conditional card that checks for the user role:
yaml
Copy code
type: conditional
conditions:
  - user: admin_user_id
card:
  type: entities
  entities:
    - camera.frigate
Only admins will see the Frigate tab or card based on the condition.

