class Upload {
  del (id) {
    uploadDataManager.setUploadData(id, this)

    console.log(`删除${this.fileName}`)
  }
}

class UploadManager {
  constructor () {
    this.upload = null
  }

  getUpload () {
    if (!this.upload) {
      console.log('不存在')
      this.upload = new Upload()
      return this.upload
    }

    console.log('存在')
    return this.upload
  }
}

class UploadDataManager {
  constructor () {
    this.uploadDatabase = {}
  }

  // 添加上传数据，并创建DOM节点插入到body中
  // 我们需要在内部获取upload对象的context，这样我们可以访问它的del方法用于删除对应id的上传对象
  add (id, file) {
    let upload = uploadManager.getUpload()
    let dom = document.createElement('div')

    dom.innerHTML = `
      <div>
        <span>fileName：${file.fileName}</span>
        <button id="del-btn">删除</button>
      </div>
    `
    document.body.appendChild(dom)

    // 给删除按钮绑定删除事件
    dom.querySelector('#del-btn').onclick = () => {
      upload.del(id)
    }

    // 添加上传数据
    this.uploadDatabase[id] = {
      id: id,
      fileName: file.fileName,
      dom: dom
    }

    return this.uploadDatabase[id]
  }

  setUploadData (id, uploadContext) {
    let uploadData = this.uploadDatabase[id]

    for (let key in uploadData) {
      uploadContext[key] = uploadData[key]
    }
  }
}

const uploadObj1 = [
  {
    fileName: '1.txt'
  },
  {
    fileName: '2.txt'
  },
  {
    fileName: '3.txt'
  }
]

// 用于获取上传对象（单例）
var uploadManager = new UploadManager()
// 管理需要上传的每个对象的数据
var uploadDataManager = new UploadDataManager()

for (let i = 0, file; file = uploadObj1[i++];) {
  uploadDataManager.add(i, file)
}
