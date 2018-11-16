let domain = "http://192.168.30.99:8000";
let api = {
  index: {
    lists: "/api/trailingContentControlle/getContenList", //列表信息
    weather: "http://wthrcdn.etouch.cn/weather_mini?city=西宁" //天气
  },
  lists: {
    'newLists': '/api/trailingContentControlle/getDetailInfo' //数据页展示
  }
}

export default api;
