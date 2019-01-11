(function() {
    'use strict';

    /*
    This script causes any Asciinema player on a slide to start playing as soon as the slide
    is made active.
     */

    document.addEventListener('DOMContentLoaded', function() {
        Reveal.addEventListener( 'slidechanged', startAsciinema);
    });

    var startAsciinema = function (event) {
        let players = event.currentSlide.querySelectorAll('asciinema-player');
        players.forEach((player) => player.play());
    };

})();
