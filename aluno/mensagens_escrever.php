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
    <title>Escrever Mensagem - SysAcadêmico</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
	<link type="text/css" rel="stylesheet" href="bootstrap-3.2.0-dist/css/bootstrap.css"> <!--css file link in bootstrap folder-->
    <style type="text/css">
        
	.red{
		color:red;
    }

    </style>
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>

</head>
<body>
 
<?php
include "includes/barra_menu.php";
?>
 
<form class="col-xs-12 form-horizontal">
<fieldset>

<!-- Form Name -->
<legend>Enviar Mensagem</legend>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="selectbasic">Tipo de destinatário</label>
  <div class="col-md-4">
    <select id="selectbasic" name="selectbasic" class="form-control">
      <option value="1">Direção</option>
      <option value="2">Professor</option>
      <option value="">Aluno</option>
    </select>
  </div>
</div>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="selectturma">Turma</label>
  <div class="col-md-4">
    <select id="selectturma" name="selectturma" class="form-control">
    </select>
  </div>
</div>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="selectnome">Nome do destinatário</label>
  <div class="col-md-4">
    <select id="selectnome" name="selectnome" class="form-control">
    </select>
  </div>
</div>


<!--Caixa e botão -->
<div class="form-group">
	<label class="col-md-4 control-label" id="messageLabel" for="message">Mensagem </label>
	
	<div class="col-md-4"> 
	
	<textarea class="col-md-4 form-control input-sm " type="textarea" id="message" placeholder="Escreva aqui sua mensagem" maxlength="140" rows="7"></textarea>
	
	<span><p id="characterLeft" class="help-block ">Você passou do limite de caracteres</p></span>                    
    
    <button class="col-md-4 btn btn-success disabled" id="btnSubmit" name="btnSubmit" type="button" style="height:35px"> Enviar</button>

	</div>
    
</div>

</fieldset>
</form>


<script type="text/javascript">
$(document).ready(function(){ 
    $('#characterLeft').text('140 caracteres restantes');
    $('#message').keyup(function () {
        var max = 140;
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
