// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,


  playFirst: function() {
    this.trigger('play', this);
  },


  initialize: function(){
    this.on('add', function(song){
      console.log(this);
    }, this);
  }

});
