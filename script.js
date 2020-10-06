var buttonsDelete = document.querySelectorAll(".btn-danger")
var buttonsPlus = document.querySelectorAll(".btn-outline-success")
var buttonsMinus = document.querySelectorAll(".btn-outline-danger")
var totalPrice = document.querySelector("#total")
var buttonsHeart = document.querySelectorAll(".fa-heart")

Array.from(buttonsDelete).map((el) =>{
    el.addEventListener("click",() =>{
        el.parentElement.parentElement.parentElement.parentElement.remove();
    })
})

Array.from(buttonsPlus).map((el) =>{
    el.addEventListener("click",() =>{
        el.nextElementSibling.innerHTML =
         parseInt(el.nextElementSibling.innerHTML) + 1
         var price = el.parentElement.previousElementSibling.innerHTML.replace("dt","")
         totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(price) + "dt"
    })
})

Array.from(buttonsMinus).map((el) =>{
    el.addEventListener("click",() =>{
        if (el.previousElementSibling.innerHTML > 1){
            el.previousElementSibling.innerHTML =
         parseInt(el.previousElementSibling.innerHTML) - 1
         var price = el.parentElement.previousElementSibling.innerHTML.replace("dt","")
         totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - parseInt(price) + "dt"}
    })
})
Array.from(buttonsHeart).map((el) =>{
    el.addEventListener("click",() =>{
        el.classList.toggle("red")
    })
})