const closeBtn = document.querySelector(".closebtn")
const menuBtn = document.querySelector(".hamburger")
const navBar = document.querySelector(".navbar")

menuBtn.addEventListener("click",()=>{
  navBar.classList.add("open")
  closeBtn.classList.add("open")
  menuBtn.classList.add("close")
})
closeBtn.addEventListener('click',()=>{
  navBar.classList.remove("open")
  closeBtn.classList.remove('open')
  menuBtn.classList.remove("close")
})
const project =  document.getElementById("project")
const modal = document.querySelector('.modal')
// const projectInfo = document.querySelectorAll('.bus')
project.addEventListener('click',(e)=>{
modal.style.display = "block"
  // console.log(e);
})
const radioBtns = document.querySelectorAll(".select")
radioBtns.forEach(radio=>{
radio.addEventListener('click',(e)=>{
  let radios =  e.target.classList[1]
  let wrapBox = e.target.parentElement.parentElement.parentElement.parentElement
  let projectInfo = wrapBox.children[1].classList
  if(radios ==="can"){
    console.log('can');
  }
  if(radios === "can2"){ console.log("can2"); }
  if(radios === "can3"){ console.log("can3"); }
  console.log(radios);
})
})