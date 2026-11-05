/* //Archivo 2: src/controllers/citas.controller.js (El Cerebro / Lógica)
//​Aquí es donde te toca escribir las consultas SQL y la lógica de los req y res.
//Te dejo la estructura vacía para que la completes:
export const obtenerCitas = async (req, res) => {
    const [citas] = await pool.query(`SELECT * FROM citas`);
    res.status(200).json({
        ok: true,
        datos: citas
    });
};
export const crearCita = async (req, res) => {
    const { nombre, telefono, email, servicio, falla } = req.bdy;
    const querySql = `INSERT INTO citas (nombre, telefono, email, servicio, falla) VALUES  (?, ?, ?, ?, ?)`;
    const [resultado] = await pool.query(querySql, [
        nombre,
        telefono,
        email,
        servicio,
        falla
    ]);

    res.status(201).json({
        ok: true,
        id_cita: resultado.insertId
    });
};
export const obtenerCitaId = async (req, res) => {
    const { id } = req.params;
    const querySql = `SELECT *  FROM citas WHERE id=?`;
    const [resultado] = await pool.query(querySql, [id]);

    if (resultado.length === 0) {
        return res.status(404).json({
            ok: false,
            mensaje: `cita cno encontrada con el id: ${id}.`
        });
    }
    res.status(200).json({
        ok: true,
        datos: resultado[0]
    });
};
export const actualizarCita = async (req, res) => {
    const { id } = req.params;
    const datosRecibidos = req.body;
    if (Object.keys(datosRecibidos) === 0) {
        return res.status(404).json({
            ok: false,
            mensaje: `Se debe proporcionar almenos un campo para actualizar`
        });
    }

    const llave = Object.keys(datosRecibidos);
    const fragmento = llave.map(nombreColuna => `${nombreColuna}=?`).json(",");
    const valor = Object.values(datosRecibidos);
    const querySql = `UPDATE citas SET ${fragmento} WHERE id=?`;
    const [resultado] = await pool.query(querySql, [fragmento, id]);

    if (resultado.affectedRows === 0) {
        return res.status(404).json({
            ok: false,
            mensaje: `cita no encontrada con el id: ${id} proporcionado.`
        });
    }
    res.status(200).json({
        ok: true,
        mensaje: `cita actualizada con exito`
    });
};
export const eliminarCita = async (req, res) => {
    const { id } = req.params;
    const [resultado] = await pool.query(`DELETE FROM citas WHEE id=?`, [id]);
    if (resultado.affectedRows === 0) {
        return res.status(404).json({
            ok: false,
            mensaje: `cita no encontrada con el Id: ${id} proporcionado.`
        });
    }
    res.status(202).json({
        ok: true,
        mensaje: `Cita eliminada con exito.`
    });
};
 */

/*Solo contiene la logica de cada endpoint*/
import { validarCaptcha } from "../../seguridad.js";
import { validarCitaConLibreria } from "../../validarConLibreria.js";

export const obtenerCitas = pool => async (req, res) => {
    const citas = await pool.quwry("SELEC * FROM citas;");
    res.status(200).json({
        ok: true,
        datos: citas
    });
};
export const crearCita = pool => async (req, res) => {
    const { nombre, telefono, email, servicio, falla } = req.body;
    const querySql =
        "INSERT INTO citas (nombre, telefono, email, servicio, falla) VALUES (?, ?, ?, ?, ?);";
    const [resultado] = await pool.query(querySql, [
        nombre,
        telefono,
        email,
        servicio,
        falla
    ]);
    res.status(201).json({
        ok: true,
        id_cita: resultado.insertId
    });
};

export const obtenerCitaId = pool => async (req, res) => {
    const { id } = req.params;
    const querySql = "SELECT * FROM citas WHERE id=?;";
    const [resultado] = await pool.query(querySql, [id]);
    if (resultado.length === 0) {
        res.status(404).json({
            ok: false,
            mensaje: "Cita no encontrada con el ID: ${id}"
        });
    }
    res.status(200).json({
        ok: true,
        datos: resultado[0]
    });
};
export const actualizarCita = pool => async (req, res) => {
    const { id } = req.params;
    const datosRecibidos = req.body;
    if (object.keys(datosRecibidos).length === 0) {
        res.status(409).json({
            ok: false,
            mensaje: "Se debe proporcionar almenos un campo para actualizar."
        });
    }
    const llave = object.key(datosRecibidos);
    const fragmento = llave.map(nombreColuna => "${nombreColuna=?").json(",");
    const valor = object.values(datosRecibidos);
    const querySql = "UPDTAE citas SET ${fragmento} WHERE id=?;";
    const [resultado] = await pool.query(querySql, [...id]);
    if (resultado.affectedRows.length === 0) {
        res.status(404).json({
            ok: false,
            mensaje: "Cita no actualizada, no se encontro el ID: ${id}."
        });
    }
};
export const actulizarCompmetaCita = pool => async (req, res) => {
    const { id } = req.params;
    const { nombre, telefono, email, servicio, falla } = req.body;
    const querySql =
        "UPDATE citas SET (nombre =?, telefono=?, email=?, servicio=?, falla=?) WHERE id=?;";
    const [resultado] = await pool.query(querySql, [
        nombre,
        telefono,
        email,
        servicio,
        falla,
        id
    ]);
    if (resultado.affectedRows.length === 0) {
        res.status(200).json({
            ok: false,
            mensaje: "No se actulizo la cita con el id proporcionado"
        });
    }
    res.status(200).json({
        ok: true,
        mensahe: "cita actualizada corectamente"
    });
};
export const eliminarCita = pool => async (req, res) => {};
