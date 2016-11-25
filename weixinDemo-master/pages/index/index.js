//index.js
//获取应用实例
var app = getApp()
 let a=1;
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    motto: 'Hello Wofsfrld',
    userInfo: {},
    alluserinfo:[],
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
     
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo)
      that.setData({
        userInfo:userInfo,
        alluserinfo:[userInfo,userInfo,userInfo,userInfo]
      })
    })

wx.request({
  url: 'http://1.libikun.applinzi.com/index.php/Index/indexJson.html',
  data: {
     x: '' ,
     y: ''
  },
  header: {
      'Content-Type': 'application/json'
  },
  success: function(res) {
    console.log(res.data)
    var nv_url='http://1.libikun.applinzi.com/Public/img/nv.png'
     var new_data=[]
     for(var item in res.data.data){
       if(res.data.data[item].headimgurl==undefined){
          res.data.data[item].headimgurl=nv_url
           new_data[item]=res.data.data[item]
       }else{
         new_data[item]=res.data.data[item]
       }
     }
     that.setData({
        alluserinfo:new_data
      })
  }
})

  },
  yusai:function(){    
  }

})


