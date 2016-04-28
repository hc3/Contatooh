angular.module('contatooh').controller('ContatosController',
  function($scope,$resource) {
 
    var Contato = $resource('/contatos/:id');

    function buscaContatos() {
      Contato.query(
        function(contatos){
          $scope.contatos = contatos;
        },
        function(erro) {
          console.log('deu merda ao buscar contato');
          console.log(erro);
        });      
    }
    
    $scope.remove = function(contato) {
      Contato.delete({id:contato._id},
        buscaContatos(),
        function(erro){
          console.log('deu merda ao remover contato');
          console.log(erro);
        });
    };
    
    buscaContatos();
    $scope.filtro = '';
  
});