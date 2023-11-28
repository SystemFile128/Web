
<?php
header("Access-Control-Allow-Origin:*");
$name = $_POST['name'];
$rollno = $_POST['rollno'];
$sub1 = $_POST['marks1'];
$sub2 = $_POST['marks2'];
$sub3=$_POST['marks3'];
$sub4 = $_POST['marks4'];
$total = $sub1+$sub2+$sub3+$sub4;
$percentage = ($total/400)*100;
//$conn = new mysqli("localhost","root","","vit")// vit is database name
//$sql = "insert into marks values($name,$sub1,$sub2,$sub3,$sub4,$total)";
//echo mysql($name,$rollno,$sub1,$sub2,$sub3,$sub4);
$conn = new mysqli("localhost","root","","vit");
$result = $conn->query("insert into marks values('$name',$sub1,$sub2,$sub3,$sub4,$total)");
echo $percentage;

?>


