angular.module('contatooh').controller('ContatosController',
  function($scope,$resource) {
 
    var Contato = $resource('/contatos');
    
    $scope.filtro = '';
    $scope.mensagem = {texto:''};
    

    function buscaContatos() {
      Contato.query(
        function(contatos){
          console.log(contatos);
          $scope.contatos = contatos;
          $scope.mensgem = {};
        },
        function(erro) {
          console.log(erro);
          $scope.mensagem = {texto:'Não foi possível obter contato'};
        });      
    }
    
    $scope.remove = function(contato) {
      Contato.delete({id:contato._id},
        buscaContatos(),
        function(erro){
          console.log(erro);
          $scope.mensagem = {texto:'Não foi possível remover contato'};
        });
    };
    
    buscaContatos();
    
  
});