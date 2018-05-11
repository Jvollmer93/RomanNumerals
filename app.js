"use strict";
let promptNumber = prompt("Please enter a value to be converted to Roman Numerals", 0);
let romanNumeralArray = new Array(); 
function toRomanNumeral(value)
{
	while(value>0)
	{
		if(value>=1000)
		{
			romanNumeralArray.push("M");
			value = value - 1000;
		}
		else if(value>=900)
		{
			romanNumeralArray.push("CM");
			value = value - 900;
		}
		else if(value>=500)
		{
			romanNumeralArray.push("D");
			value = value - 500;
		}
		else if(value>=400)
		{
			romanNumeralArray.push("CD");
			value = value - 400;
		}
		else if(value>=100)
		{
			romanNumeralArray.push("C");
			value = value - 100;
		}
		else if(value>=90)
		{
			romanNumeralArray.push("XC");
			value = value - 90;
		}
		else if(value>=50)
		{
			romanNumeralArray.push("L");
			value = value - 50;
		}
		else if(value>=40)
		{
			romanNumeralArray.push("XL");
			value = value - 40;
		}
		else if(value>=10)
		{
			romanNumeralArray.push("X");
			value = value - 10;
		}
		else if(value>=9)
		{
			romanNumeralArray.push("IX");
			value = value - 9;
		}
		else if(value>=5)
		{
			romanNumeralArray.push("V");
			value = value - 5;
		}
		else if(value>=4)
		{
			romanNumeralArray.push("IV");
			value = value - 1;
		}
		else
		{
			romanNumeralArray.push("I");
			value--;
		}
	}

}

toRomanNumeral(promptNumber);
console.log(promptNumber + " = " + romanNumeralArray.join(""));