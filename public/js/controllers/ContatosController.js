angular.module('contatooh').controller('ContatosController',function($scope,$routeParams) {
  
  $scope.contatos = [{
    "_id":1,
    "nome":"Contato 1",
    "email":"contato1@gmail.com"
  },{
    "_id":2,
    "nome":"Contato 2",
    "email":"contato1@gmail.com"
  },{
    "_id":3,
    "nome":"Contato 3",
    "email":"contato1@gmail.com"    
  },{
    "_id":4,
    "nome":"Contato 4",
    "email":"contato1@gmail.com"    
  },{
    "_id":5,
    "nome":"Contato 5",
    "email":"contato1@gmail.com"    
  }];
  
  $scope.filtro = '';

});