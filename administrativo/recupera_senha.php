<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br">
<head>
    <meta charset="utf-8">
    <!-- This file has been downloaded from Bootsnipp.com. Enjoy! -->
    <title>Recuperação de Senha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet">
    <style type="text/css">
        
    </style>
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
</head>
<style>
	body {
		font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
		font-size: 14px;
		line-height: 1.42857143;
		color: #fff;
		background-color: #F1F1F1;
	}
    .recovery-panel {
        margin-top: 150px;

</style>
<body>

<?php
include "includes/barra_superior.php";
?>

<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="recovery-panel panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">Recuperação de Senha</h3>
            </div>
            <div class="panel-body">
                <form role="form" method="post" action="recupera_senha.php">
                <fieldset>
					
                    <input id="textinput" name="textinput" placeholder="email@email.com" class="form-control input-md" type="text">
                    <span class="help-block">Insira o email cadastrado no sistema</span>       
                     
                    <button id="recupera" name="recupera" class="btn btn-success">Recuperar</button>
                    <button id="cancela" name="cancela" class="btn btn-danger">Cancelar</button>
                </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>


<script type="text/javascript">

</script>
</body>
</html>
<?php
if(isset($_POST['recupera'])){
	//Ação de recuperar
}
if(isset($_POST['cancela'])){
	echo "<script>window.open('default.php','_self')</script>";
}
?>
