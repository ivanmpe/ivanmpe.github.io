<?php
session_start();//session starts here

?>

<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br">
<head>
    <meta charset="utf-8">
    <link type="text/css" rel="stylesheet" href="bootstrap-3.2.0-dist/css/bootstrap.css">
    <title>Login</title>
</head>
<style>
	body {
			font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
			font-size: 14px;
			line-height: 1.42857143;
			color: #fff;
			background-color: #F1F1F1;
		}
	
    .login-panel {
        margin-top: 150px;

</style>

<body>

<?php
include "includes/barra_superior.php";
?>


<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="login-panel panel panel-success">
                <div class="panel-heading">
                    <h3 class="panel-title">Login</h3>
                </div>
                <div class="panel-body">
                    <form role="form" method="post" action="login.php">
                        <fieldset>
                            <div class="form-group"  >
                                <input class="form-control" placeholder="Matrícula" name="email" type="email" autofocus>
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Senha" name="pass" type="password" value="">
                            </div>


                             <input class="btn btn-success btn-block" type="submit" value="Entrar" name="login" >

                            <!-- Change this to a button or input when using this as a form -->
                            <input class ="btn btn-warning btn-block" type="submit" value="Recuperar senha" name="recuperar" >
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


</body>

</html>

<?php

include("database/db_conection.php");

if(isset($_POST['login']))
{
    $user_email=$_POST['email'];
    $user_pass=$_POST['pass'];

    $check_user="select * from users WHERE user_email='$user_email'AND user_pass='$user_pass'";

    $run=mysqli_query($dbcon,$check_user);
	$linha = mysqli_fetch_assoc($run);

    if(mysqli_num_rows($run))
    {
		echo "<script>window.open('default.php','_self')</script>";

        $_SESSION['email']=$user_email;//here session is used and value of $user_email store in $_SESSION.
		$_SESSION['nome']=$linha['user_name'];
		$_SESSION['frase']=$linha['frase'];
		$_SESSION['pass']=$user_pass;
		

    }
    else
    {
        echo "<script>alert('Email ou senha incorreta!')</script>";
    }
}
if(isset($_POST['recuperar'])){
	echo "<script>if (confirm('Deseja realmente recuperar sua senha?')) {
			window.open('recupera_senha.php','_self')
	} else {
	
	}</script>";
}
?>