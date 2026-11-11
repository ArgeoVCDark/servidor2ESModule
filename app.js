/* import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "path";
import mysql from "mysql2/promise";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { validarCaptcha } from "../../seguridad.js";
import { validarCitaConLibreria } from "../../validarConLibreria.js";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(helmet());
const limitador = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        error: [
            {
                compo: "general",
                Message: "Demasiados intentos de esta IP, intenta mas tarde"
            }
        ]
    }
});
app.use("/api/", limitador);

app.use(express.static(path.join(__dirname, "index.html")));
app.use(express.urlencoded({ extended: true }));
app.use(join());

app.get("/api", citasRouter(pool));

app.use((req, res) => {
    res.status(404).send(`<h1>404 - Pagina no encontrada</h1>`);
});

app.use((err, req, res, next) => {
    console.error(`Errror capturado en el middleware global de express-5`, err);
    res.status(500).json({
        ok: false,
        mensaje: `Error interno del servidor al procesar la solicitud`
    });
});

app.listen(port, () => {
    console.log(`Servidor CRUD activado en http://localhost: ${port}`);
});
 */

import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mysql from "mysql2/promise";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { validarCaptcha } from "./../../../seguridad.js";
import { validarCitaConLibreria } from "./../../../validarConLibreria.js";

const app = xpress();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(helmet());
const limitador = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        error: [
            {
                campo: "general",
                mensaje: "Demasiados intendtos de esta IP. Intente mas tarde"
            }
        ]
    }
});
app.use("/api/", limitador);

app.use(express.static(__dirname, "public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.join());

app.get("/api", citasRouters(pool));

app.use((req, res) => {
    res.status(404).send("<h1>404-Pagina no encontrada</h1>");
});

app.use((err, res, req, next) => {
    console.error("Error capturado en middleware global", err);
    res.status(500).json({
        ok: false,
        mensaje: "Error intenno, intente mas tarde"
    });
});

app.listen(port, `Servidor CRUD activado en http://localhost:${port}`);
