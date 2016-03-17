// Predefined Links
// Modified from offical Redactor site
// https://imperavi.com/redactor/plugins/definedlinks/

if (!RedactorPlugins) var RedactorPlugins = {};
 
RedactorPlugins.definedlinks = function()
{
    return {
        init: function()
        {
            if (!this.opts.definedLinks)
            {
                return;
            }

            this.modal.addCallback('link', $.proxy(this.definedlinks.load, this));
        },
        load: function()
        {
            var $section = $('<section />');
            var $select = $('<select id="redactor-defined-links" />');

            $section.append($select);
            this.modal.getModal().prepend($section);

            // Handle camelcase, don't know why the feck require this, might be legacy
            var definedlinks = (this.opts.definedlinks) ? this.opts.definedlinks : this.opts.definedLinks;

            $(definedlinks).each(function(i){
                $select.append($('<option>').val(i).html(definedlinks[i].name));
            });
            
            $select.on('change', $.proxy(this.definedlinks.select, this));
            
            this.opts.definedLinks.originalText = this.selection.text();
        },
        select: function(e)
        {
            var key = $(e.target).val();
            var name = '', url = '';

            var definedlinks = (this.opts.definedlinks) ? this.opts.definedlinks : this.opts.definedLinks;
            name = definedlinks[key].name;
            url = definedlinks[key].url;

            $('#redactor-link-url').val(url);

            if (url === '') name = this.opts.definedLinks.originalText;
            
            $('#redactor-link-url-text').val(name);
        }
    };
};