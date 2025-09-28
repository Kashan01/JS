const starttimer = document.querySelector("#start-id")
const endtimer = document.querySelector("#end-id")  // Fixed ID
const showtime = document.querySelector("#showTime")
let interval;

let timer = 0

starttimer.addEventListener("click", ()=>{
    timer = parseInt(document.querySelector("#timer").value)
    
    clearInterval(interval)
    interval = setInterval(() => {  
        if(timer > 0){
            showtime.innerText = timer
            timer = timer - 1
        } 
        else if(timer==0){
            document.querySelector("#timer").value=''
            showtime.innerText = "Times up"
            clearInterval(interval)
        }
    }, 1000)
})

endtimer.addEventListener("click", ()=>{
    clearInterval(interval)
    showtime.innerText = "Stopped!.."
})