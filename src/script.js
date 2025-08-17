const navLinks = document.getElementById('navLinks');
const menuIcon = document.getElementById('icon');
const clickIcon = document.querySelector('.ri-menu-2-line');
const listItems = document.querySelectorAll('#navLinks li');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('h-[75vh]');
  if (clickIcon.classList.contains('ri-menu-2-line')) {
    clickIcon.classList.remove('ri-menu-2-line');
    clickIcon.classList.add('ri-close-line');
    if (clickIcon.classList.contains('ri-close-line')) {
      clickIcon.classList.add('text-white');
    }
  } else {
    clickIcon.classList.remove('ri-close-line');
    clickIcon.classList.add('ri-menu-2-line');
    if (clickIcon.classList.contains('ri-menu-2-line')) {
      clickIcon.classList.remove('text-white');
    }
  }

  listItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('h-[75vh]');
      clickIcon.classList.remove('ri-close-line');
      clickIcon.classList.add('ri-menu-2-line');
      clickIcon.classList.remove('text-white');
    });
  })
  // if (clickIcon.classList.contains('ri-close-line')) {
  //   clickIcon.classList.toggle('text-white')
  // } else {
  //   clickIcon.classList.remove('text-white');
  // }
});

// const slideDot = document.querySelectorAll('#slideDot');

// slideDot.forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     dot.classList.add('w-11');
//     slideDot[index].classList.remove('w-11');
//   });
// });