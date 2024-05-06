import data from './products.json' assert { type: 'json' };

const initApp = () => {
  let productID = URLSearchParams(window.location.search).get('id');
  let thisProduct = data.product.filter(product => product.id == productID)[0];
  if(!thisProduct) window.location.href = '/';
}
initApp();