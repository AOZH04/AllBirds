//===============Header Burger==============
"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});	
		}
	}

} else {
	document.body.classList.add('_pc');
}
//=============Меню бургер==================
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


//================Слайдер====================
$(document).ready(function(){
	$('.slider').slick({
		arrows:true, 				//стрелочки по умолч true
		dots:false, 					//точки по умолч false
		//appendArrows:$(''),	//Перенос стрелок в нужный .класс
		appendDots:$('.slider_title'),		//Перенос точек в нужный .класс
		adaptiveHeight:true, 	//автоматическая адаптивная высота 										слайдера False(для включения 											добавить в slick-track ai:fstart)
		slidesToShow:3, 			//кол-во отоброжаемых слайдов
		slidesToScroll:3, 		//кол-во пролистывающихся при 											нажатии слайдов
		speed:500, 					//скорость пролистывания, по умолч 											300ms 
		easing: 'ease',  			//тип анимации по умолч linear
		infinite: true, 			//бесконочность слайдера по умолч 										True
		initialSlide: 0, 			//стартовый слайд по умолч 0
		autoplay:false, 			//автопроигрование слайдов по умолч 										False
		autoplaySpeed:1500, 		//период автопроигрования по умолч 											3000ms
		pauseOnFocus: true, 		//остановка авто по умолч True
		pauseOnHover: true, 		//остановка авто при наведении(True)
		pauseOnDotsHover: true, //остановка авто (True)
		draggable: true, 			//свайп на пк (true)
		swipe: true, 				//свайп на тачскринах (true)
		touchThreshold: 110, 		//момент срабатывания свайпа 												(5частей)
		touchMove: true,			//включает возможности тачскрина											(True)
		waitForAnimate:false,	//срабатывания клика перелистования 									после анимации	(True)
		centerMode:false,			//при включении опции добавляет в 									slider__item класс slick-center 										(False)
		variableWidth: false,	//при включении ширина слайда 										зависит от контента (False),											комбинируется с centerMode
		rows:1,						//ряды (1) этажи 
		slidesPerRow:1,			//кол-во слайдов в ряду (1)
		vertical:false,			//вертикальный слайдер (False) 
		verticalSwiping:false,	//включение вертикального свайпа 									(False)
		fade:false,					//используется когда один слайд, при 									включенном отключает ерелистываение
		asNavFor:"",				//Связь с другим классом .class
											
		responsive:[ 				//адптив
			{
				breakpoint: 768, 	//при достижении меньше 768 									(max-width при включенном 											mobileFirst меняется на min-width)
				settings:{ 			//указывается корректируемя опция
					slidesToShow:2,
					slidesToScroll:2,
				} 
			},
			{
				breakpoint: 480,	//при достижении меньше 480
				settings:{			//указывается опция
					slidesToShow:1,
					slidesToScroll:1,
				}
			},
		],
		mobileFirst:false,		//меняет в адаптиве max на min
	// $('.slider').slick('unslick'); //метод отключения слайдера
	});
});



