$(document).ready(function() {
    $('.menu-burger__header').click(function() {
    $('.menu-burger__header,.header_menu,.header_menu-1').toggleClass('active');
    $('body').toggleClass('lock');
    });
  });
  
  $('.header_menu').click(function(){
    $('.menu-burger__header,.header_menu,.header_menu-1').removeClass('active');
    $('body').toggleClass('lock');
    $('body').removeClass('lock');
  });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

jQuery(window).scroll(function(){
    var $sections = $('section');
$sections.each(function(i,el){
   var top  = $(el).offset().top-100;
   var bottom = top +$(el).height();
   var scroll = $(window).scrollTop();
   var id = $(el).attr('id');
   if( scroll > top && scroll < bottom){
       $('a.active').removeClass('active');
       $('a[href="#'+id+'"]').addClass('active');

   }
})
});

$("nav").on("click","a", function (event) {
   // исключаем стандартную реакцию браузера
   event.preventDefault();

   // получем идентификатор блока из атрибута href
   var id  = $(this).attr('href'),

   // находим высоту, на которой расположен блок
       top = $(id).offset().top;
    
   // анимируем переход к блоку, время: 800 мс
   $('body,html').animate({scrollTop: top}, 800);
});

window.onload = () => {
	let input = document.querySelector('#input');

	input.oninput = function() {
		let value = this.value.trim();
		let list = document.querySelectorAll('.main__bg div');

		// if (value) {
		// 	list.forEach(elem => {
		// 		if (elem.innerText.search(value) == -1) {
		// 			elem.classList.add('hide');
		// 		}
		// 	});
		// } else {
		// 	list.forEach(elem => {
		// 		elem.classList.remove('hide');
		// 	});
		// }

		value
			? list.forEach(elem => {
					elem.innerText.search(value) == -1
						? elem.classList.add('hide')
						: elem.classList.remove('hide');
			  })
			: list.forEach(elem => {
					elem.classList.remove('hide');
			  });
	};
};

