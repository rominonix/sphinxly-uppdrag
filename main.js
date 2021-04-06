const home = document.querySelector('#home')
const username = document.querySelector('#name')
const forgetMeButton = document.querySelector('#forget_me')
const greet = document.createElement('h1')

function checkUserInStorage() {    
    if(localStorage.getItem('name') === null){
        firstTimeUser()
    } else {
        userVisitAgain()
    }              
}

function firstTimeUser() {

    username.addEventListener('keyup', (event)=>{
        if(event.keyCode === 13){
            greeter("welcome")
            setTimeout(() => {
                greet.classList.add('hidden')
                randomImages()
                addForgetButton()
            }, 3000)
        }
    })
}

function userVisitAgain(){
    greeter("welcomeBack")
    setTimeout(() => {
        greet.classList.add('hidden')
        randomImages()
        addForgetButton()
    }, 4000)
}

function addForgetButton(){
    forgetMeButton.addEventListener('click', (event) =>{
        greeter("bye")
        localStorage.removeItem('name')
        greet.classList.add('hidden')
        forgetMeButton.classList.add('hidden')
        const removeImg = document.querySelector('img')
        removeImg.classList.add('hidden')
        })
}

function randomImages(){
    const images = [
        'https://images.unsplash.com/photo-1574357291933-69d4d62a2f6e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80',
        'https://images.unsplash.com/photo-1493744918582-d382478ec55e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80',
        'https://images.unsplash.com/photo-1524754271100-b16fa3ad4906?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1382&q=80',
        'https://images.unsplash.com/photo-1573456170607-b885fdc78985?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80',
        'https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80'
    ]
    const randomImg = Math.floor(Math.random() * images.length)
    const imgUrl = images[randomImg]
    const img = document.createElement('img')
    img.classList.add('fade-in')
    img.src = imgUrl
    const view = document.querySelector('main')
    view.appendChild(img)
    setTimeout(() => {
        forgetMeButton.classList.remove('hidden')
    }, 5000);

}

function greeter(greetType){
    if(greetType === "bye"){
        const bye = document.createElement('h1')
        const byeGreet = document.createTextNode(`Hej då ${localStorage.getItem('name')}`)
        bye.appendChild(byeGreet)
        document.querySelector('#greet-user').appendChild(bye)
        bye.classList.add('fade-in')
    } else if (greetType === "welcome"){
        home.classList.add('hidden')
        localStorage.setItem('name', username.value)
        const newGreet = document.createTextNode(`Hej på dig ${username.value}`)
        greet.appendChild(newGreet)
        document.querySelector('#greet-user').appendChild(greet)
    } else if (greetType === "welcomeBack"){
        home.classList.add('hidden')
        const welcomeAgain = document.createTextNode(`Välkommen tillbaka ${localStorage.getItem('name')}`)
        greet.appendChild(welcomeAgain)
        document.querySelector('#greet-user').appendChild(greet)
    }
}

checkUserInStorage()



