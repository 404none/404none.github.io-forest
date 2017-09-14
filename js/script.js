var navToggle = document.querySelector('.nav-toggle');
var navList = document.querySelector('.nav__list');

navToggle.addEventListener('click',function(e){

    this.classList.toggle('open');
    navList.classList.toggle('open');

    if( navToggle.classList.contains('open')){

        this.setAttribute('aria-expanded', true);
    } else {
        this.setAttribute('aria-expanded', false);
    }

}, false);


$(document).ready(function(){
	$('a[href^="#"]').click(function(e){
		e.preventDefault(); 

		var headerHeight = $('.header').outerHeight();
		var target = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $(target).offset().top - headerHeight,
		}, 1000);
		location.hash = target;
		$('.nav__list').removeClass('open');
		$('.nav-toggle').removeClass('open');
	});
});







window.addEventListener('scroll', function(){

    var header = document.querySelector('header');
    var headerHeight = header.offsetHeight;

    if( document.body.scrollTop > headerHeight) {

        header.classList.add('smallHeader');

    } else {

        header.classList.remove('smallHeader')
    }

}, false);




var section = document.querySelectorAll('section[id]');
var sections = {};
var i = 0;
var header = document.querySelector('header');
var headerHeight = header.offsetHeight;

Array.prototype.forEach.call(section, function(e) {

    sections[e.id] = e.offsetTop -64;

});

window.onscroll = function(){
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections){
        if(sections[i] <= scrollPosition){
            document.querySelector('.active').classList.remove('active');
            document.querySelector('a[href*=' + i + ']').classList.add('active');

        }
    }
};
