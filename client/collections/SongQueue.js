// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  queue: [],

  add: function(song) {
    // if (this.queue.length === 0){
    //   song.play();
    // }
    this.queue.push(song);
  },

  remove: function() {

  },

  playFirst: function() {
    this.trigger('play', this);
  },


  initialize: function(){
  }

});
