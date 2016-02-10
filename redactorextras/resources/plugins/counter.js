// Word counter
// Adapted from offical Redactor site
// https://imperavi.com/redactor/plugins/counter/

if (!RedactorPlugins) var RedactorPlugins = {};
 
RedactorPlugins.counter = function()
{
    return {
        init: function()
        {        
            // As have no access to init of Redactor in Craft add callback from plugin            
            //if (typeof this.opts.callbacks.counter === 'undefined')
            //{
            //    this.opts.callbacks.counter = function(data)
            //    {
            //        console.log(data);
            //    }
            //}

            var button = this.button.add('counter-button', 'Word count');
            this.button.addCallback(button, this.counter.showCount)

            this.core.editor().on('keyup.redactor-plugin-counter', $.proxy(this.counter.count, this));
        },
        count: function()
        {
            var words = 0, characters = 0, spaces = 0;
            var html = this.code.get();

            var text = html.replace(/<\/(.*?)>/gi, ' ');
            text = text.replace(/<(.*?)>/gi, '');
            text = text.replace(/\t/gi, '');
            text = text.replace(/\n/gi, ' ');
            text = text.replace(/\r/gi, ' ');
            text = text.replace(/\u200B/g, '');
            text = $.trim(text);

            if (text !== '')
            {
                var arrWords = text.split(/\s+/);
                var arrSpaces = text.match(/\s/g);

                words = (arrWords) ? arrWords.length : 0;
                spaces = (arrSpaces) ? arrSpaces.length : 0;

                characters = text.length;

            }

            this.core.callback('counter', { words: words, characters: characters, spaces: spaces });

            return { words: words, characters: characters, spaces: spaces };
        },
        showCount: function()
        {
            //var data = this.counter.count();
            //console.log('Words: ' + data.words);
            //console.log('Characters: ' + data.characters);
            //console.log('Characters w/o spaces: ' + (data.characters - data.spaces));
            
            // open modal
            this.modal.addTemplate('counterTemplate', this.counter.getTemplate());
            this.modal.load('counterTemplate', 'Word counter', 500);
 
            var button = this.modal.getActionButton();
            button.on('click', this.counter.insert);
 
            this.modal.show();
        },
        getTemplate: function()
        {
            var data = this.counter.count();
            
            return String()
            + '<div class="modal-section" id="redactor-modal-counter">'
                + '<section><table class="data fullwidth">'
                    + '<tr>'
                    + '<th>Words</th><td>' + data.words + '</td>'
                    + '</tr><tr>'
                    + '<th>Characters</th><td>' + data.characters + '</td>'
                    + '</tr><tr>'
                    + '<th>Characters without spaces</th><td>' + (data.characters - data.spaces) + '</td>'
                    + '</tr>'
                + '</table></section>'
                + '<section>'
                    + '<button id="redactor-modal-button-cancel">Close</button>'
                + '</section>'
            + '</div>';
        }
    };
};