import data from './products.json' assert { type: 'json' };

// inserindo a navbar de maneira universal para todas paginas
const nav = document.querySelector('nav');
fetch('navbar.html')
  .then(response => response.text())
  .then(html => nav.innerHTML = html);

// aparecer produtos

const container = document.querySelector('.cloth-products');
data.product.forEach(product => {
  container.innerHTML += `
    <div class="card-product item">
      <div class="card-info">
        <div class="card-img">
          <a href="./detail.html?id=${product.id}">
            <img src="${product.img}" alt="">
          </a>
        </div>
        <div class="card-category">
          <span>${product.category}</span>
        </div>
        <div class="card-title">
          <a href="./detail.html?id=${product.id}">${product.name}</a>
        </div>
        <div class="card-price">
          <p>R$${product.price}</p>
          <sub><ion-icon class="credit-card" name="card"></ion-icon> ${product.portion}x de R$${product.portionPrice} sem juros</sub>
        </div>
      </div>
      <div class="card-pay">
        <button><i class="fa-solid fa-cart-plus"></i></button>
        <button><i class="fa-solid fa-money-bill"></i> Comprar</button>
      </div>
    </div>
  `;
});

console.log(data.product[0].category)