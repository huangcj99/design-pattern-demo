// 键盘keyCode对应的动作
const commands = {
  "119": 'jump',
  "115": 'crouch',
  "97": 'defense',
  "100": 'attack'
}

// 动作对应的执行函数
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

// 创建命令函数
const setCommand = (actions, action) => {
  return () => {
    actions[action]()
  }
}

// 历史堆栈
let commandStack = []

// 有对应命令执行并且推入历史堆栈中
document.onkeypress = (e) => {
  let keyCode = e.keyCode
  let command = setCommand(actions, commands[keyCode])

  if (command) {
    command()
    commandStack.push(command)
  }
}

// 重新执行一系列动作
document.getElementById('replay').onclick = () => {
  let command = function () {}
  console.log('------------------------')
  while (command = commandStack.shift()) {
    command()
  }
} 


