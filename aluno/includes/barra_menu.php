<!DOCTYPE html>
<?php


if(!$_SESSION['email'])
{

    header("Location: login.php");//redirect to login page to secure the welcome page without login access.
}

?>
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br">
<head>
    <meta charset="utf-8">
    <!-- This file has been downloaded from Bootsnipp.com. Enjoy! -->
    <title>Menu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="text/css" rel="stylesheet" href="bootstrap-3.2.0-dist/css/bootstrap.css"> <!--css file link in bootstrap folder-->
    <style type="text/css">
        @media (min-width: 768px) {
    .dropdown:hover .dropdown-menu {
        display: block;
    }
 }
    </style>
	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    
</head>
<body>
 <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="default.php" style="font-weight: bold; color: #FFFFFF">SysAcadêmico</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        
        <li><a href="default.php"><span class="glyphicon glyphicon-home"></span> Início</a></li>
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-envelope"></span> Mensagens<span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="mensagens_escrever.php"><span class="glyphicon glyphicon-pencil"></span> Escrever mensagem</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><span class="glyphicon glyphicon-arrow-up"></span> Saída</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-arrow-down"></span> Entrada</a></li>
                </ul>
        </li>
        <li><a href="#"><span class="glyphicon glyphicon-edit"></span> Notas</a></li>
		<li><a href="#"><span class="glyphicon glyphicon-check"></span> Boletim</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-calendar"></span> Horário</a></li>
        <li><a href="configuracoes.php"><span class="glyphicon glyphicon-wrench"></span> Configurações</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="configuracoes_usuario.php"><span class="glyphicon glyphicon-user"></span> <?php echo $_SESSION['nome']//," - ", $_SESSION['email'];?></a></li>
        <li><a href="logout.php"><span class="glyphicon glyphicon-log-out"></span> Sair</a></li>
      </ul>	  
    </div>
  </div>
</nav>
<script type="text/javascript">

</script>
</body>
</html>
