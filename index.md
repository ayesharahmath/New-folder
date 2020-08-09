<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module2_Solution</title>
</head>
<link rel="stylesheet" href="style.css">

<body>
    <div class="container">
        <h2 class="mainheading">Our Menu</h2>
        <div class="contentbox">
            <div id="box1" class="box">
                <h3 class="subheading">Chicken</h3>
                <p class="contenttext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore voluptates unde reiciendis in, doloremque optio sit quibusdam consectetur voluptate eaque illo praesentium, sunt, molestiae hic quisquam facere. Fuga, reprehenderit!</p>
            </div>
            <div id="box2" class="box">
                <h3 class="subheading">Beef</h3>
                <p class="contenttext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore voluptates unde reiciendis in, doloremque optio sit quibusdam consectetur voluptate eaque illo praesentium, sunt, molestiae hic quisquam facere. Fuga, reprehenderit!</p>
            </div>
            <div id="box3" class="box">
                <h3 class="subheading">Sushi</h3>
                <p class="contenttext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore voluptates unde reiciendis in, doloremque optio sit quibusdam consectetur voluptate eaque illo praesentium, sunt, molestiae hic quisquam facere. Fuga, reprehenderit!</p>
            </div>
        </div>
    </div>
</body>

</html>






*{
	font-family: comic sans ms;
	margin:0;
	box-sizing: border-box;
}


h1{
	text-align:center;
	margin:20px 0px 40px 0px;
}	

body{

}



#chick-head{
	
	background-color: pink;
	
}

#beef-head{
	
	background-color: red;
	
	
}

#sushi-head{
	
	background-color: yellow;
	
	
}

h2{
	border-bottom:1px solid black;
	border-left:1px solid black;
	display: inline;
	text-align: right;
	float:right;
	padding:5px 30px 5px 30px ;
}



.para{
	padding: 10px;
	clear:both;
}

@media(min-width: 992px){
	#div1{
		background-color: lightgray;
		border:1px solid black;
		margin: 20px 20px 20px 20px;
		width: 30%;
		float:left;
	}
	#div2{
		background-color: lightgray;
		border:1px solid black;
		margin: 20px 20px 20px 20px;
		width: 30%;
		float:left;
	}
	#div3{
		background-color: lightgray;
		border:1px solid black;
		margin: 20px 20px 20px 20px;
		width: 30%;
		float:left;
	}
}

@media (min-width: 768px) and (max-width: 991px){
	#div1{
		background-color: lightgray;
		border:1px solid black;
		margin: 20px 20px 20px 20px;
		width: 45%;
		float:left;
		display: inline;
		position: relative;
	}
	#div2{
		background-color: lightgray;
		border:1px solid black;
		margin: 20px 20px 20px 20px;
		width: 45%;
		float:left;
		display: inline;
		position: relative;
	}
	#div3{
		background-color: lightgray;
		border:1px solid black;
		margin: 20px 20px 20px 20px;
		width: 45%;
		float:left;
		display: inline;
		position: relative;
	}

}

@media(max-width: 767px){
	#div1{
		background-color: lightgray;
		border:1px solid black;
		margin: 20px 20px 20px 20px;
		width: 100%;
		
	}
	#div2{
		background-color: lightgray;
		border:1px solid black;
		margin: 20px 20px 20px 20px;
		width: 100%;
	}
	#div3{
		background-color: lightgray;
		border:1px solid black;
		margin: 20px 220px 0px 20px;
		width: 100%;
	}
} 
