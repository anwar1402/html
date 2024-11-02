var color=["violet","red","green","orange"]
var index=0;
var para=document.getElementById('p1')
let id=setInterval(()=>{
 para.style.backgroundColor=color[index]
  
  if(index==3){
    clearInterval(id)
  }
  index++;
},1000)