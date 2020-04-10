$(function() {

  //Create element
  var myMedia = document.createElement("audio");
  myMedia.setAttribute("preload", "auto");
  $("#player").append(myMedia);
  myMedia.id = "myMedia";


  function playAudio(fileName) {
     var mediaExt =  (myMedia.canPlayType('audio/mp3')) ? '.mp3' : (myMedia.canPlayType('audio/ogg')) ? '.ogg' : '';
     myMedia.src = fileName + mediaExt;
     myMedia.pause();
     myMedia.currentTime = 0;
     myMedia.loop = true;
    //  myMedia.setAttribute = ('loop','loop');
     setVolume();
     myMedia.play();
     //Seamless looping
     myMedia.addEventListener('timeupdate', function(){
      var buffer = .50 //0.44 default
      if(this.currentTime > this.duration - buffer){
          this.currentTime = 0
          this.play()
      }
    })

    
    //  $("#myMedia").on("play", function(){
    //   //  console.log("playing");
    //   var volumeSlider = $("#volume");
    // //Default volume on load
    //   var mediaVolume = volumeSlider.val()/100;
    //   myMedia.volume = 0;
    //   $("#myMedia").animate({mediaVolume}, 1000);
    //  });
  }

  function setVolume() {
    var volumeSlider = $("#volume");
    //Default volume on load
    myMedia.volume = volumeSlider.val()/100;
    //Seeking Volume
    volumeSlider.on("input", function(e){
      myMedia.volume = $(this).val() / 100;
    })

  }


  $(".moments").on("click","img", function(){
    $(".moments img").removeClass( "current-moment" );
    //fade out intro copy
    $(".intro").fadeOut();
    //fade in player
    $(".player").fadeTo( "slow", 1 );
    var index = $(this).index();
    if (index == 0) {
      $('body').css("background-image", "url(img/bg-moment-1.jpg)");
      $(this).addClass( "current-moment" );
      playAudio("audio/moment-1");
      
      
    } else if ( index == 1) {
      $('body').css("background-image", "url(img/bg-moment-2.jpg)");
      $(this).addClass( "current-moment" );
      playAudio("audio/moment-2");

    } else if ( index == 2) {
      $('body').css("background-image", "url(img/bg-moment-3.jpg)");
      $(this).addClass( "current-moment" );
      playAudio("audio/wind-1");

    } else {
      $('body').css("background-image", "url(img/bg-moment-4.jpg)");
      $(this).addClass( "current-moment" );
      playAudio("audio/stream-1");
    }


  });




});