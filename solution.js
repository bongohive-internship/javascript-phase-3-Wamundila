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

//Question 2: For loop
	for(var i = 0; i < 16; i++)
	{
		if((i%2)>0)
		{
			console.log(i+" is Odd.")
		}
		else
		{
			console.log(i+" is Even");
		}
	}
 //Question 3: Sum multiples of 3 and 5 under 1000
 	//summing multiples of 3 under 1000
 	i = 1;
 	sumThree=0;
 	var prod3=0;
 	
 	while(prod3<1000)
 	{
 		prod3 = 3 * i;
 		if(prod3<1000)
 		{
 			sumThree += prod3;	
 		}
 		i+=1;
 	}
 	console.log("Sum of  multiples of 3 under 1000 is "+sumThree);
 	//summing the multiples of 5 under 1000
 	j = 1;
 	sumFive=0;
 	var prod5=0;
 	
 	while(prod5<1000)
 	{
 		prod5 = 3 * j;
 		if(prod5<1000)
 		{
 			sumFive += prod5;	
 		}
 		j+=1;
 	}
 	console.log("Sum of  multiples of 5 under 1000 is "+sumFive);
 	//Add both sums toger
 	var totalSum = sumThree + sumFive;
 	console.log("The sum of the multiples of 3 and 5 under 1000 is "+totalSum );
 	
 //Q4: Assign grade function
 
	 function assignGrade (score)
	 {
	 	// F = score from 0 to 49, D = score from 50 to 59, C = score from 60 to 69, B = score from 70 to 89, A = score from 90 to 100, 
	 	if(score<50)
	 	{
	 		return("F");
	 	}
	 	else if(score<60)
	 	{
	 		return("D");
	 	}
	 	else if(score<70)
	 	{	
	 		return("C");
	 	}
	 	else if(score<90)
	 	{
	 		return("B");
	 	}
	 	else
	 	{
	 		return("A");
	 	}
	 }
	 //examples of assignGrade function in use
	 console.log(assignGrade(25));
	 console.log(assignGrade(55));
	 console.log(assignGrade(75));

// Q5: Test  assignGrade function

	for(i=60;i<101;i++)
	{
		console.log("For "+i+", you got a "+assignGrade(i));
	}
