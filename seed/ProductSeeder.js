import Product from "../src/models/Product";
import { connectToDb } from "../src/database";

(async () => {
  const db = await connectToDb();

  const products = [
    new Product({
      imagePath: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYjc?ver=a28c",
      name: "Laptop One",
      description: "An awesome laptop",
      price: 1000,
    }),
    new Product({
      imagePath: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYjc?ver=a28c0",
      name: "Laptop Two",
      description: "An awesome laptop 2",
      price: 1000,
    }),
    new Product({
      imagePath: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYjc?ver=a28c0",
      name: "Laptop Three",
      description: "An awesome laptop 3",
      price: 1000,
    }),
  ];

  for (let i = 0; i < products.length; i++) {
    await products[i].save();
  }

  db.connection.close();
})();
