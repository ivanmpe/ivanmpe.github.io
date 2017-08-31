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
    <title><?php echo $_SESSION['nome']//," - ", $_SESSION['email'];?></title>
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
include_once("includes/barra_menu.php");
?>


<form class="col-md-12 form-horizontal" method="post" action="configuracoes_usuario.php">
<fieldset>
<!-- Form Name -->
<legend>Configurações de Usuário</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="alterarApelido">Apelido ou Nome Social</label>  
  <div class="col-md-4">
	<input id="alterarApelido" name="alterarApelido" placeholder="Digite um nome social" class="form-control input-md" type="text" value = '<?php echo $_SESSION['nome']?>'>
  <span class="help-block">Para mudar, digite um novo nome e aperte Salvar</span>  
  </div>
</div>


<!--Caixa de texto -->
<div class="form-group">
	<label class="col-md-4 control-label" id="messageLabel" for="message">Sobre mim </label>
	<div class="col-md-4">	
		<textarea name="message" id = "message" class="col-md-4 form-control input-sm" type="textarea" placeholder="Escreva algo sobre você aqui" maxlength="400" rows="7"><?php echo $_SESSION['frase']?></textarea>
	<span><p id="characterLeft" class="help-block ">Você passou do limite de caracteres</p></span>
	</div>    
</div>

<!-- Button1 -->
<div class="form-group">
  <label class="col-md-4 control-label" for="btnApelido">Salvar Informações</label>
  <div class="col-md-4">
    <input class="btn btn-primary " type="submit" value="Salvar" name="btnApelido">
  </div>
</div>
</fieldset>
</form>

<script type="text/javascript">
$(document).ready(function(){ 
    $('#characterLeft').text('400 caracteres restantes');
    $('#message').keyup(function () {
        var max = 400;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('Limite de caracteres atingido');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' caracteres restantes');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });    
});
</script>
</body>
</html>
<?php

include("database/db_conection.php");

if(isset($_POST['btnApelido']))
{
    $user_email = $_SESSION['email'];
	$frase = $_POST['message'];
    $nome = $_POST['alterarApelido'];	
	

	$sql= "UPDATE users SET frase = '$frase', user_name ='".$nome."' WHERE user_email = '".$user_email."'";

	if(mysqli_query($dbcon, $sql)){
			echo "<script>alert('Dados alterados com sucesso! O sistema irá para tela de login.')</script>";
			echo "<script>window.open('logout.php','_self')</script>";
	} else {
			echo "<script>alert('ERROR: Não foi possível executar o comando $sql ", mysqli_error($link),"')</script>";
	}
}

?>