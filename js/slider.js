const slider = document.querySelector('.slider');
const points = document.querySelectorAll('.point-banner .point');
const point1 = document.querySelectorAll('.point-banner .point')[0];
const point2 = document.querySelectorAll('.point-banner .point')[1];
const point3 = document.querySelectorAll('.point-banner .point')[2];

const imgs = [
  'https://i0.wp.com/notthesamo.com/wp-content/uploads/2024/03/joan-site-2.png?resize=740%2C416&quality=95&ssl=1',
  'https://i0.wp.com/notthesamo.com/wp-content/uploads/2024/04/oakley-site.png?resize=740%2C416&quality=95&ssl=1',
  'https://i0.wp.com/notthesamo.com/wp-content/uploads/2024/05/sitw.png?resize=740%2C416&quality=95&ssl=1',
];
slider.src = imgs[0];
point1.classList.add('on');
let slidesNum = 0;

point1.onclick = () => {
  point1.classList.remove('on');
  point2.classList.remove('on');
  point3.classList.remove('on');

  point1.classList.add('on');
  slidesNum = 0;
  slider.src = imgs[slidesNum];
}

point2.onclick = () => {
  point1.classList.remove('on');
  point2.classList.remove('on');
  point3.classList.remove('on');

  point2.classList.add('on');
  slidesNum = 1;
  slider.src = imgs[slidesNum];
}

point3.onclick = () => {
  point1.classList.remove('on');
  point2.classList.remove('on');
  point3.classList.remove('on');

  point3.classList.add('on');
  slidesNum = 2;
  slider.src = imgs[slidesNum];
}

setInterval(() => {
  slidesNum += 1;
  
  if(slidesNum >= imgs.length) slidesNum = 0;
  slider.src = imgs[slidesNum];
  if(slidesNum == 0) {
    points[0].classList.add('on');
    points[1].classList.remove('on');
    points[2].classList.remove('on');
  }
  else if(slidesNum == 1) {
    points[1].classList.add('on');
    points[2].classList.remove('on');
    points[0].classList.remove('on');
  }
  else {
    points[2].classList.add('on');
    points[1].classList.remove('on');
    points[0].classList.remove('on');
  }
}, 3000);