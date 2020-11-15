var process = document.getElementsByClassName("parent")[0];
function delay()
{
  process.style.display = "none";
  var p = document.getElementById("result");
  var number = parseInt(number)
  if(typeof(number) === "number")
  {
  if(phonenumber.value == "9810039503")
  {
  p.innerHTML = 'Your number is on Trace <a href="./report.html" id="track"> Click me for more detail</a>';
  p.style.fontSize = "32px";
  var a= document.querySelectorAll("#track")[0];
  a.style.color = "red";
  a.style.backgroundColor = "white";
  a.style.textDecoration = "none";
  }
  else {
    p.style.fontSize = "32px";
    p.innerHTML = 'Your Number is safe';
    p.style.color = "lightgreen";
  }
}
else
{
  p.style.fontSize = "32px";
  p.innerHTML = 'Enter valid 10 digit number';
  p.style.color = "red";
}
}
function locate(phonenumber)
{
  var process = document.getElementsByClassName("parent")[0];
  process.style.display = "block";
  setTimeout(delay , 1000*60);
}
