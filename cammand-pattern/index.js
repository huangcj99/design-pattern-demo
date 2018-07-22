const commands = {
  "119": 'jump',
  "115": 'crouch',
  "97": 'defense',
  "100": 'attack'
}

const actions = {
  jump: () => {
    console.log('跳跃')
  }, 
  crouch: () => {
    console.log('蹲下')
  },
  defense: () => {
    console.log('防御')
  },
  attack: () => {
    console.log('攻击')
  }
}

const setCommand = (actions, action) => {
  return () => {
    actions[action]()
  }
}

let commandStack = []

document.onkeypress = (e) => {
  let keyCode = e.keyCode
  let command = setCommand(actions, commands[keyCode])

  if (command) {
    command()
    commandStack.push(command)
  }
}

document.getElementById('replay').onclick = () => {
  let command = function () {}
  console.log('------------------------')
  while (command = commandStack.shift()) {
    command()
  }
} 

document.getElementById('back').onclick = () => {
  let command = function () { }
  console.log('------------------------')
  command = commandStack.pop()
  command()
} 

