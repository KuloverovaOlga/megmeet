export function headerScroll() {
  const nav = document.querySelector('.header');
  const navOffsetTop = nav.offsetTop;
  function handleScroll() {
   
      if (window.scrollY > navOffsetTop) {
        nav.classList.add('fixed-nav');
      } else {
        nav.classList.remove('fixed-nav');
      }
    
  }

  window.addEventListener('scroll', handleScroll);
}

export function headerDropdown() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const dropdownInner = dropdown.querySelector('.header__nav-item-dropdown');

    function mouseenter() {
      dropdown.classList.add('active');
      $(dropdownInner).slideDown();
    }
    function mouseleave() {
      dropdown.classList.remove('active');
      $(dropdownInner).slideUp();
    }

    function showContent() {
      if (window.innerWidth < 768) {
        dropdown.removeEventListener('mouseenter', mouseenter);
        dropdown.removeEventListener('mouseleave', mouseleave);
        dropdown.classList.remove('active');
      } else {
        dropdown.addEventListener('mouseenter', mouseenter);
        dropdown.addEventListener('mouseleave', mouseleave);
      }
    }

    showContent();
    window.addEventListener('resize', showContent);
  });
}

export function subMenu() {
  const btns = document.querySelectorAll('.header__nav-link--mob-nav');
  const btnsBack = document.querySelectorAll('.header__nav-item-dropdown-back');
  const nav = document.querySelector('.header__nav-box');
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.parentElement.querySelector('.header__nav-item-dropdown').classList.add('active');
      nav.classList.add('overflow');
    });
  });
  btnsBack.forEach((btnBack) => {
    btnBack.addEventListener('click', (e) => {
      e.preventDefault();
      btnBack.parentElement.parentElement.classList.remove('active');
      nav.classList.remove('overflow');
    });
  });
}
