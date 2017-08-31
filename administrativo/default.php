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

    <title>
        Início - SysAcadêmico
    </title>
	<script src="http://formbuilder.online/assets/js/form-builder.min.js"></script>
		
</head>

<body>
<?php
include "includes/barra_menu.php";
?>

<div class="form-group col-xs-12" >

	<div class="alert alert-success alert-normal-success">
		<button type="button" class="close">×</button>
		Logado com Sucesso.
	</div>

	<!--<div class="alert alert-danger alert-normal-danger">
		<button type="button" class="close">×</button>
		Teste de Alert de Erro.
	</div>
	-->
	
	<?php
		//include "profile_box.php";
	?>
	
	<p>Adicionar novidades
	
	<h4><a href="logout.php">Logout aqui ou em sair</a> </h4>
	
	<form-template>
	<fields>
		<field subtype="text" type="text" name="text-1467688480179" label="Text Field" class="form-control text-input"></field>
		<field subtype="text" type="text" name="text-1467688535115" label="Text Field" class="form-control text-input"></field>
		<field subtype="text" type="text" name="text-1467688482917" label="Text Field" class="form-control text-input"></field>
	</fields>
</form-template>
	
</div>

<script type="text/javascript">
$(document).ready(function(){ 
     	$('.alert-autocloseable-success').hide();
		$('.alert-autocloseable-warning').hide();
		$('.alert-autocloseable-danger').hide();
		$('.alert-autocloseable-info').hide();


		$(document).on('click', '.close', function () {
			$(this).parent().hide();
    	});   
});

</script>

</body>
</html>

