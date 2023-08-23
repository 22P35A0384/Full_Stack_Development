var a = "Hello World!   ";
document.write(a+a.length+"<br>");
 
var c = "Welcome To Java Script   ";
document.write(c+c.length+"<br>");

var b = 20;
document.write("Value b is: ",b+"<br>");

var d = "eswari   "
d += "likitha&"
d += "navya   "
document.write(d+d.length+"<br>")

var num = 10
var str = 'Gangadhar'
var float = 10.23
document.write(typeof(num),"<br>",typeof(str),"<br>",typeof(float),"<br>")
alert(num)
console.log(str)
document.write(float,"<br>")

var arr = [10 , "Gangadhar", 20]
document.write(arr,"<br>")
console.log(arr)
document.write(arr[1],"<br>",arr[0],"<br>",arr[2],"<br>","<br>")

var trainee = [{
	'name' : 'Gangadhar',
	'Roll_No' : '22P35A3084',
	'College' : 'ACET',
	'Branch' : 'Mech'
},
{
	'name' : 'eswari',
	'Roll_No' : '21P31A0225',
	'College' : 'ACET',
	'Branch' : 'EEE'
}]

document.write(trainee[0].name,"<br>");
document.write(trainee[0].Roll_No,"<br>");
document.write(trainee[0].College,"<br>");
document.write(trainee[0].Branch,"<br>","<br>");

document.write(trainee[1].name,"<br>");
document.write(trainee[1].Roll_No,"<br>");
document.write(trainee[1].College,"<br>");
document.write(trainee[1].Branch,"<br>");

for(let i = 0; i<trainee.length; i++){
	document.write((i+1)+". ")
	for(let j in trainee[i]){
		document.write(j+" : "+trainee[i][j]+"<br>"+"   ")
	}
	document.write("<br>")
}

for(var i = 0; i<trainee.length; i++){
	document.write((i+1)+". ")
	for (let j in trainee[i]){
		document.write(j+" : "+trainee[i][j]+"<br>")
		document.write(" ")
	}
	document.write("<br>")
}

document.write("<br>")

for (i=0;i<5; i++){
	document.write("Gangadhar"+"<br>"+"<br>")
}

var object = [{
	name : 'Gangadhar'
	rollno : '22P35A3084'
	clg : 'ACET'
	mail : '22p35a0384@acet.ac.in'
}]

