<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br">
<head>
    <meta charset="utf-8">
    <link type="text/css" rel="stylesheet" href="bootstrap-3.2.0-dist/css/bootstrap.css">
    <title>Criar conta</title>
</head>
<style>
	body {
			font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
			font-size: 14px;
			line-height: 1.42857143;
			
			background-color: #F1F1F1;
		}
    .login-panel {
        margin-top: 150px;

</style>
<body>

<?php
include "includes/barra_superior.php";
?>

<div class="container"><!-- container class is used to centered  the body of the browser with some decent width-->
    <div class="row"><!-- row class is used for grid system in Bootstrap-->
        <div class="col-md-4 col-md-offset-4"><!--col-md-4 is used to create the no of colums in the grid also use for medimum and large devices-->
            <div class="login-panel panel panel-success">
                <div class="panel-heading">
                    <h3 class="panel-title">Criar conta</h3>
                </div>
                <div class="panel-body">
                    <form role="form" method="post" action="registration.php">
                        <fieldset>
                            <div class="form-group">
                                <input class="form-control" placeholder="Nome de Usuário" name="name" type="text" autofocus>
                            </div>

                            <div class="form-group">
                                <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus>
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Senha" name="pass" type="password" value="">
                            </div>


                            <input class="btn btn btn-success btn-block" type="submit" value="Criar" name="register" >

                        </fieldset>
                    </form>
                    <center><b>Já é registrado ?</b> <br></b><a href="login.php">Logue aqui</a></center><!--for centered text-->
                </div>
            </div>
        </div>
    </div>
</div>

</body>

</html>

<?php

include("database/db_conection.php");//make connection here
if(isset($_POST['register']))
{
    $user_name=$_POST['name'];//here getting result from the post array after submitting the form.
    $user_pass=$_POST['pass'];//same
    $user_email=$_POST['email'];//same


    if($user_name=='')
    {
        //javascript use for input checking
        echo"<script>alert('Por favor, coloque um nome')</script>";
exit();//this use if first is not work then other will not show
    }

    if($user_pass=='')
    {
        echo"<script>alert('Por favor, coloque uma senha')</script>";
exit();
    }

    if($user_email=='')
    {
        echo"<script>alert('Por favor, coloque um email')</script>";
    exit();
    }
//here query check weather if user already registered so can't register again.
    $check_email_query="select * from users WHERE user_email='$user_email'";
    $run_query=mysqli_query($dbcon,$check_email_query);

    if(mysqli_num_rows($run_query)>0)
    {
echo "<script>alert('Email $user_email já existe no banco de dados, Por favor, tente outro!')</script>";
exit();
    }
//insert the user into the database.
    $insert_user="insert into users (user_name,user_pass,user_email) VALUE ('$user_name','$user_pass','$user_email')";
    if(mysqli_query($dbcon,$insert_user))
    {
        echo"<script>window.open('default.php','_self')</script>";
    }

}

?>