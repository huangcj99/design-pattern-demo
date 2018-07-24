// 关灯状态
class LightOff {
  constructor (lightManagerContext) {
    this.text = '关灯'
    this.lightManager = lightManagerContext
  }

  onBtnPress() {
    let textDOM = document.getElementById('state')

    this.lightManager.setState(this.lightManager.lightLess)
    textDOM.innerHTML = this.lightManager.getCurrentState().text
  }
}

// 弱光状态
class LightLess {
  constructor(lightManagerContext) {
    this.text = '弱光'
    this.lightManager = lightManagerContext
  }

  onBtnPress() {
    let textDOM = document.getElementById('state')

    this.lightManager.setState(this.lightManager.lightStrong)
    textDOM.innerHTML = this.lightManager.getCurrentState().text
  }
}

// 强光状态
class LightStrong {
  constructor(lightManagerContext) {
    this.text = '强光'
    this.lightManager = lightManagerContext
  }

  onBtnPress() {
    let textDOM = document.getElementById('state')

    this.lightManager.setState(this.lightManager.lightOff)
    textDOM.innerHTML = this.lightManager.getCurrentState().text
  }
}

// 灯状态管理者
class LightManager {
  constructor () {
    // 初始化各种状态对象
    this.lightOff = new LightOff(this)
    this.lightLess = new LightLess(this)
    this.lightStrong = new LightStrong(this)
    this.currentState = null
  }

  init () {
    let lightBtn = document.getElementById('light-btn')

    // 设置灯的初始状态
    this.currentState = this.lightOff

    // 灯的点击行为委托给管理者进行管理
    lightBtn.onclick = () => {
      this.currentState.onBtnPress()
    }
  }

  // 设置当前状态
  setState (light) {
    this.currentState = light
  }

  getCurrentState () {
    return this.currentState
  }
}

const lightManager = new LightManager()
lightManager.init()