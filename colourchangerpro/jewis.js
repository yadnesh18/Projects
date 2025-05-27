const randomcolour = function(){
    const hex = "0123456789ABCDEF"
    let colour = "#"
    for(let i=0;i<6;i++){
      colour += hex[Math.floor(Math.random() * 16)]
    }
    return colour
}
let Intervalid

const startchangingcolour = function(){
    if(!Intervalid){
    Intervalid=setInterval(changingcolour,1000)  
    }
    function changingcolour(){document.body.style.backgroundColor = randomcolour() 
}}

const stopchangingcolour = function(){
    clearInterval(Intervalid)
    Intervalid = null
     
}


document.querySelector('#start').addEventListener('click', startchangingcolour)


document.querySelector('#stop').addEventListener('click',stopchangingcolour)


