// menuEmail => 'click' - desktopMenu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// menuBarsIcon => 'click' - mobileMenu
const menuBarsIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
// menuShoppingCartIco => 'click' - sectionShoppingCart
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
  
  if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
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
  name: "Table",
  price: "70,00",
  image: "https://carulla.vtexassets.com/arquivos/ids/10064979/escritorio-connie-blanco-diseno-moderno-con-dos-entrepanos.jpg?v=638066525870830000",
});
productList.push({
  name: "PC Master Gamer",
  price: "280,00",
  image: "https://assets.jumpseller.com/store/tienda-gamer-medellin/themes/534705/options/93930156/IMG_20221130_002629_006.webp?1671520847",
});

renderProducts(productList);