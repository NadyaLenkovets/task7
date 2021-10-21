// ============  бургер-меню  ============ 

const burger = document.querySelector('.burger');
const nav = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function(e) {
   document.body.classList.toggle('lock');
   nav.classList.toggle('active');
   burger.classList.toggle('active');
})

navLinks.forEach(navLink => {
   navLink.addEventListener('click', onNavLinkClick);
   navLink.addEventListener('click', makeLinkActive);
})

function onNavLinkClick(e) {
   const navLink = e.target;
   if (burger.classList.contains('active')) {
      document.body.classList.remove('lock');
      nav.classList.remove('active');
      burger.classList.remove('active');
   }
}

function makeLinkActive() {
   navLinks.forEach(navLink => {
      navLink.parentElement.classList.remove('active');
      this.parentElement.classList.add('active');
   })
}

