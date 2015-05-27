// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %> | <span class="play">PLAY</span> | <span class="enqueue">ADD TO QUEUE</span></td>'),

  events: {
    'click .play': function() {
      this.model.play();
    },
    'click .enqueue': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
