import mongoose, { Document, Schema } from "mongoose";
import { connectDB } from "../config/mongo";

// Conectar a la base de datos
connectDB();

// Definir la interfaz del producto
interface ProductInterface extends Document {
  name: string;
  price: number;
  description: string;
  category?: string; // Campo opcional para la categoría del producto
}

// Definir el esquema del producto
const productSchema: Schema = new Schema<ProductInterface>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 }, // Precio no puede ser negativo
    description: { type: String, required: true },
    category: { type: String, default: "general" }, // Categoría opcional con valor por defecto "general"
  },
  { timestamps: false, versionKey: false }
);

// Configurar el esquema para que sea estricto
productSchema.set("strict", true);

// Crear el modelo de producto
const Product = mongoose.model<ProductInterface>("Product", productSchema);

export { Product, ProductInterface };
