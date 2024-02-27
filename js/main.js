document.querySelector(".header .btn").addEventListener("click", ()=>{
  document.querySelector(".landing .imgs").classList.toggle("active")
})
document.querySelector(".header .bars i").addEventListener("click", ()=>{
  document.querySelector(".landing .links").classList.toggle("active")
})
setTimeout(()=>{
  document.querySelector(".landing .imgs").classList.add("active")
},0)
let client = document.documentElement.clientHeight
let overviewSec= document.querySelector(".overview .info")
let planningSec= document.querySelector(".planning .info")
window.addEventListener("scroll", ()=>{
  let scrollTop = document.documentElement.scrollTop
  if(scrollTop>(overviewSec.offsetTop-(client /1.1))){
    overviewSec.classList.add("active")
  }
  if(scrollTop>(planningSec.offsetTop-(client /1.1))){
    planningSec.classList.add("active")
  }
})
let cardsCon = document.querySelector(".testimonial .cards")
let cards = document.querySelectorAll(".testimonial .cards .item")
let bulletsCon = document.querySelector(".testimonial .bullets")
let bullets = document.querySelectorAll(".testimonial .bullets span")

bullets.forEach((e,i)=>{
  e.addEventListener("click", (event)=>{
    bullets.forEach(bullet=>bullet.classList.remove("active"))
    e.classList.add("active")
    cardsCon.className=`cards cards${i+1}`
    cards.forEach((card, cardI)=>{
      card.classList.remove("active")
      if(cardI==i){
        card.classList.add("active")
      }
    })
  })
})
cards.forEach((e, i)=>{
  e.addEventListener("click", (event)=>{
    cards.forEach(card=>card.classList.remove("active"))
    e.classList.add("active")
    cardsCon.className=`cards cards${i+1}`
    bullets.forEach((bullet, bulletI)=>{
      bullet.classList.remove("active")
      if(bulletI==i){
        bullet.classList.add("active")
      }
    })
  })
})