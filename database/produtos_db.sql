create table if not exists produtos(
    codigo serial primary key,
    descricao varchar(100) not null,
    saldo int not null
);
