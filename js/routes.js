import data from './products.json' assert { type: 'json' };

const nav = document.querySelector('nav');
fetch('navbar.html')
  .then(response => response.text())
  .then(html => nav.innerHTML = html);

const initApp = () => {
  let productID = new URLSearchParams(window.location.search).get('id');
  let thisProduct = data.product.filter(product => product.id == productID)[0];
  if (!thisProduct) window.location.href = '/';

  document.querySelector('.text').innerHTML = `${thisProduct.name}`;
  document.querySelector('.img').src = `${thisProduct.img}`;
}
initApp();