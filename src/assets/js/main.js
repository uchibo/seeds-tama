// Smooth-scroll
import SmoothScroll from 'smooth-scroll';

//
// SmoothScroll
//
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});

//
// ページトップボタン
//
const backTopBtn = document.getElementById('back-top');
let posTop, pageHeight, screenHeight, w;
window.onscroll = () => {
  posTop = document.documentElement.scrollTop;
  pageHeight = document.body.clientHeight;
  screenHeight = document.documentElement.clientHeight;
  w = window.outerWidth;
  
  if (posTop > 300) {
      backTopBtn.classList.add('active');
  } else {
      backTopBtn.classList.remove('active');
  }
}