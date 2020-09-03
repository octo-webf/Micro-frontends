import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "../actionTypes";

/*
[
  {
    id: 0,
    name: "GTA V",
    price: "49€",
    imgURL:
      "https://www.cdiscount.com/pdt2/7/9/8/1/700x700/son3491951945798/rw/gta-v-ps4.jpg",
    tags: "Adult, Violence, Drugs",
    category: "Video Games",
  },
  {
    id: 1,
    name: "iPhone X",
    price: "899€",
    imgURL:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTW8BEYHyqthct0rn2fkqo-Ud7yJqe-JzrWZIiz3Q3sSqLHb4Kb5u4&usqp=CAc",
    category: "Smartphones",
  },
  {
    id: 2,
    name: "Acer Aspire 3",
    price: "529€",
    imgURL:
      "https://static.fnac-static.com/multimedia/Images/FR/MDM/cd/11/e7/15143373/1540-1/tsp20200703211432/PC-Portable-Acer-Aspire-3-A315-54K-54RC-15-6-Intel-Core-i5-4-Go-RAM-512-Go-D-Noir.jpg",
    category: "Computers",
  },
  {
    id: 3,
    name: "Assassin's Creed: Odyssey",
    price: "70€",
    imgURL:
      "https://www.cdiscount.com/pdt2/8/9/6/1/700x700/3307216063896/rw/assassin-s-creed-odyssey-jeu-ps4.jpg",
    tags: "Violence, Open World, History",
    category: "Video Games",
  },
  {
    id: 4,
    name: "Fortnite",
    price: "Free",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/917JLu3S8DL._SX522_.jpg",
    tags: "Battle Royale, Trending, Violence",
    category: "Video Games",
  },
  {
    id: 5,
    name: "Chromebook Asus",
    price: "469€",
    imgURL:
      "https://static.fnac-static.com/multimedia/Images/FR/MDM/4c/98/a2/10655820/1540-1/tsp20200703210734/Chromebook-Asus-C523NA-A20033-15-6-Tactile.jpg",
    category: "Computers",
  },
  {
    id: 6,
    name: "Macbook Air",
    price: "1199€",
    imgURL:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-config-201810?wid=1078&hei=624&fmt=jpeg&qlt=95&.v=1539386809517",
    category: "Computers",
  },
  {
    id: 7,
    name: "Samsung Galaxy S10",
    price: "553€",
    imgURL:
      "https://image.darty.com/darty?type=image&source=/market/2020/03/14/mkp_8rw2akUGa82o6Q.jpeg&width=400&height=300&quality=70",
    category: "Smartphones",
  },
  {
    id: 8,
    name: "Huawei P30",
    price: "429€",
    imgURL:
      "https://d1eh9yux7w8iql.cloudfront.net/product_images/product_images/254208_cfbe0b04-ee52-4bfd-bc2b-9be3fa27df85-thumb.jpg",
    category: "Smartphones",
  },
  {
    id: 9,
    name: "HP envy",
    price: "839€",
    imgURL:
      "https://static.fnac-static.com/multimedia/Images/FR/MDM/9c/8f/e2/14847900/1540-1/tsp20200522125203/PC-Ultra-Portable-HP-ENVY-13-ba0000nf-13-3-Intel-Core-i5-8-Go-RAM-256-Go-D-Argent-naturel.jpg",
    category: "Computers",
  },
];
*/
const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.products };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default productsList;
