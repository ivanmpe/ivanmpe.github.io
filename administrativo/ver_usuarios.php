<?php
session_start();

if(!$_SESSION['email'])
{

    header("Location: login.php");//redirect to login page to secure the welcome page without login access.
}

?>
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br">
<head>
    <meta charset="UTF-8">
    <link type="text/css" rel="stylesheet" href="bootstrap-3.2.0-dist/css/bootstrap.css"> <!--css file link in bootstrap folder-->
    <title>Usuários - SysAcadêmico</title>
</head>
<style type="text/css">
        @media (min-width: 768px) {
    .dropdown:hover .dropdown-menu {
        display: block;
    }
	}
    </style>


<body>

	<?php
		include "includes/barra_menu.php";
	?>
	<div class="col-xs-12">
		<?php
			if(empty($_GET['updated']))
			{
				//echo "Por favor, informe algum parâmetro para a pesquisa!";
			}else
			{
				$informacao = $_GET['updated']; // Recebendo o valor vindo do link
		?>
				<div class="alert alert-success alert-normal-success">
					<button type="button" class="close">×</button>
					<?php echo ("$informacao") ?>
				</div>
		<?php
			} 
		?>
		<div class="container-fluid">
			<div id="fixed_navbar_header" class="navbar-header">
			<h3 style="margin-bottom: 20px;">Usuários</h3></div>
			<div id="fixed-navbar-collapse" style="margin-top: 10px;"><a class="btn btn-primary navbar-btn pull-right" data-confirm="Suas alterações não serão salvas, deseja mesmo cancelar?" href="/administrativo/registration" id="cancel_form" style="margin-right: 10px;">Cadastrar</a>
			</div>
		</div>
		<div class="panel panel-default">
			
			<div class="panel-body">
				Para excluir um usuário aperte o botão vermelho e aperte azul para editar
				<div style="color: #428bca; padding-top: 10px;">
					<!-- <span class="glyphicon glyphicon-info-sign"></span> Dica: Passe o mouse sobre cada status para obter mais informações -->
				</div>
			</div>
			<div class="table"><!--this is used for responsive display in mobile and other devices-->

			<table class="table" style="table-layout: fixed">
				<thead>

				<tr>

					<th>ID (id)</th>
					<th>Nome (user_name)</th>
					<th>E-mail (user_email)</th>
					<th>Senha (user_pass)</th>
					<th>Frase (frase)</th>
					<th><span class="glyphicon glyphicon-cog"></span></th>
				</tr>
				</thead>

				<?php
				include("database/db_conection.php");
				$view_users_query="select * from users";//select query for viewing users.
				$run=mysqli_query($dbcon,$view_users_query);//here run the sql query.

				while($row=mysqli_fetch_array($run))//while look to fetch the result and store in a array $row.
				{
					$user_id=$row[0];
					$user_name=$row[1];
					$user_pass=$row[2];
					$user_email=$row[3];
					$frase=$row[4];
				?>

				<tr>
		<!--here showing results in the table -->
					<td><?php echo $user_id;  ?></td>
					<td><?php echo $user_name;  ?></td>
					<td><?php echo $user_email;  ?></td>
					<td><?php echo $user_pass;  ?></td>
					<td><?php echo $frase;  ?></td>
					<td>
					<a href="visualizar.php?id=<?php echo $user_id ?>"><button class="btn btn-warning "><span class="glyphicon glyphicon-search"></button></a>
					<a href="editar.php?id=<?php echo $user_id ?>"><button class="btn btn-primary "><span class="glyphicon glyphicon-pencil"></button></a>
					<a href="delete.php?del=<?php echo $user_id ?>"><button class="btn btn-danger"><span class="glyphicon glyphicon-trash"></button></a>

					</td>

				</tr>

				<?php } ?>

			</table>
			</div>
		</div>
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
