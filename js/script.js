
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



var swiper = new Swiper(".mainSwiperApartment", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  loop: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".mainSwiperApartment-swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".mainSwiperApartment-next",
        prevEl: ".mainSwiperApartment-prev",
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





// Функция для закрытия всех выпадающих списков
function closeAllDropdowns() {
  $(".dropdown__content").slideUp("fast");
  $('.dropdown__link img').removeClass("rotate_row"); // Удаляем класс rotate_row у всех изображений
 }
 
 function toggleDropdown(dropdownId, contentId) {
  $(dropdownId).click(function(event) {
     event.stopPropagation(); // Prevent event bubbling
     closeAllDropdowns(); // Close all dropdowns before opening a new one
 
     // Check if the dropdown content is currently visible
     if ($(contentId).is(':visible')) {
       // If visible, slide it up (close it)
       $(contentId).slideUp("fast");
       // Remove the rotate_row class from the dropdown link's image
       $(dropdownId + ' img').removeClass("rotate_row");
     } else {
       // If not visible, slide it down (open it)
       $(contentId).slideDown("fast");
       // Add the rotate_row class to the dropdown link's image
       $(dropdownId + ' img').addClass("rotate_row");
     }
  });
 }
 
 
 // Привязка обработчиков к конкретным элементам
 toggleDropdown("#cityDropdown", "#cityContent");
 toggleDropdown("#servicesDropdown", "#servicesContent");
 toggleDropdown("#supportDropdown", "#supportContent");
 
 // Обработчик клика вне выпадающих списков
 $(document).click(function() {
  closeAllDropdowns(); // Закрываем все выпадающие списки при клике вне их области
 });
 
 // Обработчик выбора элемента из выпадающего списка
 $('.dropdown__content a').click(function() {
  var selectedText = $(this).text();
  $(this).closest('.dropdown__link').find('.nav__link').text(selectedText);
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

 document.querySelector('.mainSwiper').style.display = 'none';
 document.querySelector('.mainSwiper').style.display = 'none';
 document.getElementById('apartmentsBtn').style.backgroundImage = 'linear-gradient(to right bottom, #FAAF00 0%, #FA6400 70%)';
 document.querySelector('.slider__navigationHouses').style.display = 'none';
//  document.getElementById('housesBtn').style.border = '1px solid #424446';  
document.getElementById('housesBtn').classList.add('tarif__border');
 
 document.getElementById('apartmentsBtn').addEventListener('click', function() {
  // Скрываем слайдер домов, показываем слайдер квартир
  document.querySelector('.mainSwiper').style.display = 'none';
  document.querySelector('.mainSwiperApartment').style.display = 'flex';
  document.querySelector('.slider__navigationApartment').style.display = 'flex';
  document.querySelector('.slider__navigationHouses').style.display = 'none';
 
  // Изменяем градиент фона для кнопки квартир и цвет текста
  this.style.backgroundImage = 'linear-gradient(to right bottom, #FAAF00 0%, #FA6400 70%)';
  this.style.color = '#fff'; // Белый цвет текста для кнопки с градиентом
  // this.style.border = '';
  this.classList.remove('tarif__border');
  document.getElementById('housesBtn').style.backgroundImage = ''; // Сбрасываем градиент для кнопки домов
  document.getElementById('housesBtn').style.color = '#000'; // Черный цвет текста для кнопки без градиента
  // document.getElementById('housesBtn').style.border = '1px solid #424446';  
  document.getElementById('housesBtn').classList.add('tarif__border');
});
 
 document.getElementById('housesBtn').addEventListener('click', function() {
  // Скрываем слайдер квартир, показываем слайдер домов
  document.querySelector('.mainSwiperApartment').style.display = 'none';
  document.querySelector('.slider__navigationHouses').style.display = 'flex';
  document.querySelector('.slider__navigationApartment').style.display = 'none';
  document.querySelector('.mainSwiper').style.display = 'flex';
 
  // Изменяем градиент фона для кнопки домов и цвет текста
  this.style.backgroundImage = 'linear-gradient(to right bottom, #FAAF00 0%, #FA6400 70%)';
  // this.style.border = ''; 
  this.classList.remove('tarif__border');
  this.style.color = '#fff'; // Белый цвет текста для кнопки с градиентом
  document.getElementById('apartmentsBtn').style.backgroundImage = ''; // Сбрасываем градиент для кнопки квартир
  document.getElementById('apartmentsBtn').style.color = '#000'; // Черный цвет текста для кнопки без градиента
  // document.getElementById('apartmentsBtn').style.border = '1px solid #424446'; 
  document.getElementById('apartmentsBtn').classList.add('tarif__border');
});
 
 





// Получаем все элементы tariffs__card
var tariffCards = document.querySelectorAll('.tariffs__card');

// Пройдемся по каждому элементу tariffs__card
tariffCards.forEach(function(tariffCard, tariffIndex) {
    // Получаем все элементы input с классом custom-checkbox внутри текущего tariffs__card
    var checkboxes = tariffCard.querySelectorAll('.custom-checkbox');

    // Пройдемся по каждому из этих элементов
    checkboxes.forEach(function(checkbox, checkboxIndex) {
        // Генерируем уникальный идентификатор, используя индексы tariffs__card и checkbox
        var uniqueId = 'tariff' + tariffIndex + 'Checkbox' + checkboxIndex;
        
        // Применяем уникальный идентификатор к атрибуту id элемента input
        checkbox.id = uniqueId;
        
        // Получаем следующий элемент после input, который должен быть label
        var nextElement = checkbox.nextElementSibling;
        
        // Проверяем, является ли следующий элемент label
        if (nextElement && nextElement.tagName.toLowerCase() === 'label') {
            // Применяем уникальный идентификатор к атрибуту for label
            nextElement.setAttribute('for', uniqueId);
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('.tariffs__card-checkbox input[type="checkbox"]');
 
  function handleCheckboxChange(event) {
     const checkbox = event.target;
     const checkboxContainer = checkbox.closest('.tariffs__card-checkbox');
     const priceContainer = checkboxContainer.closest('.tariffs__card-inner').querySelector('.tariffs__card-price__number p');
     const priceSpans = checkboxContainer.querySelectorAll('.tariffs__card-checkbox__text span');
 
     let basePrice = parseInt(priceContainer.textContent, 10);
     let connectionPrice = 0;
 
     priceSpans.forEach(span => {
       const priceText = span.textContent;
       const priceMatch = priceText.match(/(\d+) руб\./);
 
       if (priceMatch) {
         const price = parseInt(priceMatch[1], 10);
         if (priceText.includes('подключение')) {
           connectionPrice = price;
         } else {
           basePrice += checkbox.checked ? price : -price;
         }
       }
     });
 
     console.log(connectionPrice);
 
     priceContainer.textContent = basePrice;
     // Выбираем элемент span с ценой подключения только внутри текущей карточки тарифа
     const tariffsCardInner = checkboxContainer.closest('.tariffs__card-inner');
     const connectionPriceSpans = tariffsCardInner.querySelectorAll('.tariffs__card-price span');
     const connectionPriceSpan = connectionPriceSpans[connectionPriceSpans.length - 1]; // Последний элемент
     console.log(connectionPriceSpan);
     if (connectionPriceSpan) {
       const currentConnectionPrice = parseInt(connectionPriceSpan.textContent.replace(' руб.', ''), 10);
       const newConnectionPrice = checkbox.checked ? currentConnectionPrice + connectionPrice : currentConnectionPrice - connectionPrice;
       connectionPriceSpan.textContent = newConnectionPrice + ' руб.';
     }
  }
 
  checkboxes.forEach(function(checkbox) {
     checkbox.addEventListener('change', handleCheckboxChange);
  });
 });
 
 
 

 document.addEventListener("DOMContentLoaded", function() {
  var btn = document.getElementById("theme-button");
  var link = document.getElementById("theme-link");
  console.log(btn);
  console.log(link);

  btn.addEventListener("click", function () { ChangeTheme(); });

  function ChangeTheme() {
      let lightTheme = "css/light.css";
      let darkTheme = "css/dark.css";

      var currTheme = link.getAttribute("href");
      var theme = "";

      if(currTheme == lightTheme) {
          currTheme = darkTheme;
          theme = "dark";
      } else {    
          currTheme = lightTheme;
          theme = "light";
      }

      link.setAttribute("href", currTheme);

      // Save(theme);
  }
});


var isSunActive = true; // Переменная для отслеживания активного изображения

document.getElementById('theme-button').addEventListener('click', function() {
    var sun = document.querySelector('.sun');
    var moon = document.querySelector('.moon');

    // Определяем, какое изображение активно и выполняем соответствующую анимацию
    if (isSunActive) {
        // Если солнце активно, анимируем его выход вправо и вход луны слева
        sun.style.animation = 'rotateOutRight 0.5s forwards';
        moon.style.animation = 'rotateInLeft 0.5s forwards';
        isSunActive = false; // Обновляем состояние переменной
    } else {
        // Если луна активна, анимируем её выход влево и вход солнца справа
        moon.style.animation = 'rotateOutLeft 0.5s forwards';
        sun.style.animation = 'rotateInRight 0.5s forwards';
        isSunActive = true; // Обновляем состояние переменной
    }
});


$(document).ready(function() {
  $(".close__popup").click(function() {
      $("#overlay").fadeOut(); // Плавное исчезновение
      $("#overlay__application").fadeOut(); // Плавное исчезновение

  });

  $(".change__city-button__agree").click(function() {
    $('.change__city').hide();
  });

  $(".change__city-button__change").click(function() {
    $('.change__city').hide();
    $('#overlay').css('display', 'flex');
  });

  $(".header__city-selector").click(function() {
    $('.change__city').show();
  });

  
  $(".tariffs__card-button").click(function() {
    $('#overlay__application').css('display', 'flex');
  });

  $(".popup__button-wrepper .button").click(function() {
    $('.popup__form-inner__writing').hide();
    $('.popup__form-inner__done').show();
  });


});

