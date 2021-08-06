const slotsBox = document.querySelector(".slots")
const slot = document.querySelectorAll(".slot")
const balloon = document.querySelectorAll(".balloon-img")
const clearBtn = document.querySelector(".refresh-btn")

let index = 0

// добавление шаров в слот с ограничением до семи(больше 6 нельзя)
balloon.forEach(el => {
    el.addEventListener("click", () => {
        if (index < slot.length ){
            slot[index].src = el.src
            index++
        }

    })
})

// удаление каждого шарика
slotsBox.addEventListener("click", (e) => {
    e.target.src = "./images/standard_white.gif"
    index = 0
})

// удаление всех шаров
clearBtn.addEventListener("click", () => {
    slot.forEach((el, idx) => {
        el.src = "./images/standard_white.gif"
    })

})


// const circleBtn = document.querySelector(".circle")
// const colorBtn = document.querySelector(".color")
// const borderRadius = document.querySelector(".border__radius")
// const closeBtn = document.querySelector(".close")
// const element = document.querySelector(".element")
//
//
// circleBtn.addEventListener("click", () => {
//     element.classList.toggle("do__circle")
// })
//
// colorBtn.addEventListener("click", () => {
//     element.classList.toggle("do__red")
// })
//
// borderRadius.addEventListener("click", () => {
//     element.classList.toggle("do__border-radius")
// })
//
// closeBtn.addEventListener("click", () => {
//     element.classList.toggle("do__invisible")
// })

