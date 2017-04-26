(function() {
    function SongPlayer() {
         var SongPlayer = {};
         /**
         * @desc Buzz object audio file
         * @type {Object}
         */
         var currentBuzzObject = null;
         /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
         var setSong = function(song) {
              if (currentBuzzObject) {
                  currentBuzzObject.stop();
                  SongPlayer.currentSong.playing = null
              }

          currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
           });

          SongPlayer.currentSong = song
      };
        /**
        /* @desc plays currentBuzzObject and sets playing property of song to true
        /* @param {Object} song
        */
         var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
         }

         SongPlayer.currentSong = null;

         /**
         /* @desc plays the current song
         /* @param {Object} song
         */
         SongPlayer.play = function(song) {
              song = song || SongPlayer.currentSong;
              if (SongPlayer.currentSong !== song) {
                  setSong(song);
                  playSong(song);
              } else if (SongPlayer.currentSong === song) {
                  if (currentBuzzObject.isPaused()) {
                      playSong(song);
              }
          }
      };
          /**
          /* @desc pauses the current song
          /* @param {Object} song
          */
          SongPlayer.pause = function(song) {
              song = song || SongPlayer.currentsong;
              currentBuzzObject.pause();
              song.playing = false;
         };

      return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
