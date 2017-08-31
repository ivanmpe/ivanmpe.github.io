<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!-- This file has been downloaded from Bootsnipp.com. Enjoy! -->
    <title>Profile Box</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
    <style type="text/css">
        *{
			font-family: 'Open Sans', sans-serif;
		}



		body {
			font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
			font-size: 14px;
			line-height: 1.42857143;
			
			background-color: #F1F1F1;
		}


		.header{
			color : #808080;
			margin-left:0%;
			margin-top:30px;
		}



		@media (max-width: 767px) {
			.header{
				text-align : center;
			}
			
			.nav{
				margin-top : 30px;
			}
		}
    </style>
	
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</head>
<body>
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

<div class="container" style="margin-top: 20px; margin-bottom: 20px;">
	<div class="row panel">		
        <div class="col-md-8  col-xs-12">         
           <div class="header">
                <h1>Bem Vindo(a), <?php echo $_SESSION['nome']; ?></h1>
                <h4><?php echo $_SESSION['email']; ?></h4>
                <span>"<?php echo $_SESSION['frase']; ?>"</span>
				<p>
           </div>
        </div>
    </div>   
    
</div>

<script type="text/javascript">

</script>
</body>
</html>
