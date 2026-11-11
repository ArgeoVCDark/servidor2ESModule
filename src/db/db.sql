CREATE DATABASE taller_mecanico;
USE taller_mecanico;
CREATE TABLE personas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (50) NOT NULL,
    apellido VARCHAR (50) NOT NULL,
    telefono VARCHAR (20) NOT NULL,
    correo VARCHAR (100) NOT NULL,
    password VARCHAR(255) NULL,
    activo BOOLEAN DEFAULT TRUE,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);

SHOW TABLES;

CREATE TABLE clientes (
    id_persona INT PRIMARY KEY,
    rfc VARCHAR(13) NULL,
    observaciones_clientes TEXT,
    FOREIGN KEY (id_persona) REFERENCES personas(id) ON DELETE CASCADE
);

SHOW TABLES;

CREATE TABLE empleados (
    id_persona INT PRIMARY KEY,
    puesto ENUM('administrador', 'mecanico', 'contador') NOT NULL,
    especialidad VARCHAR(100) NULL,
    fecha_contratacion DATE NOT NULL,
    FOREIGN KEY (id_persona) REFERENCES personas(id) ON DELETE CASCADE
);

SHOW TABLES;

CREATE TABLE vehiculos (
    id_vehiculo INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    anio INT NOT NULL,
    placa VARCHAR(20) NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_persona) ON DELETE CASCADE
);

SHOW TABLES;

CREATE TABLE servicios (
    id_servicio INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT,
    precio_base DECIMAL (10, 2) NOT NULL
);

SHOW TABLES;

CREATE TABLE citas (
    id_cita INT AUTO_INCREMENT PRIMARY KEY,
    id_vehiculo  INT NOT NULL,
    id_creado_por INT NOT NULL,
    id_empleado INT NOT NULL,
    fecha_cita DATETIME NOT NULL,
    estado ENUM('pendiene', 'cotizado', 'en-proceso', 'completada', 'cancelada'),
    observaciones_tecnicas TEXT,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_vehiculo) REFERENCES vehiculos(id_vehiculo) ON DELETE CASCADE,
    FOREIGN KEY (id_creado_por) REFERENCES empleados(id_persona) ON DELETE CASCADE,
    FOREIGN KEY (id_empleado) REFERENCES empleados(id_persona) ON DELETE CASCADE
);
SHOW TABLES;

ALTER TABLE citas RENAME COLUMN id_citas to id_cita;

SHOW TABLES;

CREATE TABLE cita_servicio(
    id_cita_servicio INT AUTO_INCREMENT PRIMARY KEY,
    id_cita INT NOT NULL,
    id_servicio INT NOT NULL,
    precio_aplicado DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_cita) REFERENCES citas(id_cita) ON DELETE RESTRICT,
    FOREIGN KEY (id_servicio) REFERENCES servicios(id_servicio) ON DELETE RESTRICT
);
SHOW TABLES;

ALTER TABLE citas MODIFY id_empleado int null;

SHOW TABLES;
INSERT INTO citas VALUES ('fernado', 'fernandez', '9621234567', 'fernando01@gmail.com')