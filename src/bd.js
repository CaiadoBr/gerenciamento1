const {Pool} = require("pg");
async function criarConexao() {
    const pool = new Pool({
        connectionString: 'postgres://yprezhfexzmsst:bd058ca4df1b18b5fe6e81bbf84ff913abbbc150a9b6b6d2e7745a753b122c64@ec2-52-1-115-6.compute-1.amazonaws.com:5432/d9prot76bf3ps9 ', 
        ssl: {
            rejectUnauthorized: false
        }
    });
 
    let con = await pool.connect();
   
    await con.query(`create table esporte(
        Id serial,
        EsporteNome vachar;
        constraint Esporte_pk primary key (ID)
    )`);
    await con.query(`create table Evento(
        IdEvento serial,
        DataPratricar date,
        Localizacao vachar,
        times Array,
        Esporte esporte,
        constraint Evento_pk primary key (IdEvento)
    )`);
   
    await con.query(`create table jogador(
        MatriculaId serial,git
        nome vachar,
        Email vachar,
        senha varchar,
        telefone integer,
        constraint jogador_pk primary key (MatriculaId)
    )`);
    await con.query(`create table organizador(
        id serial,
        constraint organizador_pk primary key (id)
    )`);
   
    await con.query(`create table posicao(
        PosicaoId serial,
        nome varchar,
        constraint posicao_pk primary key (PosicaoId)
    )`);
    await con.query(`create table time(
        ID serial,
        nome varchar,
        ListaJogadores array,
        constraint times_pk primary key (ID)
    )`);
   
    
   
    con.release();
}
 
criarConexao();
