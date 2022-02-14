CREATE TABLE IF NOT EXISTS usuario(
    usuario TEXT PRIMARY KEY,
    clave TEXT, 
    activo INTEGER
);

INSERT or IGNORE INTO usuario VALUES('Jorge','123456', 0);
INSERT or IGNORE INTO usuario VALUES('Fernando','654321', 0);
