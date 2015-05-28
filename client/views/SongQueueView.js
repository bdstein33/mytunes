// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    console.log('initialize SQV');
    this.render();
    // console.log(this.collection);
    this.collection.on('add', this.render, this);
  },



  render: function() {
    console.log('rendering SQV');
    console.log(this);
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
