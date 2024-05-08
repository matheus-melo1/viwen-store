import data from './products.json' assert { type: 'json' };

const nav = document.querySelector('nav');
fetch('navbar.html')
  .then(response => response.text())
  .then(html => nav.innerHTML = html);

const initApp = () => {
  let productID = new URLSearchParams(window.location.search).get('id');
  let thisProduct = data.product.filter(product => product.id == productID)[0];
  if (!thisProduct) window.location.href = '/';

  document.querySelector('title').innerHTML = `Viwen | ${thisProduct.name}`;
  document.querySelector('.sell-title').innerHTML = `${thisProduct.name}`;
  document.querySelector('.sell-price').innerHTML = `R$ ${thisProduct.price}`;
  document.querySelector('.sell-portion').innerHTML = `${thisProduct.portion}x de R$${thisProduct.portionPrice} sem juros`;
  document.querySelector('.card-category').innerHTML = `${thisProduct.category}`;
  document.querySelector('.sell-img img').src = `${thisProduct.img}`;
}
initApp();
