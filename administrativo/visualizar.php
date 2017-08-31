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
	<title>Visualizar</title>
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

<?php
	include("database/db_conection.php");

	$id = $_GET['id']; // Recebendo o valor vindo do link
	if (!$dbcon) // Verificando se existe conexão com o caminho mapeado
	{
		die('Erro ao conectar: ' . mysql_error()); // Caso o caminho esteja errado, o usuário ou a senha esteja errado, irá mostrar esta mensagem
	}

	$comando="select * from users WHERE id = '".$id."'";
	$resultado = mysqli_query($dbcon, $comando); // Há variável $resultado faz uma consulta em nossa tabela selecionando somente o registro desejado
	while($linha = mysqli_fetch_array($resultado)) //Já a instrução while faz um loop entre todos os registros e armazena seus valores na variável $linha
	{
?>

	<form class="col-md-12 form-horizontal" >
		<fieldset>
			<!-- Nome do Form -->
			<legend>Visualizar</legend>

			<input type="hidden" name="id" value="<?php echo $linha[0]; ?>" /> <!-- passando o valor da id em um campo oculto -->
			<p>Nome: <?php echo $linha[1]; ?>
			<p>Senha: <?php echo str_replace("2", "*", str_replace("1", "*", $linha[2])); ?>
			
			<p>Email: <?php echo $linha[3]; ?>
			<p>Frase: <?php echo $linha[4]; ?>
			<div class="form-group">
				<div class="col-md-4">
				<br>
				<input type="button" value="Voltar" class="btn btn-primary" onClick="JavaScript: window.history.back();">
				<!--<a href="javascript:history.back()">Voltar</a>-->
				</div>
			</div>
		<fieldset>
	</form>
	<?php
	}
?>
</body>
</html>