/** ga plugin **/
            (function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  videojs.plugin('ga', function(options) {
    var adStateRegex, currentVideo, end, href, iframe, isInAdState, loaded, parsedOptions, pause, play, player, referrer, timeupdate, tracker,
      _this = this, metadataLoaded = false, paused = false, videoName = "", videoId, track0 = 0, track25 = 0, track50 = 0, track75 = 0, track90 = 0, track95 = 0;
    referrer = document.createElement('a');
    referrer.href = document.referrer;
    if (self !== top && window.location.host === 'preview-players.brightcove.net' && (referrer.hostname = 'studio.brightcove.com')) {
      videojs.log('Google analytics plugin will not track events in Video Cloud Studio');
      return;
    }
    player = this;
    adStateRegex = /(\s|^)vjs-ad-(playing|loading)(\s|$)/;
    isInAdState = function(player) {
      return adStateRegex.test(player.el().className);
    };
    loaded = function() {
      if (!isInAdState(player)) {
		metadataLoaded = true;
          videoName = "error: video name not available";
		  videoId = "error: video id not available";
		  if (player.mediainfo) {
			if(player.mediainfo.name)
				videoName = player.mediainfo.name;
			if(player.mediainfo.id)
				videoId = player.mediainfo.id;
		  } 
      }
    };
    timeupdate = function() {
      var currentTime, duration, percent, percentPlayed;
      if (!isInAdState(player)) {
        currentTime = Math.round(this.currentTime());
        duration = Math.round(this.duration());
        percentPlayed = Math.round(currentTime / duration * 100);		
		if (percentPlayed >= 50 && percentPlayed <= 53) {
				percentPlayed = "mid";
			}
			if (percentPlayed == "mid") {
				if (track50 == 0) {
					percentPlayed = 50;
					wap_tms.HTML5_brightcove.videoProgress(duration,percentPlayed, videoName, videoId);
					track50 = 1;
				}
			} else if (percentPlayed >= 1 && percentPlayed <= 4) {
				if (track0 == 0) {
					play();
				}
			} else if (percentPlayed >= 25 && percentPlayed <= 28) {
				if (track25 == 0) {
					percentPlayed = 25;
					wap_tms.HTML5_brightcove.videoProgress(duration,percentPlayed, videoName, videoId);
					track25 = 1;
				}
			} else if (percentPlayed >= 75 && percentPlayed <= 78) {
				if (track75 == 0) {
					percentPlayed = 75;
					wap_tms.HTML5_brightcove.videoProgress(duration,percentPlayed, videoName, videoId);
					track75 = 1;
				}
			} else if (percentPlayed >= 90 && percentPlayed <= 93) {
				if (track90 == 0) {
					percentPlayed = 90;
					wap_tms.HTML5_brightcove.videoProgress(duration,percentPlayed, videoName, videoId);
					track90 = 1;
				}
			} else if (percentPlayed >= 95 && percentPlayed <= 98) {
				if (track95 == 0) {
					percentPlayed = 95;
					wap_tms.HTML5_brightcove.videoProgress(duration,percentPlayed, videoName, videoId);
					track95 = 1;
				}
			}		
      }
    };
    end = function() {
	  if (!isInAdState(player)){
		wap_tms.HTML5_brightcove.videoEnd(videoName, videoId);
      }
    };
    play = function() {	
      if (!isInAdState(player) && metadataLoaded && !paused) {
		duration = Math.round(player.duration());
		track0 = 1;
		wap_tms.HTML5_brightcove.videoPlay(duration, videoName, videoId);        				
		track25 = 0;
		track50 = 0;
		track75 = 0;
		track90 = 0;
		track95 = 0;
      }
	  paused = false;
    };
    pause = function() {
      var currentTime, duration;
      if (!isInAdState(player) && !this.ended()) {
		paused = true;
      }
    };
    this.ready(function() {
      this.on("loadedmetadata", loaded);
      this.on("timeupdate", timeupdate);
	  this.on("play", play);
	  this.on("pause", pause);
	  this.on("ended", end);
    });
  });

}).call(this);