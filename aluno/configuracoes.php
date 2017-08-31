<!DOCTYPE html>
<?php
session_start();
if(!$_SESSION['email'])
{

    header("Location: login.php");//redirect to login page to secure the welcome page without login access.
}

?>
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br">
<head>
    <meta charset="utf-8">
    <!-- This file has been downloaded from Bootsnipp.com. Enjoy! -->
    <title>Configura&ccedil;&otilde;es</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

	<link type="text/css" rel="stylesheet" href="bootstrap-3.2.0-dist/css/bootstrap.css"> <!--css file link in bootstrap folder-->
   
   <style type="text/css">
    @media (min-width: 768px) {
		.dropdown:hover .dropdown-menu {
			display: block;
		}
	}
	*{
			font-family: 'Open Sans', sans-serif;
	}
    </style>
	
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>

</head>

<body>

<?php
include "includes/barra_menu.php";
?>


<form class="col-md-12 form-horizontal" method="post" action="configuracoes.php">
<fieldset>
<legend>Configurações de Senha</legend>
<!-- Password input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="pass1">Senha Antiga</label>
  <div class="col-md-4">
    <input id="pass1" name="pass1" class="form-control input-md" type="password">
    <span class="help-block">Digite sua senha antiga</span>
  </div>
</div>

<!-- Password input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="pass2">Nova Senha</label>
  <div class="col-md-4">
    <input id="pass2" name="pass2" class="form-control input-md" type="password">
    <span class="help-block">Digite a nova senha</span>
  </div>
</div>

<!-- Password input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="passwordinput3">Nova Senha</label>
  <div class="col-md-4">
    <input id="pass3" name="pass3" class="form-control input-md" type="password">
    <span class="help-block">Digite novamente a nova senha</span>
  </div>
</div>


<!-- Button2 -->
<div class="form-group">
  <label class="col-md-4 control-label" for="btnSenha">Salvar Senha</label>
  <div class="col-md-4">
	<input class="btn btn-primary " type="submit" value="Salvar" name="btnSenha">
  </div>
</div>

</fieldset>
</form>

<script type="text/javascript">

</script>
</body>
</html>
<?php

include("database/db_conection.php");

if(isset($_POST['btnSenha']))
{
	$senha = $_SESSION['pass'];
	$user_email = $_SESSION['email'];
	
	$senhaatual = $_POST['pass1'];
	$senhanova1 = $_POST['pass2'];
	$senhanova2 = $_POST['pass3'];

		
	if($senha != $senhaatual){
		echo "<script>alert('Senha atual inválida!')</script>";
	}else if($senhanova1 != $senhanova2){
		echo "<script>alert('Senhas não batem!')</script>";
	}else if($senhanova1=="" || $senhanova2==""){
		echo "<script>alert('Campos de senha não podem ser vazios!')</script>";
	}else if(strlen($senhanova2)<4){
		echo "<script>alert('A senha deve conter no mínimo 4 caracteres!')</script>";
	}else{
		$sql= "UPDATE users SET user_pass ='$senhanova2' WHERE user_email = '$user_email'";
		if(mysqli_query($dbcon, $sql)){
			echo "<script>alert('Dados alterados com sucesso! O sistema irá para tela de login.')</script>";
			echo "<script>window.open('logout.php','_self')</script>";
		} else {
			echo "<script>alert('ERROR: Não foi possível executar o comando $sql ", mysqli_error($link),"')</script>";
		}
	}
	
}
?>