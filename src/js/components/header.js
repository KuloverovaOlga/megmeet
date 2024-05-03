function header() {
    const nav = document.querySelector('.header');
    const navOffsetTop = nav.offsetTop;
  
    function handleScroll() {
      if (window.innerWidth > 768) {
        if (window.scrollY > navOffsetTop) {
          nav.classList.add('fixed-nav');
        } else {
          nav.classList.remove('fixed-nav');
        }
      }
    }
  
    function handleResize() {
      // Выключаем обработчик скролла, если ширина экрана меньше 768
      if (window.innerWidth <= 768) {
        window.removeEventListener('scroll', handleScroll);
      } else {
        window.addEventListener('scroll', handleScroll);
      }
    }
  
    // Добавляем обработчик события resize
    window.addEventListener('resize', handleResize);
  
    // Инициализируем обработчик скролла при загрузке страницы
    handleResize();
  
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach((dropdown) => {
      const dropdownInner = dropdown.querySelector('.header__nav-item-dropdown');
  
      dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('active')
        $(dropdownInner).slideDown();
      });
      dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('active')
        $(dropdownInner).slideUp();
      });
    });
  }

  export default header