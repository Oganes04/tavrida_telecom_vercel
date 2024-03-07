
var swiper = new Swiper(".mainSwiper", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  loop: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      breakpoints: {
        
        1400: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },

        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },

        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
     }
});

var swiper = new Swiper(".servicesSwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  effect: "fade",
  loop: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".services-swiper-pagination",
        type: "fraction",
      },

      navigation: {
        nextEl: ".services-next",
        prevEl: ".services-prev",
     }
});






$("#burger_menu2").click(function() {
  $(this).toggleClass('open');
  $(".header__adaptive-nav").toggleClass("open");
  $('#header').toggleClass("toggle__border-radius");
});


$(document).ready(function() {
  // Hide the .header__slider-inner element by default
  $('.header__slider-inner').slideUp();
 
  $('.header__slider').click(function() {
     var $currentAnswer = $(this).find('.header__slider-inner');
 
     // Check if the current answer is visible
     if ($currentAnswer.is(':visible')) {
       // If visible, slide up and remove the rotate_row class
       $('.dropdown__row').removeClass('rotate_row');
       $currentAnswer.slideUp();
     } else {
       // If not visible, add the rotate_row class and slide down
       $('.dropdown__row').addClass('rotate_row');
       $currentAnswer.slideDown();
     }
  });
 });
 


$('.header__slider-inner a').click(function() {
  // Remove the 'open' class from the .nav element
  $('.nav').removeClass('open');
});

$(document).click(function() {
        
  if ($('.nav').hasClass('open')) {
    $('html').css('overflow-y', 'hidden');
  } else {
    $('html').css('overflow-y', 'auto');
  }
      
});






 $(".dropdown__link-selector").click(function(event) {
  event.stopPropagation(); // Предотвращает закрытие выпадающего списка при клике на ссылку
  $(".dropdown__content-selector").slideToggle("fast");
  $('.dropdown__link-selector  img').toggleClass("rotate_row");
 });
 
 $(document).click(function() {
  $(".dropdown__content-selector").slideUp("fast"); // Закрывает выпадающий список при клике вне его области
 
 });

 $(".dropdown__link").click(function(event) {
  event.stopPropagation(); // Предотвращает закрытие выпадающего списка при клике на ссылку
  $(".dropdown__content").slideToggle("fast");
  $('.dropdown__link  img').toggleClass("rotate_row");
 });
 
 $(document).click(function() {
  $(".dropdown__content").slideUp("fast"); // Закрывает выпадающий список при клике вне его области
 
 });

 $('.dropdown__content-selector p').click(function() {
  // Get the text of the clicked p element
  var selectedText = $(this).text();
  
  // Set the text of the dropdown__link-selector to the text of the clicked p element
  $('.selected__direction').text(selectedText);
});



// document.querySelector('.consultation__form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
// });

 window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('#tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});








$('.slide__item-servicesPrice').slideUp();
$('.slide').click(function() {
 var $currentAnswer = $(this).find('.slide__item-servicesPrice');
 var $currentQuestion = $(this).find('.slide__item-servicesHeader');

 // Remove openSlide from all questions before adding it to the current one
 $('.slide__item-servicesHeader').removeClass('openSlide');
 $('.slide__item-servicesHeader svg').removeClass('rotate');

 if ($currentAnswer.is(':visible')) {
    $currentAnswer.slideUp();
 } else {
    $('.slide__item-servicesPrice').slideUp();
    $currentAnswer.slideDown();
    $currentQuestion.addClass('openSlide');
    $(this).find('svg').addClass('rotate');
 }
});



function toggleAccordion(element) {
  const accordionItem = element.parentNode;
  accordionItem.classList.toggle('active');
 }
 

 const $sliderWrap = $('.slider-wrap');
 const $slider = $sliderWrap.find('.slider');
 const $index = $slider.find('.index');
 const $img = $slider.find('.img');
 const sliderNum = $slider.length;
 let indexWidth = $index.width() + 1;
 let sliderWrapWidth = $sliderWrap.width();
 const duration = 300;
 
 $(window).on('resize', function() {
   sliderWrapWidth = $sliderWrap.width();
 });
 
 for(let i = 0; i < sliderNum; i++) {
   $slider.eq(i).css({
     left: i * indexWidth,
     width: sliderWrapWidth - (i * indexWidth)
   }); 
 }
 





 
 

 document.addEventListener('DOMContentLoaded', function() {
  var sliders = document.querySelectorAll('.services__slider');
 
  sliders.forEach(function(slider) {
       slider.addEventListener('click', function() {
           sliders.forEach(function(s) {
               if (s !== slider) {
                  s.classList.remove('open');
               }
           });
 
           if (slider.classList.contains('open')) {
               slider.classList.remove('open');
           } else {
               slider.classList.add('open');
           }
 
           // Проверка, что хотя бы один слайдер всегда открыт
           var isAnyOpen = Array.from(sliders).some(function(s) {
               return s.classList.contains('open');
           });
 
           // Если ни один слайдер не открыт, открываем первый
           if (!isAnyOpen) {
               sliders[0].classList.add('open');
           }
       });
  });
 });
 