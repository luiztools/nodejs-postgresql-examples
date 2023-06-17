CREATE TABLE clientes ( 
    id SERIAL CONSTRAINT pk_id_cliente PRIMARY KEY, 
    nome varchar(150) NOT NULL, 
    idade integer NOT NULL, 
    uf varchar(2) NOT NULL 
);