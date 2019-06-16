// solutions to the exercises mentioned in the readme should be in this file.

//Write a JavaScript program that accept two integers and display the larger.
	//Enter integers
	var int1 = prompt("Enter first integer.");
	var int2 = prompt("Enter Second integer.");
	//compare them
	if(int1 > int2)
	{
		alert("The larger integer is "+int1);
		console.log("The larger integer is "+int1);
	}
	else if(int1 < int2)
	{
		alert("The larger integer is "+int2);
		console.log("The larger integer is "+int2);
	}
	else
	{
		alert("The intergers are equal");
		console.log("The integers are equal");
	}
