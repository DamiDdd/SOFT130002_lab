<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)
$year = 2020;
$days = 365;
$time = mktime(20,20,20,2,1,$year);//取得一个日期的 Unix 时间戳;
if (date("t",$time)==29){ //格式化时间，并且判断2月是否是29天；
    echo $year . "是闰年" . "<br>";//是29天就输出时闰年；
    $days = $days+1;
}else{
    echo $year."不是闰年" . "<br>";
}
$remaining = $days - date("z");
echo "There are ". $remaining." days left";
echo "<br>"; //notice we must echo tags in php.
?>
</body>
</html>