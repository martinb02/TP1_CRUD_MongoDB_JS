import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const URI_DB = process.env.URI_DB || "";

// Configurar strictQuery para evitar la advertencia
mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    await mongoose.connect(URI_DB);
    console.log("Conectado a MongoDB con éxito!");
  } catch (error) {
    console.log("Error al conectarse a MongoDB :(");
  }
};

export { connectDB };
