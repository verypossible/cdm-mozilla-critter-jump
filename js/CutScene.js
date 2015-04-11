// //cut scene to play videos between game play
Critterer.CutScene = function(game){
    //   this.Scorpions = "https://vimeo.com/112414428?api=1&player_id=vimeoplayer1";
    //   this.Walking_Stick = "https://vimeo.com/111256268?api=1&player_id=vimeoplayer2";
    //   this.Walking_Stick_Breathe = "https://vimeo.com/111256267?api=1&player_id=vimeoplayer3";
    //   this.Walking_Stick_do = "https://vimeo.com/111256266?api=1&player_id=vimeoplayer4";
    //   this.Walking_Sticks_live = "https://vimeo.com/111256265?api=1&player_id=vimeoplayer5";
    //   this.valueToUse;
//     //   this.iframe = $('#vimeoplayer')[0];
//     //   this.player = $(this.iframe);
//     //   this.status1 = $('.status');
    
};
    

    
 Critterer.CutScene.prototype = {
    //  picker: function() {
    //      var values = [
    //          this.Scorpions,
    //          this.Walking_Stick,
    //          this.Walking_Stick_Breathe,
    //          this.Walking_Stick_do,
    //          this.Walking_Sticks_live
    //      ];
            
    //      this.valueToUse = values[Math.floor(Math.random() * values.length)];
                      
    //  },

    

  create: function() {
      $(function() {
    var player = $('#player1')[0];
    var url = window.location.protocol + player.attr('src').split('?')[0];
    var status = $('.status');

    // Listen for messages from the player
    if (window.addEventListener){
        window.addEventListener('message', onMessageReceived, false);
    }
    else {
        window.attachEvent('onmessage', onMessageReceived, false);
    }

    // Handle messages received from the player
    function onMessageReceived(e) {
        var data = JSON.parse(e.data);
        
        switch (data.event) {
            case 'ready':
                onReady();
                break;
               
            case 'playProgress':
                onPlayProgress(data.data);
                break;
                
            case 'pause':
                onPause();
                break;
               
            case 'finish':
                onFinish();
                break;
        }
    }

    // Call the API when a button is pressed
    $('button').on('click', function() {
        post($(this).text().toLowerCase());
    });
<<<<<<< HEAD

    // Helper function for sending a message to the player
    function post(action, value) {
        var data = {
          method: action
        };
        
        if (value) {
            data.value = value;
        }
        
        var message = JSON.stringify(data);
        player[0].contentWindow.postMessage(data, url);
    }

    function onReady() {
        status.text('ready');
        
        post('addEventListener', 'pause');
        post('addEventListener', 'finish');
        post('addEventListener', 'playProgress');
    }

    function onPause() {
        status.text('paused');
    }

    function onFinish() {
        //here is where the close code will go.
    }

    function onPlayProgress(data) {
        status.text(data.seconds + 's played');
    }
});
//       $.fancybox({
//               maxWidth	    : 800,
//               maxHeight	    : 600,
//               fitToView	    : true,
//               width		    : '70%',
//               height		: '70%',
//               autoSize	    : true,
//               closeClick	: false,
//               openEffect	: 'none',
//               closeEffect	: 'none',
//               href          : this.valueToUse,
//               helpers       : {
//                   media : {}
//               },
              
    // });
    
//     this.player.addEvent('ready', function() {
//         this.status1.text('ready');
        
//         this.player.addEvent('pause', onPause);
//         this.player.addEvent('finish', onFinish);
//         this.player.addEvent('playProgress', onPlayProgress);
//     });
    

  },

=======
},
 
>>>>>>> 56e699a6314a3fc3f7c4fb8c1856aa05081a128b
  update: function() {

	},     

//     onPause: function (id) {
//         this.status1.text('paused');
//     },

//     onFinish: function (id) {
//         this.status1.text('finished');
//     },

//     onPlayProgress: function (data, id) {
//         this.status1.text(data.seconds + 's played');
//     },

};