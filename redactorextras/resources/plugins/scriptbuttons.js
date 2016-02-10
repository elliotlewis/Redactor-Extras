// Superscript and Subscript buttons
// Adapted from offical Redactor site
// https://imperavi.com/redactor/examples/buttons-sup-and-sub/

if (!RedactorPlugins) var RedactorPlugins = {};
 
RedactorPlugins.scriptbuttons = function()
{
    return {
        init: function()
        {
            var sup = this.button.add('superscript', 'x²');
            var sub = this.button.add('subscript', 'x₂');

            this.button.addCallback(sup, this.scriptbuttons.formatSup);
            this.button.addCallback(sub, this.scriptbuttons.formatSub);
        },
        formatSup: function()
        {
            this.inline.format('sup');
        },
        formatSub: function()
        {
            this.inline.format('sub');
        }
    };
};