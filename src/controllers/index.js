import Product from "../models/Product";

export const renderIndex = async (req, res) => {
  const products = await Product.find();
  res.render("store/index", { title: "Express", products: products.map(p => p.toJSON()) });
};
