// $(document).ready(function(){
// 	$('.nav-toggle').click(function(){
// 		$('.nav__list').toggleClass('open');
// 		$(this).toggleClass('open');

// 		if ($('.nav-toggle').is('.open')) {
// 			$(this).attr('aria-expanded', true);
// 		} else {
// 			$(this).attr('aria-expanded', false);
// 		}
// 	});
// });

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




// var links = document.querySelectorAll('a[href^="#"]');

// function animateScroll(){

//     var headerE = document.querySelector('header');
//     var headerHeight = headerE.offsetHeight;


//     var marginY = 0;
//     var destination = document.body.scrollTop;
//     var speed = 5;
//     var scroller = null;

         

//     scroller = setTimeout(function(){
//         animateScroll();

//     }, 1);

//     marginY = marginY + speed;

//     if( marginY >= destination ){

//         clearTimeout(scroller);
//     }

//     window.scroll(0, marginY);
        
// }

// for(var i =0 ; i < links.length ; i++) {
    
//     links[i].addEventListener('click', function(e){

//         e.preventDefault();
//         e.stopPropagation();

//         var target = this.getAttribute('href');
//         location.hash = target;

//         animateScroll();

//         var navList = document.querySelector('.nav__list');
//         var navToggle = document.querySelector('.nav-toggle');
//         navList.classList.remove('open');
//         navToggle.classList.remove('open');

//     }, false);
// }



// $(document).on("scroll",function(){
//     if($(document).scrollTop()>115){

//         $("header").addClass("smallHeader");
//     } else if($(document).scrollTop()<115){
//     	$("header").removeClass("smallHeader");
//     }
// });

window.addEventListener('scroll', function(){

    var header = document.querySelector('header');
    var headerHeight = header.offsetHeight;

    if( document.body.scrollTop > headerHeight) {

        header.classList.add('smallHeader');

    } else {

        header.classList.remove('smallHeader')
    }

}, false);

// $(document).ready(function(){
// 	$('.nav__link').click(function(e){
// 		$('.nav__link.active').removeClass('active');
// 		$(this).addClass('active');
// 	});
// });

// $(document).ready(function (e) {
//     $(document).on("scroll", function(){

//     var headerHeight = $('.header').outerHeight();
//     var scrollPosition = $(document).scrollTop();
//     $('.nav__link').each(function () {
//         var currentLink = $(this);

//         var refElement = $(currentLink.attr("href"));
        
//         if (refElement.position().top - headerHeight <= scrollPosition 
//         	&& refElement.position().top + refElement.height() > scrollPosition) {
//             $('ul li .nav__link').removeClass("active");
//             currentLink.addClass("active");
//         }
//         // else{
//         //     currentLink.removeClass("active");
//         // }

//    });
//     });
// });

// window.addEventListener('scroll', function(e){

//     var header = document.querySelector('header');
//     var headerHeight = header.offsetHeight;
//     var scrollPosition = document.body.scrollTop;
//     var navLink = document.querySelectorAll('.nav__link');

//     navLink.forEach(function(value){
//         var currentLink = navLink;
// console.log(currentLink);
        
        
//     });


// },false);


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