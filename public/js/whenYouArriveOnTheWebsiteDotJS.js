/*


ye ye it's when you arrive on the website, the different div will be reveal


 */

$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1750);

    window.sr = ScrollReveal({ reset: false });


    sr.reveal('.foo', {
        duration: 1500,
    });

    sr.reveal('.foo-top', {
        origin: 'top',
        distance: '2em',
        duration: 1500
    });

    sr.reveal('.foo-left', {
        origin: 'left',
        distance: '2em',
        duration: 1500
    });

    sr.reveal('.foo-right', {
        origin: 'right',
        distance: '25px',
        duration: 1500
    });

    sr.reveal('.foo-bottom', {
        origin: 'bottom',
        distance: '5em',
        duration: 1000
    });

    sr.reveal('.foo-bottom2', {
        origin: 'bottom',
        distance: '5em',
        duration: 1500
    });

    sr.reveal('.foo-bottom3', {
        origin: 'bottom',
        distance: '5em',
        duration: 2000
    });

    sr.reveal('.foo-bottom4', {
        origin: 'bottom',
        distance: '30em',
        duration: 2000
    });
    sr.reveal('.foo-top2', {
        origin: 'top',
        distance: '5em',
        duration: 1000
    });

    sr.reveal('.foo-top3', {
        origin: 'top',
        distance: '5em',
        duration: 1500
    });

    sr.reveal('.foo-top4', {
        origin: 'top',
        distance: '5em',
        duration: 2000
    });
});
