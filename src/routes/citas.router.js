/* import { Router } from "express";
// TODO: Importar las funciones del controlador que crearás abajo
// import { obtenerCitas, crearCita, ... } from "../controllers/citas.controller.js";
import { validarCaptcha } from "../../seguridad.js";
import { validarCitaConLibreria } from "../../validarConLibreria.js";

const router = Router();
//Recibe el pol como parametro o exportalo segun tu preferencia de diseno
export default function (pool) {
    router.get("citas", obtenerCitas);
    router.post(
        "/citas",
        validarCaptcha,
        validarCitaConLibreria(pool),
        crearCita
    );
    router.get("/citas/:id", obtenerCitaId);
    router.patch("/citas/:id", validarCitaConLibreria(pool), actualizarCita);
    router.delete("/citas/:id", eliminarCita);
    return router;
}
 */

/*Solo contiene las rutas */

import { Router } from "express";
import {
    obtenerCita,
    crearCita,
    obteberCitaId,
    actualizarCitaFull,
    actualizarCita,
    eliminarCita
} from "../controller/citas.controller.js";

const router = Router();

export default function (pool) {
    router.get("/api", obtenerCitas(pol));
    router.post(
        "/api",
        validarCaptcha,
        validarCitaConLibreria(pool),
        crearCita(pool)
    );
    router.get("/api", obtenerCitaId(pool));
    router.patch("api", validarCitaConLibreria(pool), actualizarCita(pool));
    router.put("/api", validarCitaConLibreria(pool), actualizarCitaFull(pool));
    router.delete("/api", eliminarCita(pool));

    return router;
}
