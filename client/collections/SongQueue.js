// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  playFirst: function() {
    if (this.length > 0) {
      this.shift().play();
    }
  },

  initialize: function(){
  },


});
