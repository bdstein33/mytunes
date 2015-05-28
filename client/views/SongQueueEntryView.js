// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  events: {
    'click .dequeue': function() {
      this.model.dequeue();
    }
  },

  render: function() {
    // return this.$el.html(this.template(this.model.attributes));
    var source = $('#songqueue-template').html();
    var template = Handlebars.compile(source);
    var context = this.model.attributes;
    var html = template(context);
    return this.$el.html(html);
  }
});
