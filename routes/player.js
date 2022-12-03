const GAME_STATE = {
  Player_1: "Player 1",
  Player_2: "Player 2",
  GameFinish: "GameFinish"
}

const controller = {
  currentState: GAME_STATE.Player_1,
  playerAction(img) {
    if (img.classList.contains('.clear')) {
      return
    }

    switch (this.currentState) {
      case GAME_STATE.Player_1:
        view.getImage(img)
        this.currentState = GAME_STATE.Player_2
        break
      case GAME_STATE.Player_2:
        view.getImage(img)
        this.currentState = GAME_STATE.Player_1
        break
      case GAME_STATE.GameFinish:
    }

  }
}

const model = {

}

const view = {
  getImage(img) {
    const player1 = document.querySelector('.player1').firstElementChild
    const player2 = document.querySelector('.player2').firstElementChild

    if (controller.currentState === GAME_STATE.Player_1) {
      img.setAttribute("src", '圈圈.png')
      img.classList.add('.clear')
      this.replacePlayer(player1, player2)
    } else if (controller.currentState === GAME_STATE.Player_2) {
      img.setAttribute("src", '叉叉.png')
      img.classList.add('.clear')
      this.replacePlayer(player2, player1)
    }
  },
  replacePlayer(player1, player2) {
    player1.classList.remove('bg-success')
    player1.classList.add('bg-secondary')
    player2.classList.remove('bg-secondary')
    player2.classList.add('bg-success')
  }
}



const imgs = document.querySelectorAll('.playimg')
console.log(imgs)
imgs.forEach(img => {
  img.addEventListener('click', event => {
    controller.playerAction(img)
  })

})
