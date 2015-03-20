//cut scene to play videos between game play
Critterer.CutScene = function(game){
      this.Scorpions = "https://vimeo.com/112414428?api=1&player_id=vimeoplayer";
      this.Walking_Stick = "https://vimeo.com/111256268?api=1&player_id=vimeoplayer";
      this.Walking_Stick_Breathe = "https://vimeo.com/111256267?api=1&player_id=vimeoplayer";
      this.Walking_Stick_do = "https://vimeo.com/111256266?api=1&player_id=vimeoplayer";
      this.Walking_Sticks_live = "https://vimeo.com/111256265?api=1&player_id=vimeoplayer";
      this.valueToUse;
      this.iframe = $('#player1')[0];
      this.player = $(this.iframe);
      this.status1 = $('.status');
};
    

    
 Critterer.CutScene.prototype = {
     picker: function() {
         var values = [
             this.Scorpions,
             this.Walking_Stick,
             this.Walking_Stick_Breathe,
             this.Walking_Stick_do,
             this.Walking_Sticks_live
         ];
            
         this.valueToUse = values[Math.floor(Math.random() * values.length)];
                      
     },

    

   create: function() {
      $.fancybox({
              maxWidth	    : 800,
              maxHeight	    : 600,
              fitToView	    : true,
              width		    : '70%',
              height		: '70%',
              autoSize	    : true,
              closeClick	: false,
              openEffect	: 'none',
              closeEffect	: 'none',
              href          : this.valueToUse,
              helpers       : {
                  media : {}
              },
              
    });
    this.player.addEvent('ready', function addEvent() {
        this.status1.text('ready');
        
        this.player.addEvent('pause', onPause);
        this.player.addEvent('finish', onFinish);
        this.player.addEvent('playProgress', onPlayProgress);
    }),
    
    function onPause(id) {
        this.status1.text('paused');
    };

    function onFinish(id) {
        this.status1.text('finished');
    }

    function onPlayProgress(data, id) {
        this.status1.text(data.seconds + 's played');
    }
},

  update: function() {

		} 

};