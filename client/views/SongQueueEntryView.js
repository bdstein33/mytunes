// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',
  template: _.template('<td>(<%= artist %>)</td><td><%= title %> | <span class="dequeue">REMOVE FROM QUEUE</span></td>'),

  events: {
    'click .dequeue': function() {
      this.model.dequeue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
