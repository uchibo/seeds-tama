// Smooth-scroll
import SmoothScroll from "smooth-scroll";

//
// SmoothScroll
//
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

//
// ページトップボタン
//
// const backTopBtn = document.getElementById("back-top");

// let posTop, pageHeight, screenHeight, w;
// window.onscroll = () => {
//   posTop = document.documentElement.scrollTop;
//   pageHeight = document.body.clientHeight;
//   screenHeight = document.documentElement.clientHeight;
//   w = window.outerWidth;

//   if (posTop > 300) {
//     backTopBtn.classList.add("active");
//   } else {
//     backTopBtn.classList.remove("active");
//   }
// };

// トップページのみ
// footer を途中で表示する
window.addEventListener('scroll', () => {
  const footer = document.querySelector('.bl_footer_top');
  const scrollHeight = window.innerHeight;

  if (window.pageYOffset >= scrollHeight) {
    footer.classList.add('active');
  } else {
    footer.classList.remove('active');
  }
});


//
// スマホナビ
//
const spNavOpen = document.getElementById("spNavOpen");
const spNavClose = document.getElementById("spNavClose");
const spNav = document.getElementById("spNav");

const fadeIn = (elem, dulation) => {
  elem.style.opacity = 0;
  elem.style.display = "block";
  elem.style.transition = "opacity " + dulation + "ms";
  setTimeout(function () {
    elem.style.opacity = 1;
  }, 1);
};

const fadeOut = (elem, dulation) => {
  elem.style.opacity = 1;
  elem.style.transition = "opacity " + dulation + "ms";
  setTimeout(function () {
    elem.style.opacity = 0;
  }, 1); // 0.001秒後に transition開始（透過度0にする）
  setTimeout(function () {
    elem.style.display = "none";
  }, dulation + 10);
};

spNavOpen.addEventListener("click", () => {
  fadeIn(spNav, 300);
});

spNavClose.addEventListener("click", () => {
  fadeOut(spNav, 300);
});
