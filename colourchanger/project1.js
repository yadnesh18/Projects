const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    button.addEventListener('click',function(e){
         console.log(e)
         console.log(e.target)
         switch(e.target.id){
            case "Blue":
                body.style.backgroundColor ='#00A5E3'
                break;
            case "Red":
                body.style.backgroundColor ='#FF5768'
                break;
            case "DarkYellow":
                body.style.backgroundColor = '#f2342f'
                break;
            case "Orange":
                body.style.backgroundColor = '#FC6238'
                break;
            default:
                body.style.backgroundColor = '#212121'
                break;
         }
    })
})