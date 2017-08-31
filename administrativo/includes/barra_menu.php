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
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="text/css" rel="stylesheet" href="bootstrap-3.2.0-dist/css/bootstrap.css"> <!--css file link in bootstrap folder-->
	<link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet" type="text/css">
	<style type="text/css">
	@media (min-width: 768px) {
		.dropdown:hover .dropdown-menu {
			display: block;
		}
	}
	//
	//## Specify custom location and filename of the included Glyphicons icon font. Useful for those including Bootstrap via Bower.
	//** Load fonts from this directory.
	@icon-font-path : "../fonts/";
	//** File name for all font files.
	@icon-font-name : "glyphicons-halflings-regular";
	//** Element ID within SVG icon file.
	@icon-font-svg-id : "glyphicons_halflingsregular";
    </style>
	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    
</head>
<body>
 <div class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#" style="font-weight: bold; color: #FFFFFF"><span>SysAcadêmico</span><br></a>
        </div>
        <div class="collapse navbar-collapse" id="navbar-ex-collapse">
          <ul class="nav navbar-nav navbar-left">
            <li class="">
              <a href="default"><i class="fa fa-fw fa-home"></i>Início</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-fw fa-chain"></i>Matricula<br></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-fw fa-home"></i>Escolas</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-fw fa-book"></i>Cursos</a>
            </li>
            <li class="">
              <a href="ver_usuarios"><i class="fa fa-star fa-fw"></i>Funcionários<br></a>
            </li>
            <li class="">
              <a href="cad_aluno"><i class="fa fa-fw fa-users"></i>Alunos<br></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-fw fa-comments-o"></i>Mensagens<br></a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa et-down fa-user"></i> <?php echo $_SESSION['nome']//," - ", $_SESSION['email'];?> </a>
              <ul class="dropdown-menu" role="menu">
                <li>
                  <a href="cfg_usuario">Editar Usuário</a>
                </li>
                <li>
                  <a href="privacidade">Privacidade</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Outros</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="logout">Sair</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
<script type="text/javascript">

</script>
</body>
</html>
