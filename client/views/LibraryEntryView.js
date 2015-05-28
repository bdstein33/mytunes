// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  events: {
    'click .play': function() {
      this.model.play();
    },
    'click .enqueue': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    var source = $('#library-template').html();
    var template = Handlebars.compile(source);
    var context = this.model.attributes;
    var html = template(context);
    return this.$el.html(html);
  }

});
