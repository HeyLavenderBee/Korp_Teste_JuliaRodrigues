create table if not exists notas_fiscais(
    numeracao char(9) primary key,
    status char(1) not null
);