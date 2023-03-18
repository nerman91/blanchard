document.addEventListener('DOMContentLoaded', function () {
  // выпадающие списки в хедере
  document.querySelectorAll('.directions-art__btn').forEach((item) => {
    item.addEventListener('click', function () {
      const btn = this;
      const dropdown = this.parentElement.querySelector('.dropdown');
      document.querySelectorAll('.directions-art__btn').forEach((el) => {
        if (el != btn) el.classList.remove('directions-art__btn-active');
      });
      document.querySelectorAll('.dropdown').forEach((el) => {
        if (el != dropdown) el.classList.remove('dropdown-active');
      });
      dropdown.classList.toggle('dropdown-active');
      btn.classList.toggle('directions-art__btn-active');
    });
  });
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.directions-art')) {
      document.querySelectorAll('.dropdown').forEach((el) => {
        el.classList.remove('dropdown-active');
      });
      document.querySelectorAll('.directions-art__btn').forEach((el) => {
        el.classList.remove('directions-art__btn-active');
      });
    }
  });

  //scroll

  //дропдаун
  const dropdownSimpleBar = Array.prototype.forEach.call(
    document.querySelectorAll('.dropdown__list'),
    (element) =>
      new SimpleBar(element, {
        autoHide: false,
        scrollbarMaxSize: 28
      })
  );

  //меню
  window.addEventListener('resize', () => {
    let scroll;

    if (window.matchMedia('(max-width: 760px)').matches) {
      scroll = new SimpleBar(list, {
        autoHide: false,
        scrollbarMaxSize: 40
      });
      return;
    } else if (typeof scroll === 'Object') {
      scroll.unMount();
    }
  });

  //Плавный скролл по якорям

  const list = document.querySelector('.nav');
  const accordion = document.querySelector('#accordion');
  const btnSubscribe = document.querySelector('.hero__btn');

  //Функция плавного скролла
  function smoothScrollTo(elem) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }

  //Hero скролл к карте
  btnSubscribe.addEventListener('click', () => {
    const map = document.querySelector('#map');
    smoothScrollTo(map);
  });

  //Cкрол по якорным ссылкам

  list.addEventListener('click', (event) => {
    event.preventDefault();

    const about = document.querySelector('#about');
    const gallery = document.querySelector('#gallery');
    const catalog = document.querySelector('#catalog');
    const events = document.querySelector('#events');
    const projects = document.querySelector('#projects');
    const contacts = document.querySelector('#contacts');

    if (event.target.dataset.scroll === 'about') smoothScrollTo(about);

    if (event.target.dataset.scroll === 'gallery') smoothScrollTo(gallery);

    if (event.target.dataset.scroll === 'catalog') smoothScrollTo(catalog);

    if (event.target.dataset.scroll === 'events') smoothScrollTo(events);

    if (event.target.dataset.scroll === 'projects') smoothScrollTo(projects);

    if (event.target.dataset.scroll === 'contacts') smoothScrollTo(contacts);
  });

  //каталог плавный скролл
  accordion.addEventListener('click', (event) => {
    const getWidthDocument = document.documentElement.clientWidth;
    //клик по кнопкам аккордеона
    if (event.target.classList.contains('accordion__painter-btn') && getWidthDocument <= 1000) {
      const tabContent = document.querySelector('.catalog-tabs');
      smoothScrollTo(tabContent);
    }

    //клик по ссылке в заглушке
    if (event.target.classList.contains('plug-link')) {
      event.preventDefault();
      const gallery = document.querySelector('#gallery');
      smoothScrollTo(gallery);
    }
  });

  //меню на экране < 1200px
  const burgerMenu = document.querySelector('.header__burger');
  const closeMenu = document.querySelector('.nav__close');
  const headerMenu = document.querySelector('.header__menu');
  const formTop = document.querySelector('.header__search-top');
  const headerLogo = document.querySelector('.header__logo');

  burgerMenu.addEventListener('click', () => {
    headerMenu.classList.add('header__menu-active');
  });

  closeMenu.addEventListener('click', () => {
    headerMenu.classList.remove('header__menu-active');
  });

  if (document.documentElement.clientWidth <= 1200) {
    headerMenu.addEventListener('click', (event) => {
      if (event.target.classList.contains('nav__link')) {
        headerMenu.classList.remove('header__menu-active');
      }
    });
  }

  //поиск в хедере на экране < 1200px
  document.querySelector('.header__search-top-open').addEventListener('click', () => {
    document.querySelector('.header__search-top').classList.add('header__search-top-active');
    document.querySelector('.header__search-top-open').classList.add('hidden');
  });

  //форма поиска на экране < 1200px
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.header__search-wrapper')) {
      formTop.classList.remove('header__search-top-active');
      formTop.querySelector('.search-site__input').value = '';
      document.querySelector('.header__search-top-open').classList.remove('hidden');
      burgerMenu.classList.remove('hidden');
      headerLogo.classList.remove('hidden');
    }
  });

  document.querySelector('.search-mobile__close').addEventListener('click', () => {
    formTop.classList.remove('header__search-top-active');
    formTop.querySelector('.search-site__input').value = '';
    document.querySelector('.header__search-top-open').classList.remove('hidden');
  });

  // ===== SWIPERS ===== //

  //hero
  const swiperHero = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 8000,
    autoplay: {
      delay: 8000
    },
    effect: 'fade',
    allowTouchMove: false
  });

  //gallery
  const swiperGallery = new Swiper('.gallery-swiper__container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 1,
      fill: 'row'
    },
    spaceBetween: 50,
    pagination: {
      el: '.gallery-swiper__pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.gallery-swiper__btn-next',
      prevEl: '.gallery-swiper__btn-prev'
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      },

      550: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 38
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий'
    }
  });

  //events
  const swiperEvents = new Swiper('.events-swiper', {
    slidesPerView: 3,
    grid: {
      rows: 1,
      fill: 'row'
    },
    spaceBetween: 50,
    pagination: {
      el: '.events-swiper__pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.events-list__btn-next',
      prevEl: '.events-list__btn-prev'
    },

    breakpoints: {
      320: {
        spaceBetween: 34,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      },

      650: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      950: {
        spaceBetween: 27,
        slidesPerGroup: 4
      },

      1200: {
        spaceBetween: 50,
        slidesPerView: 3
      }
    },

    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий'
    }
  });

  //projects
  const swiperProjects = new Swiper('.projects-swiper', {
    slidesPerView: 3,
    grid: {
      rows: 1
    },
    spaceBetween: 50,
    navigation: {
      nextEl: '.projects__navigation-next',
      prevEl: '.projects__navigation-prev'
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 21
      },

      600: {
        spaceBetween: 34,
        slidesPerView: 2
      },

      850: {
        spaceBetween: 50,
        slidesPerView: 2
      },

      1250: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий'
    }
  });

  //select init
  const item = document.querySelector('.gallery__select'),
    selectGallery = new Choices(item, {
      searchEnabled: false,
      position: 'bottom',
      itemSelectText: '',
      classNames: {
        containerOuter: 'choices choices__header'
      }
    });

  //accordion init
  $(function () {
    $('#accordion').accordion({
      icons: false,
      heightStyle: 'content',
      collapsible: true,
      active: 0
    });
  });

  //catalog tabs
  const btnsTabs = document.querySelectorAll('.accordion__painter-btn');
  const arrayTabs = [
    {
      name: 'Доменико Гирландайо',
      portrait: 'img/domenico-ghirlandaio.jpg',
      years: '2 июня 1448 — 11 января 1494',
      description:
        'Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).'
    }
  ];

  btnsTabs.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      btnsTabs.forEach((el) => {
        el.classList.remove('accordion__painter-btn-active');
      });
      event.target.classList.add('accordion__painter-btn-active');
      const painterBtnTxt = btn.textContent.trim();
      const tabWrapper = document.querySelector('.catalog-tabs');
      arrayTabs.forEach((item) => {
        if (painterBtnTxt === item.name) {
          const tab = `<div class="catalog-tabs__painter painter">
            <img class="painter__page" src=${item.portrait} alt=${item.name}>
            <h4 class="painter__name">${item.name}</h4>
            <span class="painter__years">${item.years}</span>
            <p class="painter__description">${item.description}</p>
          </div>`;
          tabWrapper.innerHTML = tab;
        } else {
          const plug = `<div class="catalog-tabs__plug plug">
            <img class="plug__page" src="img/plug-catalog.jpg" alt="Пустое изображение">
            <h4 class="plug__title">Что мы о нём знаем?</h4>
            <p class="plug__description">
              Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!
            </p>
            <a class="plug__link plug-link background-focus" href="#gallery">В галерею</a>
          </div>`;
          tabWrapper.innerHTML = plug;
        }
      });
    });
  });

  //tolltips

  const projectTooltipFirst = tippy('.projects__description-tooltip_first', {
    content: 'Пример современных тенденций - современная методология разработки',
    maxWidth: 264,
    trigger: 'click'
  });

  const projectTooltipSecond = tippy('.projects__description-tooltip_second', {
    content:
      'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    maxWidth: 264,
    trigger: 'click'
  });

  const projectTooltipThird = tippy('.projects__description-tooltip_third', {
    content: 'В стремлении повысить качество',
    maxWidth: 264,
    trigger: 'click'
  });

  //validation
  const formValidate = new JustValidate('.contacts__form', {
    errorFieldCssClass: 'feedback-form__input_error',
    errorLabelCssClass: 'feedback-form__label-error',
    errorLabelStyle: {
      color: '#d11616'
    }
  });

  //inputmask
  const formPhone = document.querySelector("input[type='tel']");
  const maskTel = new Inputmask('+7 (999) 999-99-99');
  maskTel.mask(formPhone);

  formValidate
    .addField('.feedback-form__input_name', [
      {
        rule: 'required',
        errorMessage: 'Обязательное поле'
      },
      {
        rule: 'customRegexp',
        value: /^([а-яё\s]+|[a-z\s]+)$/iu,
        errorMessage: 'Имя должно содержать только буквы'
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Недостаточно символов'
      },
      {
        rule: 'maxLength',
        value: 20,
        errorMessage: 'Превышен лимит'
      }
    ])
    .addField('.feedback-form__input_tel', [
      {
        rule: 'required',
        function: (name, value) => {
          const phone = formPhone.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
        errorMessage: 'Обязательное поле'
      },
      {
        rule: 'customRegexp',
        value: /^([+]?[0-9\s-\(\)]{3,25})*$/i,
        errorMessage: 'Некорректный номер'
      },
      {
        rule: 'minLength',
        value: 10,
        errorMessage: 'Недостаточно символов'
      }
    ]);

  //map
  ymaps.ready(initYMap);
  function initYMap() {
    const myMap = new ymaps.Map('map', {
      center: [55.758504745955626, 37.59981579182233],
      zoom: 16,
      controls: []
    });

    myMap.controls.add('zoomControl', {
      size: 'small',
      position: {
        right: 17,
        top: 275
      }
    });

    myMap.controls.add('geolocationControl', {
      position: {
        right: 17,
        top: 355
      }
    });

    const myPlacemark = new ymaps.Placemark(
      [55.758504745955626, 37.59981579182233],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [40, -10]
      }
    );
    myMap.geoObjects.add(myPlacemark);
  }
});
