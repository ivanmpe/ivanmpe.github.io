<!DOCTYPE html>
<?php
session_start();

if(!$_SESSION['email'])
{

    header("Location: login.php");//redirect to login page to secure the welcome page without login access.
}

?>
<html lang="pt-br">

<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta charset="utf-8">
  <title>Cadastro de Alunos</title>
</head>
<body>

<?php
include "includes/barra_menu.php";
?>

<!--formden.js communicates with FormDen server to validate fields and submit via AJAX -->
<script type="text/javascript" src="https://formden.com/static/cdn/formden.js"></script>

<!-- Special version of Bootstrap that is isolated to content wrapped in .bootstrap-iso -->
<link rel="stylesheet" href="https://formden.com/static/cdn/bootstrap-iso.css" />

<!-- Inline CSS based on choices in "Settings" tab -->
<style>.bootstrap-iso .formden_header h2, .bootstrap-iso .formden_header p, .bootstrap-iso form{font-family: Arial, Helvetica, sans-serif; color: black}.bootstrap-iso form button, .bootstrap-iso form button:hover{color: white !important;} .asteriskField{color: red;}</style>

<!-- HTML Form (wrapped in a .bootstrap-iso div) -->
<div class="bootstrap-iso">
 <div class="container-fluid">
  <div class="row">
   <div class="col-md-6 col-sm-6 col-xs-12">
    <div class="formden_header">
     <h2>
      Cadastro de Alunos
     </h2>
     <p>
      Entre com os dados cadastrais do aluno. Os campos com * s&atilde;o obrigat&oacute;rios.
     </p>
    </div>
    <form action="https://formden.com/post/X3w48biy/" method="post">
     <div class="form-group ">
      <label class="control-label requiredField" for="name">
       Nome Completo
       <span class="asteriskField">
        *
       </span>
      </label>
      <input class="form-control" id="name" name="name" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label requiredField" for="name1">
       INEP do Aluno
       <span class="asteriskField">
        *
       </span>
      </label>
      <input class="form-control" id="name1" name="name1" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label requiredField" for="nascimento">
       Nascimento
       <span class="asteriskField">
        *
       </span>
      </label>
      <input class="form-control" id="nascimento" name="nascimento" placeholder="DD/MM/YYYY" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select">
       Sexo
      </label>
      <select class="select form-control" id="select" name="select">
       <option value="Masculino">
        Masculino
       </option>
       <option value="Feminino">
        Feminino
       </option>
       <option value="N&atilde;o Informado">
        N&atilde;o Informado
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select7">
       Ra&ccedil;a
      </label>
      <select class="select form-control" id="select7" name="select7">
       <option value="First Choice">
        First Choice
       </option>
       <option value="Second Choice">
        Second Choice
       </option>
       <option value="Third Choice">
        Third Choice
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select1">
       Bolsa Escola
      </label>
      <select class="select form-control" id="select1" name="select1">
       <option value="N&atilde;o">
        N&atilde;o
       </option>
       <option value="Sim">
        Sim
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name3">
       Nome da M&atilde;e
      </label>
      <input class="form-control" id="name3" name="name3" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name4">
       Nome do Pai
      </label>
      <input class="form-control" id="name4" name="name4" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name5">
       Respons&aacute;vel
      </label>
      <input class="form-control" id="name5" name="name5" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name6">
       Telefone
      </label>
      <input class="form-control" id="name6" name="name6" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name7">
       Celular
      </label>
      <input class="form-control" id="name7" name="name7" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name8">
       Rua
      </label>
      <input class="form-control" id="name8" name="name8" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name9">
       Numero
      </label>
      <input class="form-control" id="name9" name="name9" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name10">
       Complemento
      </label>
      <input class="form-control" id="name10" name="name10" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name11">
       CEP
      </label>
      <input class="form-control" id="name11" name="name11" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select2">
       Municipio
      </label>
      <select class="select form-control" id="select2" name="select2">
       <option value="Fortaleza">
        Fortaleza
       </option>
       <option value="Maracanau">
        Maracanau
       </option>
       <option value="Pacatuba">
        Pacatuba
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select3">
       Bairro
      </label>
      <select class="select form-control" id="select3" name="select3">
       <option value="First Choice">
        First Choice
       </option>
       <option value="Second Choice">
        Second Choice
       </option>
       <option value="Third Choice">
        Third Choice
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select8">
       Zona de Resid&ecirc;ncia
      </label>
      <select class="select form-control" id="select8" name="select8">
       <option value="Rural">
        Rural
       </option>
       <option value="Urbana">
        Urbana
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select4">
       Nacionalidade
      </label>
      <select class="select form-control" id="select4" name="select4">
       <option value="First Choice">
        First Choice
       </option>
       <option value="Second Choice">
        Second Choice
       </option>
       <option value="Third Choice">
        Third Choice
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select5">
       Pa&iacute;s
      </label>
      <select class="select form-control" id="select5" name="select5">
       <option value="First Choice">
        First Choice
       </option>
       <option value="Second Choice">
        Second Choice
       </option>
       <option value="Third Choice">
        Third Choice
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select6">
       Naturalidade
      </label>
      <select class="select form-control" id="select6" name="select6">
       <option value="First Choice">
        First Choice
       </option>
       <option value="Second Choice">
        Second Choice
       </option>
       <option value="Third Choice">
        Third Choice
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name12">
       Fone
      </label>
      <input class="form-control" id="name12" name="name12" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name13">
       Celular
      </label>
      <input class="form-control" id="name13" name="name13" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label requiredField" for="name14">
       Email
       <span class="asteriskField">
        *
       </span>
      </label>
      <input class="form-control" id="name14" name="name14" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name15">
       Facebook
      </label>
      <input class="form-control" id="name15" name="name15" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name16">
       Instagram
      </label>
      <input class="form-control" id="name16" name="name16" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name17">
       CPF
      </label>
      <input class="form-control" id="name17" name="name17" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name18">
       RG
      </label>
      <input class="form-control" id="name18" name="name18" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name19">
       Data de Exp.
      </label>
      <input class="form-control" id="name19" name="name19" placeholder="DD/MM/YYYY" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name20">
       Carteira de Estudante
      </label>
      <input class="form-control" id="name20" name="name20" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name21">
       Data de Validade
      </label>
      <input class="form-control" id="name21" name="name21" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name22">
       Carteira de Trabalho
      </label>
      <input class="form-control" id="name22" name="name22" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name23">
       S&eacute;rie
      </label>
      <input class="form-control" id="name23" name="name23" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name24">
       Data de Exp.
      </label>
      <input class="form-control" id="name24" name="name24" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name25">
       CNH
      </label>
      <input class="form-control" id="name25" name="name25" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name26">
       Data de Exp.
      </label>
      <input class="form-control" id="name26" name="name26" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="name27">
       NIS
      </label>
      <input class="form-control" id="name27" name="name27" type="text"/>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select9">
       AEE
      </label>
      <select class="select form-control" id="select9" name="select9">
       <option value="N&atilde;o Recebe">
        N&atilde;o Recebe
       </option>
       <option value="Recebe">
        Recebe
       </option>
       <option selected="selected" value="">
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select10">
       Faz Est&aacute;gio?
      </label>
      <select class="select form-control" id="select10" name="select10">
       <option value="N&atilde;o">
        N&atilde;o
       </option>
       <option value="Sim">
        Sim
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select11">
       Faz Mais Educa&ccedil;&atilde;o?
      </label>
      <select class="select form-control" id="select11" name="select11">
       <option value="N&atilde;o">
        N&atilde;o
       </option>
       <option value="Sim">
        Sim
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select13">
       Aluno EJOVEM?
      </label>
      <select class="select form-control" id="select13" name="select13">
       <option value="N&atilde;o">
        N&atilde;o
       </option>
       <option value="Sim">
        Sim
       </option>
      </select>
     </div>
     <div class="form-group ">
      <label class="control-label " for="select12">
       Usa Transporte Escolar?
      </label>
      <select class="select form-control" id="select12" name="select12">
       <option value="Sim">
        Sim
       </option>
       <option value="N&atilde;o">
        N&atilde;o
       </option>
      </select>
     </div>
     <div class="form-group">
      <div>
       <input name="_honey" style="display:none" type="text"/>
       <button class="btn btn-primary " name="submit" type="submit">
        Cadastrar
       </button>
      </div>
     </div>
    </form>
   </div>
  </div>
 </div>
</div>


</body>

</html>