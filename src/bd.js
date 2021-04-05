const {Pool} = require("pg");
async function criarConexao() {
    const pool = new Pool({
        connectionString: 'postgres://zmsngxejchimun:b892b6119efbb131cd5d77e109bd592adad16f10c1f58534119715245d65777e@ec2-3-222-127-167.compute-1.amazonaws.com:5432/d6t5sg2eo4hreegi', 
        ssl: {
            rejectUnauthorized: false
        }
    });
 
    let con = await pool.connect();
   
    await con.query(`create table pizzaria(
        cnpj serial,
        nome vachar;
        administrador vachar;
        constraint pizza_pk primary key (cnpj)
    )`);
    await con.query(`create table funcionario(
        id serial,
        cargo vachar,
        nome vachar,
        constraint funcionario_pk primary key (id)
    )`);
   
    await con.query(`create table cliente(
        id serial,git
        endereco vachar,
        nome vachar,
        constraint clientes_pk primary key (id)
    )`);
    await con.query(`create table pessoa(
        id serial,
        nome vachar,
        constraint pessoa_pk primary key (id)
    )`);
   
    await con.query(`create table pedido(
        numero_do_pedido serial,
        pagamento vachar,
        quantidade vachar,
        proprietario vachar,
        valor_total integer,
        constraint pedido_pk primary key (numero_do_pedido)
    )`);
    await con.query(`create table redes_sociais(
        usermae serial,
        instagram integer,
        whatsapp integer,
        constraint redessociais_pk primary key (username)
    )`);
    await con.query(`create table supermercado(
        cnpj serial,
        nome vachar,
        constraint supermercado_pk primary key (cnpj)
    )`);
   
    await con.query(`create table ingredientes(
        id serial,
        marca integer,
        nome vachar,
        quantidade vachar,
        constraint ingredientes_pk primary key (id)
    )`);
    await con.query(`create table pizza(
        id serial,
        quantidade vachar,
        tamanho vachar,
        sabor vachar,
        refrigerante_adicional vachar,
        constraint pizza_pk primary key (id)
    )`);
   
    con.release();
}
 
criarConexao();
