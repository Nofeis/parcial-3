// Importando el framework express
import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import cors from "cors";

// Asignamos a app toda funcionalidad para mi server web
const app = express();

// Setear un puerto a mi web server
app.set("port", 5000);

// Middleware
app.use(express.json());

// Routes
app.use(cors());
app.use("/api/categorias", categoriasRoutes);

// Hacemos disponible a mi server app para toda la aplicacion
export default app;