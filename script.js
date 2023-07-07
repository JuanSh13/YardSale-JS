// navbar-email -> Email ubicado en la navbar
const menuEmail = document.querySelector('.navbar-email');
// desktop-menu -> Seccion que se debe desplegar al dar click al navbar-email
const desktopMenu = document.querySelector('.desktop-menu');
// menu ->  Es el icono de Menu Bars para dispositivos mobiles 
const menuBarsIcon = document.querySelector('.menu');
// mobile-menu -> Es la lista de navegacion del navbar para dispositivos mobiles
const mobileMenu = document.querySelector('.mobile-menu');
// 
const menuShoppingCartIco = document.querySelector('.navbar-shopping-cart');
const sectionShoppingCart = document.querySelector('.shopping-cart');
// Cards Container
const cardsContainer = document.querySelector('.cards-container');

const productDetail = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');

// Render Products 
function renderProducts(arr) {
  for(product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.addEventListener('click', () => {
      const toggleShoppingCart = sectionShoppingCart.classList.contains('inactive');

      if(!toggleShoppingCart) {
        sectionShoppingCart.classList.add('inactive');
      }

      productDetail.classList.remove('inactive');
    });

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productName = document.createElement('p');
    productName.innerHTML = `${product.name}`;
    const productPrice = document.createElement('p');
    productPrice.innerHTML = `$ ${product.price}`;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productInfoFigureImage = document.createElement('img');
    productInfoFigureImage.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productInfoFigureImage);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

menuEmail.addEventListener('click', () => {
  desktopMenu.classList.toggle('inactive');
});
menuBarsIcon.addEventListener('click', () => {
  const isAsideShoppingCartClosed = sectionShoppingCart.classList.contains('inactive');

  if(!isAsideShoppingCartClosed) {
    sectionShoppingCart.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
});
menuShoppingCartIco.addEventListener('click', () => {
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const toggleProductDetail = productDetail.classList.contains('inactive');

  if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  if(!toggleProductDetail) {
    productDetail.classList.add('inactive');
  }
  
  sectionShoppingCart.classList.toggle('inactive');

});
productDetailClose.addEventListener('click', () => {
  

  productDetail.classList.add('inactive');
});

const productList = [];
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "120,00",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

renderProducts(productList);