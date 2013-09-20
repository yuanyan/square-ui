function iniVideoControls() {
    var $video = $('.video video'),
        video = $video.get(0),
        $controls = $(".controls button");

    $controls.on("click", function() {
        var $this = $(this);
        if ( $this.hasClass("play") ) {
            video.play();
            $this.removeClass("play").addClass("pause");
        } else if ( $this.hasClass("pause") ) {
            video.pause();
            $this.removeClass("pause").addClass("play");
        }
    });

    $video.on("timeupdate", function() {
        if (video.duration > 0) {
            setTimeout(function() {
              $controls.fadeIn('slow');
            }, 2000);
        }
    });
};

jQuery(document).ready(function($) {
    // initialize video
    iniVideoControls();
});