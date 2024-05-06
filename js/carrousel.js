const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;
console.log(maxItems)

controls.forEach(control => {
  control.addEventListener('click', () => {
    const arrowRight = control.classList.contains('arrow-left');

    if(arrowRight) {
      currentItem -= 1;
    }
    else {
      currentItem += 6;
    }

    if(currentItem >= maxItems) {
      currentItem = 0;
    }
    if(currentItem < 0) {
      currentItem = maxItems - 1;
    };

    items[currentItem].scrollIntoView({
        inline: "end",
        behavior: "smooth",
    })
  })
});