<?php

	include("database/db_conection.php");
	
	$id = $_POST['id']; // Recebendo o valor id do formulário
	$nome = $_POST['nome'];// Recebendo o valor nome do formulário
	$senha = $_POST['senha'];// Recebendo o valor senha do formulário
	$email = $_POST['email'];// Recebendo o valor email do formulário
	$frase = $_POST['frase'];// Recebendo o valor frase do formulário

	$update_query="UPDATE users SET frase = '$frase', user_name ='$nome', user_email = '$email', user_pass = '$senha' WHERE id = '$id'";//update query
	
	//$run=mysqli_query($dbcon,$update_query);
	
	if (mysqli_query($dbcon,$update_query)) {
		//javascript function to open in the same window
		echo "<script>window.open('ver_usuarios.php?updated=Usuario $nome atualizado com sucesso','_self')</script>";
	}else {
		echo "Erro ao atualizar os dados: " . mysqli_error($dbcon);
	}


?>