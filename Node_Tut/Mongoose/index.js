const mongoose = require("mongoose");

const ProductSchemas = new mongoose.Schema({
  name: String,
  Brand: String,
  Price: Number,
  category: String,
});

mongoose.connect("mongodb://localhost:27017/e-comm");

const saveInDB = async () => {
  const ProductsModel = mongoose.model("products", ProductSchemas);
  let data = new ProductsModel({
    name: "M8",
    Brand: "Oppo",
    Price: 17500,
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const ProductsModel = mongoose.model("products", ProductSchemas);
  let data = await ProductsModel.updateOne(
    { name: "M8" },
    { $set: { Price: 18000 } }
  );
  console.warn(data);
};

const deleteInDB = async () => {
    const ProductsModel = mongoose.model("products", ProductSchemas);
    let data = await ProductsModel.deleteOne({name:"M8"});
    console.warn(data);
};

const findInDB = async () => {
    const ProductsModel = mongoose.model("products", ProductSchemas);
    let data = await ProductsModel.find();
    console.warn(data);
};

findInDB();