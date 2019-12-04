> **WARNING!** : I am currently doing a lot of breaking changes. Like all the time, everyday. So you might want to wait if you plan on using this theme for [inheritance](https://learn.getgrav.org/16/themes/customization) and keep receiving updates.

> **What's Next?** : Changing how reveal animations works. So class names used in reveal attributes (all over the place) and the animations, delays, and durations css files. The aim is to have an easy and non-disruptive way of customizing animations without having to extend whole modular or page. It will most likely result in a single css file. First wave of changes is in 1.3.4 with the change to default reveal animations.

**You can [send me money](https://www.paypal.me/hotdoy) if you want to.**

# Hotdoy Theme

![Theme screenshot](https://raw.githubusercontent.com/hotdoy/grav-theme-hotdoy/master/screenshot.jpg)

The **Hotdoy** Theme is meant to be a starting point for projects using [Grav CMS](http://github.com/getgrav/grav).
It is in active developpement and not suited for inheritance at the moment unless you dont mind thing changing all the times.

A live demo is available at [hotdoy.ca](https://hotdoy.ca). I still have content to write but you get the idea.

For the moment, here is a list of what I run..
* Admin Panel
* Admin Addon User Manager
* Auto Date
* Data Manager
* DevTools
* Email
* Error
* Form
* Login
* Problems
* Quick Tray Links
* Shortcode Core
* Sitemap

# Installation
Installing the Hotdoy theme can be done in one of two ways. The GPM (Grav Package Manager) installation method enables you to quickly and easily install the theme with a simple terminal command, while the manual method enables you to do so via a zip file.

The theme by itself is useful, but you may have an easier time getting up and running by installing a skeleton (not ready yet. Sorry).

## GPM Installation (Preferred)

The simplest way to install this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) through your system's Terminal (also called the command line).  From the root of your Grav install type:

    bin/gpm install hotdoy

This will install the Quark theme into your `/user/themes` directory within Grav. Its files can be found under `/your/site/grav/user/themes/hotdoy`.

## Manual Installation

To install this theme, just download the zip version of this repository and unzip it under `/your/site/grav/user/themes`. Then, rename the folder to `hotdoy`. You can find these files either on [GitHub](https://github.com/getgrav/grav-theme-hotdoy) or via [GetGrav.org](http://getgrav.org/downloads/themes).

You should now have all the theme files under

    /your/site/grav/user/themes/hotdoy

# Theme Options

Hotdoy comes with a few options that can be set site-wide.  These options are:

```yaml
enabled:                    # Enable the theme
Browser Color:              # Set the <meta name="theme-color"> for supported browsers.
Background Color:           # Set the main background color (Used for text, modules and other non-interactive elements).
Foreground Color:           # Set the main foreground color (Used for text, modules and other non-interactive elements).
Alternate background Color: # Set the alternate background color (used in buttons, link and other interactive elements).
Alternate boreground Color: # Set the alternate foreground color (used in buttons, link and other interactive elements).
nav_bg_color
nav_fg_color
nav_panel_bg_color
nav_panel_fg_color
default_radius:             # Default border radius.
rhythm:                     # Space between modules and other elements.
Organization:               # A collection of field describing your organization (generate schema).
google_tracking_id:         # Google analytics id
facebook_app_id:            # Facebook App Id
marquee:                    # A collection of field to add a small marquee at the top of every page.
snipcart:                   # Snipcart Id for eCommerce integration.
analytics
google_maps_api_key
snazzy_maps
tracking:                   # Send me information on domains that use the theme so I know what not to break.
```

To make modifications, you can copy the `user/themes/hotdoy/hotdoy.yaml` file to `user/config/themes/` folder and modify, or you can use the admin plugin.

> NOTE: Do not modify the `user/themes/hotdoy/hotdoy.yaml` file directly or your changes will be lost with any updates

# Concept
The theme is made to be my starter kit for grav projects. But anybody is welcome to try and use it.
Everything will be made readily extendable (in time). It uses css variables heavily so forget old browsers (sorry ie).
The entire color theme is controllable inside the admin panel.

# Shortcodes

## Breakpoint
show content on specific breakpoint.
[portrait], [mobile] and [landscape], [desktop].

## Button
Add buttons with out without material icons
[btn-solid], [btn], [btn-link], [link] 

## Embed
Add [youtube=id] and [vimeo=id] by id

## Note
Use [note] to add unrendered content.

## Material Icons
Add [Material Icons](https://material.io/resources/icons/) with [i]

## Width
Use one of the 3 site witdh. [full], [site], [tight].

# Modular
* Splash
* Hero
* Content
* Video
* Drawers
* Grid
* Map

Every modular is a extended partial. In order to extend an existing Modular, simply copy the modular template file from hotdoy to the child theme. 
If you only modify the commented variables and block, the module should be able to update without any issue. (Check the changelog before updating)

