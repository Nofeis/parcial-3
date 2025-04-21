import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

// Creamos el enroutador
const router = Router();

// Configuramos respuesta desde server metodo http get
router.get("/", categoriaController.getCategorias);
router.get("/", categoriaController.postCategorias);

// Ruta que recibe un parametro
router.get("/:id", categoriaController.getCategory);

// Ruta que recibe un parametro id de categoria a borrar
router.get("/:id", categoriaController.deleteCategory);

// Ruta que recibe como parametro tanto el cuerpo como el id a actualizar
router.get("/:id", categoriaController.updateCategorias);

// Hacemos disponible al router en toda la app
export default router;