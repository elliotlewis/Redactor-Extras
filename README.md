Redactor Extras for Craft
=========================

Useful Redactor plugins for Craft's richtext field
--------------------------------------------------

### Version History

1.0 : 10 February 2016

### Requirements

 + Craft 2.5+
 + Redactor 2

This has only been tested with the latest Craft, may or may not work in older versions. Definitely requires Redactor 2.

### Installation

Copy the redactorexatras folder into `craft/plugins`, then go to `Settings > Plugins` in the Craft Control Panel and click 'Install'.

### Configuration

Once installed, in Craft go to `Settings > Plugins` and click the small cog or go to `Settings > Redactor Extras`.

To use a plugin edit an existing config or create a new config json file as per Craft's [documentation](https://craftcms.com/docs/rich-text-fields#redactor-configs).

If you turn on all available plugins, an example config could be:

    {
        "plugins": ["scriptbuttons", "counter", "alignment"]
    }
    
### Description

Available plugin are:

 + Superscript and Subscript
 + Word count
 + Alignment
 + Custom plugin

#### Superscript and Subscript

Adds superscript and subscript buttons to the toolbar. In source, the text is surrounded with `<sup>` and `<sub>`.

![Image of Redactor with superscript](readme-images/superscript.png "Super!")

#### Word / Character count

Adds a 'Word count' button to the toolbar. Overlay modal appears with word and character count.

![Image of Redactor with superscript](readme-images/count.png "Super!")

#### Alignment

Adds an 'Alignment' button to the toolbar. Aligns text block by adding a class, `text-center` or `text-right`.

![Image of Redactor with superscript](readme-images/align.png "Super!")

### Your own custom plugin

There's also the option to create your own Redactor plugin and link to the JS and CSS files. Just fill-in the paths in settings under, 'Custom plugin'.