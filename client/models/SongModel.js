// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    playCount: 0,
    activeSong: false,
    src: ""
  },

  play: function(){
    this.trigger('play', this);
    this.set('playCount', this.get('playCount')+1);
    this.set('activeSong', true);
  },

  nextSong: function(){
    this.trigger('nextSong', this);
    this.set('activeSong', false);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

});
