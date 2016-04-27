<h1> Contatooh </h1>

<p>
Repositório feito para o estudo das tecnologias MEAN , 
baseadas no livro mean-full-stack-javascript-para-aplicacoes-web-com-mongodb-express-angular-e-node da casa do código
</p>

<ul>
  <li>
    <h4>1-Introdução</h4>
    <p>aqui fica a introdução</p>
  </li>
  <li>
    <h4>2-Express: framework web para Node.js</h4>
  </li>
  <li>
    <h4>3-Bower: gerenciador de dependências front-end</h4>
  </li>
  <li>
    <h4>4-AngularJS: o framework MVC da Google</h4>
    <p>um capitulo introdutório do Angular , foi abordado como ativar uma pagina para usar o Angular com a diretiva 
    ng-app que gerencia um bloco de código sendo que se for colocada na tag html vai gerenciar toda a página, foi criado um 
    modulo principal da aplicação com a variável global angular usando a notação <code>angular.module('nomeModule',[]); </code>
    , também aprendemos sobre Angular expression AE que é caracterizada por {{ }} e tudo que estiver dentro sera controlado pelo Angular
    um exemplo pode ser ``` <p> nome : {{nome}} </p> ``` para que nome seja inicializado com um valor dinâmico ele precisa estar no scopo do angular
    e esse scopo vai estar associado ao um controller usando a diretiva ``` ng-controller="nomeController" ``` para que seja definido um controller 
    vamos usar a seguinte notação ``` angular.module('nomeModule').controller('nomecontroller',function($scope) {} ```` esse scope é justamente quem
    vai gerenciar as vairáveis explicadas acima como ````{{nome}}```` no scope sera ```` $scope.nome = "fulano" ```` aprendemos tb injeção de dependência
    que é o caso do ojbeto $scope na injeção de dependência do angular temos que usar o nome correto do objeto a ser injetado para que funcione , 
    aprendemos também diretivas como ng-click , ng-repeat e vamos aprender muitas outras.</p>
  </li>
  <li>
    <h4>5-Integrando AngularJS e Express</h4>
  </li>
  <li>
    <h4>6-MongoDB: banco de dados baseado em documento</h4>
  </li>
  <li>
    <h4>7-Integrando Express e MongoDB</h4>
  </li>
  <li>
    <h4>8-Autenticação com Passport</h4>
  </li>
  <li>
    <h4>9-Tornando sua aplicação ainda mais segura</h4>
  </li>
  <li>
    <h4>10-Grunt: automação de tarefas front-end</h4>
  </li>
  <li>
    <h4>11-Testando a aplicação</h4>
  </li>  
</ul>



