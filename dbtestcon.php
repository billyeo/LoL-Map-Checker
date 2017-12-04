<? php
//Script to connect to database


$server="us-cdbr-iron-east-05.cleardb.net";
$username="be13624714f04b";
$password="3b5e47af";
$db="heroku_fc399388bb27294";
//$tablename="lolusers";
//$column="matchid";

$conn = new mysqli($server, $username, $password, $db)
//mysql_connect($hostname,$username,$password);
//mysql_select_db($dbname);

//test to access tables to check for data matchid column and print out data
/*
$query="SELECT * FROM $tablename";
$data=mysql_query($query);

if($result)
{
	while($row=mysql_fetch_array($data))
	{
		$user=$row["$column"];
		echo $user;
	}
}
*/

?>
