let input = document.querySelector('#inputbox')

let buttons = document.querySelectorAll('button')

let string = ''

let arr = Array.from(buttons)

arr.forEach(button => {
    button.addEventListener('click',function(e){
          if(e.target.innerHTML == '='){
            string = eval(string)
            input.value=string
          }
          else if
            (e.target.innerHTML=="AC"){
                string=""
                input.value=string;
            }
          else if
            (e.target.innerHTML=="DEL"){
                input.value=string.substring(0,string.length-1)
            }
         else{
         string += e.target.innerHTML;
         input.value=string;
         }


    })
})