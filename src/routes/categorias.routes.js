import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

// Creamos el enroutador
const router = Router();

// Configuramos respuesta desde server metodo http get
router.get("/", categoriaController.getCategorias)

// Hacemnos disponible al router en toda la app
export default router;