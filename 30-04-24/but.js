 
var shape = document.getElementById("shape");
var res = document.getElementById("display");

function red(){
    shape.style.backgroundColor = "red";
}

function blue() {
  shape.style.backgroundColor = "blue";
}

var count = 0;
function clicks(){
  count = count + 1;
  res.innerText = "count = " + count;
  if (count %  5 == 0) {
    shape.style.height = "100px";
    shape.style.width = "100px";
    shape.style.borderRadius = "100%";
  }else if ( count % 2 == 0){
    shape.style.height = "100px";
    shape.style.width = "100px";
    shape.style.borderRadius = "0";
  }else{
    shape.style.height = "100px";
    shape.style.width = "200px";
    shape.style.borderRadius = "0";
  }

}




function reset(){
    count = 0;
    res.innerText = "count = " + 0 ;
    shape.style.height = "100px";
    shape.style.width = "200px";
    shape.style.borderRadius = "0";
}

