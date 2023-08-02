

document.addEventListener('DOMContentLoaded', () => {
    const cardArray=[
         {
            name: 'bomb',
            img: 'images/bomb.png'
         },
         {
            name: 'white',
            img: 'images/white.png'
         },
         {
            name: 'white',
            img: 'images/white.png'
         },
         {
            name: 'bomb',
            img: 'images/bomb.png'
         },
         {
            name: 'white',
            img: 'images/white.png'
         },
         {
            name: 'bomb',
            img: 'images/bomb.png'
         },
         {
            name: 'white',
            img: 'images/white.png'
         },
         {
            name: 'bomb',
            img: 'images/bomb.png'
         },
         {
            name: 'white',
            img: 'images/white.png'
         },
         {
            name: 'bomb',
            img: 'images/bomb.png'
         }, 
         {
            name: 'white',
            img: 'images/white.png'
         },
          {
            name: 'bomb',
            img: 'images/bomb.png'
         }

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
    const cardsLose = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/Q.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForBomb() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionOne=cardsChosen[0]
      
      if(optionOne==='bomb') {
        cards[optionOneId].setAttribute('src', 'images/bomb.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        alert('Youhave found bomb')
        cardsWon.push(cardsChosen)

      } 
      else {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        alert('Sorry, try again')
        cardsLose.push(cardsChosen)
      }  
      
      cardsChosen=[]
      cardsChosenId=[]
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === 6) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
        grid.parentElement.removeChild(grid)
      }
      if(cardsLose.length===4){
        resultDisplay.textContent='GAME OVER' 
        grid.parentElement.removeChild(grid)
        }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      checkForBomb()
    }
  
    createBoard()
  })
