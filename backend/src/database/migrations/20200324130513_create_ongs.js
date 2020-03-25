
exports.up = function(knex) { // método up cria a tabela;
  return knex.schema.createTable('ongs',function(table){
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf").notNullable()
  })
};

exports.down = function(knex) {//deleta caso dê erro rsrs
  return knex.schema.dropTable('ongs');
};
