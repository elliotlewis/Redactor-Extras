// Undo and Redo Buttons
// Adapted from offical Redactor site
// https://imperavi.com/redactor/examples/buttons-undo-and-redo/

if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.bufferbuttons = function()
{
    return {
        init: function()
        {
            var undo = this.button.addFirst('undo', 'Undo');
            var redo = this.button.addAfter('undo', 'redo', 'Redo');

            this.button.addCallback(undo, this.buffer.undo);
            this.button.addCallback(redo, this.buffer.redo);

            this.button.setIcon(undo, '<i class="re-icon-undo"></i>');
            this.button.setIcon(redo, '<i class="re-icon-redo"></i>');
        }
    };
};
