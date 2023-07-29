class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    const prod = this.products.find((prod) => prod.code === product.code);

    if (prod) {
      console.log("Producto ya encontrado");
    } else {
      this.products.push(product);
    }
  }

  getProducts() {
    console.log(this.products);
  }

  getProductById(id) {
    const prod = this.products.find((prod) => prod.id === id);

    if (prod) {
      console.log(prod);
    } else {
      console.log("Producto no encontrado");
    }
  }
}

const productManager = new ProductManager();

class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.id = Product.incrementarId();
  }

  static incrementarId() {
    if (this.idIncrement) {
      this.idIncrement++;
    } else {
      this.idIncrement = 1;
    }
    return this.idIncrement;
  }
}

const cafeDeBrasil = new Product(
  "Café de Brasil",
  "El café de Brasil corresponde a la variedad arábica, por ello predomina el sabor dulzón, similar a los cafés procedentes de África, aunque sin la acidez característica de estos. El café de Brasil se caracteriza por su aroma suave y fino y cuerpo alto.",
  500,
  "./Images/cafe_brasil.jpg",
  37,
  200
);

const cafeDeHonduras = new Product(
  "Café de Honduras",
  " Un café con fragancias frutales y dulces, su acidez es viva y brillante, con un sabor a naranja y durazno,creando una bebida vibrante.",
  950,
  "./Images/cafe_honduras.jpg",
  51,
  100
);

const cafeDeVietnam = new Product(
  "Café de Vietnam",
  "Café de Cau Dat, Da Lat: Con una altitud de más de 1.600 m sobre el nivel del mar y un clima templado y brumoso la mayor parte del año, la región de Cau Dat y más concretamente la provincia de Lam Dong, con la población de Da Lat y alrededores de forma destacada, representan un paraíso para la producción de los mejores arábicas de Vietnam. El café de estos territorios es conocido como el rey del café vietnamita, en especial, el Bourbon amarillo y Typica que crecen en esta área del país. El café de Cau Dat se caracteriza por su agradable aroma, cuerpo suave y retrogusto limpio, que ya le han valido su entrada en algunos mercados de especialidad de diferentes países, entre ellos EUA.",
  1250,
  "./Images/cafe_vietnam.jpg",
  15,
  50
);

const cafeDeColombia = new Product(
  "Café de Colombia",
  "Su aroma, sabor y textura son una experiencia sensorial única,  Estos granos son reconocibles por tener un aroma dulce y acaramelado, con ciertas notas a coco. Su fragancia es muy pronunciada, debido a una simbiosis perfecta de los factores que facilitan su cultivo.  Posee un sabor complejo, que lo hace muy apreciado por los amantes del café. Se puede distinguir un sabor dulce y afrutado, con notas que nos recuerdan al de los cítricos y con ligeros toques a nuez. Su cuerpo es balanceado y con un nivel elevado de acidez.",
  900,
  "./Images/cafe_colombia.jpg",
  56,
  170
);

const cafeDeEcuador = new Product(
  "Café de Ecuador",
  "Un aspecto que es llamativo del café de Ecuador es que se caracteriza por ser bastante jugosos, con cuerpo cremoso y definido, una acidez media, sabores concentrados y poseer notas a frutas amarillas, albaricoque, durazno y un poco a mermeladas. Algunos expertos no dudan en definirlo como un café muy bien balanceado.",
  800,
  "./Images/cafe_ecuador.jpg",
  70,
  225
);

const cafeDeEtiopia = new Product(
  "Café de Etiopía",
  " café muy delicado, de mediana acidez, algo afrutado y con ciertas notas cítricas. Su aroma es intenso, destaca por su bajo contenido en cafeína, es muy apreciado por su profundo aroma a especias. El grano es relativamente pequeño y grisáceo cuando está sin tostar.",
  1000,
  "./Images/cafe_etiopia.jpg",
  31,
  20
);

productManager.addProduct(cafeDeEtiopia);
productManager.addProduct(cafeDeVietnam);
productManager.addProduct(cafeDeColombia);
productManager.addProduct(cafeDeBrasil);
productManager.addProduct(cafeDeEcuador);
productManager.addProduct(cafeDeHonduras);

productManager.getProducts();

productManager.getProductById(5);
