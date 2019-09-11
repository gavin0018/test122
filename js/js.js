window.onload = function() {
  var imgArr = [
    { path: 'img/xue.jpg' , title:'中国人民大学'},
    { path: 'img/xue2.jpg' , title:'中国传媒大学'},
    { path: 'img/xue3.jpg' , title:'中国地质大学'},
    { path: 'img/xue4.jpg' , title:'中央财经大学'},
    { path: 'img/xue5.jpg' , title:'汉语言文学'}
  ]
  var subject = [
    ['行政管理', '工商管理', '人力资源', '新闻传播', '法学', '金融学'],
    ['设计/播音与主持', '广播电视', '广告学', '新闻学', '数字媒体艺术', '通信工程'],
    ['地质工程', '资源勘查工程', '石油工程', '土木工程', '水资源工程', '地理信息科学'],
    ['项目管理', '会计学', '金融工程', '财政学', '投资学', '保险学'],
    ['汉语言文学', '心理学', '教育学', '历史学', '学前教育', '教育技术学']
  ]
  var size = [
    //      {"top":60,"left":0,"width":400,"height":240,"zIndex":1,"opacity":0},
    { top: 60, left: 0, width: 312, height: 234, zIndex: 2, opacity: 100 },
    { top: 30, left: 170, width: 395, height: 296, zIndex: 3, opacity: 100 },
    { top: 0, left: 380, width: 455, height: 340, zIndex: 4, opacity: 100 },
    { top: 30, left: 670, width: 395, height: 296, zIndex: 3, opacity: 100 },
    { top: 60, left: 888, width: 312, height: 234, zIndex: 2, opacity: 100 }
    //      {"top":60,"left":800,"width":400,"height":240,"zIndex":1,"opacity":0}
  ]
  var imgSum = imgArr.length
  var wrap = document.getElementById('wrap')
  var cont = wrap.firstElementChild || wrap.firstChild
  var btnArr = wrap.getElementsByTagName('a')
  var falg = true
  var speed = 4000
  wrap.onmouseover = function() {
    for (var i = 0; i < btnArr.length; i++) {
      btnArr[i].style.display = 'block'
    }
    clearInterval(wrap.timer)
  }
  wrap.onmouseout = function() {
    for (var i = 0; i < btnArr.length; i++) {
      btnArr[i].style.display = 'none'
    }
    wrap.timer = setInterval(function() {
      move(true)
    }, speed)
  }
  for (var i = 0; i < imgSum; i++) {
    var lis = document.createElement('li')
    // lis.style.cssText='top:'+size[i].top+'px;'+'left:'+size[i].left+'px;'+'width:'+size[i].width+'px;'+'z-index:'+size[i].zIndex+';'+'height:'
    // +size[i].height+'px;'+'opacity:'+size[i].opacity+';';
    var div = document.createElement('div')
    div.setAttribute('class','box')
    div.style.backgroundImage = 'url(' + imgArr[i].path + ')'
    div.appendChild(createSubject(i))

    var divTitle = document.createElement('div')
    divTitle.innerText = imgArr[i].title
    divTitle.setAttribute('class','box-title')
    lis.appendChild(div)
    lis.appendChild(divTitle)
    cont.appendChild(lis)
  }
  var liArr = cont.children
  move()
  wrap.timer = setInterval(function() {
    move(true)
  }, speed)
  btnArr[1].onclick = function() {
    if (falg) {
      move(true)
    }
  }
  btnArr[0].onclick = function() {
    if (falg) {
      move(false)
    }
  }
  function move(bool) {
    if (bool != undefined) {
      if (bool) {
        size.unshift(size.pop())
      } else {
        size.push(size.shift())
      }
    }
    for (var i = 0; i < liArr.length; i++) {
      animate(liArr[i], size[i], function() {
        falg = true
      })
    }
  }

  function createSubject(index) {
    var ul = document.createElement('ul')
    ul.setAttribute('class', 'wrap-silder')
    var li = document.createElement('li')
    li.innerText = '热门专业'
    ul.appendChild(li)
    for (var j = 0; j < subject[index].length; j++) {
      var subLi = document.createElement('li')
      subLi.setAttribute('class', 'wrap-silder--sub')
      subLi.innerText = subject[index][j]
      ul.appendChild(subLi)
    }
    return ul
  }
}
