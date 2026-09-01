function addParagraph()
{
  const para=document.createElement("p");
  para.innerText="This is new para";
  para.style.color="blue";
  const parent=document.getElementById("root");
  parent.appendChild(para);
}
const removeParagraph=()=>
{
  const para=document.querySelector("p");
  const parent=document.getElementById("root");
  parent.removeChild(para);
}
const removeallParagraph=()=>
{
  const para=document.querySelectorAll("p");
  const parent=document.getElementById("root");
  for(i of para){
  parent.removeChild(i);
  }
}