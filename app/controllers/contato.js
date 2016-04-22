'use strict';

var contatos = [
  {_id:1,nome:'contato1'},
  {_id:2,nome:'contato2'},
  {_id:3,nome:'contato3'},
  {_id:4,nome:'contato4'}
  ];

module.exports = function() {
  var controller = {};
  controller.listaContatos = function(req,res) {
    res.json(contatos);
  };
  controller.obtemContato = function(req,res) {
    var idContato = req.params.id;
    var contato = contatos.filter(function(contato) {
      return contato._id = idContato;
    })[0];
    contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
  };
  return controller;
};