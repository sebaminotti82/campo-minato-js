let button = document.querySelector('#button')

button.addEventListener('click',function(){

    let title = document.querySelector('#title')
    title.style.display='none'

let pcnumbers= []

let y = pcnumbers.length
console.log(pcnumbers);
     
    let bombe = document.querySelector('#bombe').value
    

    switch (bombe) {
        case '1':bombe=16
            alert('hai scelto di giocare con 16 bombe su 100 numeri')
            break;
        case '2':bombe=20
             alert('hai scelto di giocare con 20 bombe su 100 numeri')
            break;
        case '3':bombe=50
            alert('hai scelto di giocare con 50 bombe su 100 numeri')
            break;
    
        default:
            break;
    }

while (y < bombe) {
    let pcNum = Math.floor(Math.random()*(1,100)+1)
    ;

        if(!pcnumbers.includes(pcNum)){
            pcnumbers.push(pcNum)
        } else {
            y--
        }
    y++
}


let numeri = []

let i = numeri.length



while (i < 100) {
    
    let singleNum = Math.floor(Math.random()*(1,100)+1)
       if(!numeri.includes(singleNum)){
           numeri.push(singleNum)
       } else {
           i--
       }
       i++
     
       
     
}   
      
let numeriUsciti =[]   
 let livello = document.querySelector('#livello').value
 livello = livello.toLowerCase()

       switch (livello) {
           case 'facile':livello=10
                  alert('hai scelto facile !! non ami proprio le sfide è !!  dovrai solo inserire 10 numeri a caso senza prendere nessun numero bomba')
               
               break;
           case 'medio':livello=20
                  alert('livello medio bravo/a , ti piace osare ma non troppo ! inserisci 20 numeri senza trovare un numero bomba ed avrai vinto')
               
               break;
           case 'difficile':livello=40
                  alert('wow livello difficile ben 40 numeri su 100 vediamo se riuscirai ad inserirli tutti senza colpire un numero bomba')
               
               break;
       
           default:
               break;
       }

console.log(numeriUsciti);  
const newNumeri = numeri.map((element)=>{

        let container = document.querySelector('#containerGame')
        let div= document.createElement('div')
        div.className='box'
        container.appendChild(div)
  
             div.append(element)

      let c = numeriUsciti.length
       let numero
      
      while (c < livello) {
            
         numero = element
        
         c++
      }

          

             div.addEventListener('click',function(){

                
                if(!numeriUsciti.includes(numero)){
                      if(pcnumbers.includes(numero)){
                                    alert('boom 💣💣💣💣💣💣💣💣💣💣   hai perso,  partita finita !Hai indovinato:'+ " "+numeriUsciti.length+""+"numeri su"+""+livello)
                                    div.className='red'
                                    
                                    let restart = prompt('vuoi rigiocare ?').toLowerCase()
                                    if(restart=='si'){
                                        location.reload()
                                    } else if(restart != 'si'){
                                        alert(' hai scelto di non rigiocare il gioco si riavvierà e potrai chiudere la pagina ! ')
                                        location.reload()
                                    }
                                    
                                   div.className.remove('green')

                                   
                                   
                          
                 
                          
                      }
                      
                    numeriUsciti.push(numero)
                        div.className='green'
                        div.style.border='3px solid lime'
                        div.style.fontFamily='monospace'
                        div.style.color='white'
                } else{
                    i--
                    alert('numero gia presente ⛔⛔⛔⛔')
                }

                      
                    if(numeriUsciti.length == livello){
                 alert('hai vinto bravo hai indovinato '+ ""+ numeriUsciti.length+ " " + 'numeri e sono'+ " "+numeriUsciti)
                 let restart = prompt('vuoi rigiocare ?')
                 if(restart=='si'){
                     location.reload()
                 } else if(restart != 'si'){
                     alert(' hai scelto di non rigiocare il gioco si riavvierà e potrai chiudere la pagina ! ')
                     location.reload()
                 }
                 
                 
             } 
             
             })

            
        
       })







})




     



