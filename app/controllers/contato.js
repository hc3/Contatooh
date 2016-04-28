'use strict';

var contatos = [
  {_id:1,nome:'contato1',email:"contato1@bol.com.br"},
  {_id:2,nome:'contato2',email:"contato2@bol.com.br"},
  {_id:3,nome:'contato3',email:"contato3@bol.com.br"},
  {_id:4,nome:'contato4',email:"contato4@bol.com.br"}
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
  
  controller.removeContato = function(req,res) {
    var idContato = req.params.id;
    contatos = contatos.filter(function(contato){
      return contato._id != idContato;
    });
    res.status(204).end();
    console.log('API: remove contato:'+ idContato);
  }
  return controller;
  
};