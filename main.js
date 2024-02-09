
// devi.append(div)  //to add elemet in section throught //to ic

// let div = document.createElement('div') // to make add in div
// div.className = 'card' // toa add class
// let p =  document.createElement('p') // to add p tag
// p.innerText = 'log in sucessfull'
// let btn = document.createElement('button')
// btn.id = 'btn' //to give id
// btn.innerText = 'X' // to add text in btn
// div.append(p,btn) // to in div add child element

// login.addEventListener('click',showNotification)
// function showNotification(message,color){
    
//     let div = document.createElement('div') // to make add in div
//     div.className = 'card' // toa add class
//     let p =  document.createElement('p') // to add p tag
//     div.style.borderBottom = '5px solid  ${color}'  ////   ////change border naem
//     p.innerText = message
//     let btn = document.createElement('button')
//     btn.id = 'btn' //to give id
//     btn.innerText = 'X' // to add text in btn
//     div.append(p,btn) // to in div add child element
//     devi.append(div)  //to add elemet in section throught //to ic


// }

// showNotification('login successfull' , 'green') // //to //sff dynamic color


// login.addEventListener('click',()=>{
//     if (email.value ==' '|| passward.value== ' '){
//         showNotification('provide value','blue')
//     }else{
//         showNotification('login sucessfull','yellow')
//     }
// })


function showNotification(message,color,top){
    let div=document.createElement('div')//<div></div>
    div.className='card'
    div.style.borderBottom=`5px solid ${color}`
    let p=document.createElement('p')
    p.innerText=message
    let btn=document.createElement('button')
    btn.id='btn'
    btn.innerText='X'
    div.append(p,btn)
    devi.append(div)
    div.style.position = `relative`
    div.style.top = `${top}%`
    div.style.left = `2rem`
    div.style.width =`20rem`
    div.style.height =`20rem`

    setTimeout(()=>{
        div.remove()
    },2000)
  }
  
  
  
  
  login.addEventListener('click',()=>{
      if(email.value==''||password.value==''){
  showNotification('provide value', 'red',10)
      }else{
          showNotification('login successful', 'green',20)
      }
  })