import mongoose from "mongoose";
import { Product, ProductInterface } from "./models/Product";

// CRUD -> create, read, update, delete

const createProduct = async (newProduct: object) => {
  try {
    const product: ProductInterface = new Product(newProduct);
    const newProductOnDb = await product.save(); // insertOne()
    return { success: true, data: newProductOnDb, message: "Producto creado" };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

const getProducts = async () => {
  try {
    const products = await Product.find();
    return { success: true, data: products, message: "Lista de productos" };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

const getProductById = async (id: string) => {
  try {
    const product = await Product.findById(id);

    if (!product) {
      return { success: false, message: "Producto no existente" };
    } else {
      return { success: true, data: product, message: "Producto filtrado por ID" };
    }
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

const getProductsByName = async (name: string) => {
  try {
    const products = await Product.find({ name: { $regex: name, $options: "i" } });
    return { success: true, data: products, message: "Lista de productos filtrados por nombre" };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

const updateProduct = async (id: string, body: object) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true });
    if (!updatedProduct) {
      return { success: false, message: "Producto no existente" };
    } else {
      return { success: true, data: updatedProduct, message: "Producto actualizado" };
    }
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

const deleteProduct = async (id: string) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return { success: false, message: "Producto no existente" };
    } else {
      return { success: true, data: deletedProduct, message: "Producto eliminado" };
    }
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export { createProduct, getProducts, getProductById, getProductsByName, updateProduct, deleteProduct };
