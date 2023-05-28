const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goNext = () => {
  counter++;
  slideImage();
//   if (counter < slides.length - 1) {
//     counter++;
//     slideImage();
//     }
};

const goPrev = () => {
  counter--;
  slideImage();
//   if (counter != 0) {
//     counter--;
//     slideImage();
//     }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
