<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Сколько всего</title>
	<link rel="stylesheet" href="css.css">
</head>
<body>
	<form id="TheForm" method="post" target="TheWindow">
		<input type="hidden" name="q" value="" />
	</form>
</body>
	<script src="js/libs/jquery.js"></script>
	<script> var blist = <? require_once('js/blist.json') ?> </script>
	<script> var manga = <? require_once('js/titles.json') ?> </script>
	<script src="js/js.js"></script>
</html>