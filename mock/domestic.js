import Mock from 'mockjs'

const data = {
  items: [{
    "id": 1,
    
    "title": "Y87509 波音738(中)",
    "Departure_time": "09:50",
    "arrival_time": "12:55",
    "starting_point": '上海(SHA)',
    "destination": "贵阳(KWE)",
    "Punctuality_rate": "到达准点率90%",
    "sell_price": '¥610起'
  },
  {
    "id": 2,
   
    "title": "KN5737 空客330(大)",
    "Departure_time": "07:25",
    "arrival_time": "09:35",
    "starting_point": '北京(BJS)',
    "destination": "广州(CAN)",
    "Punctuality_rate": "到达准点率90%",
    "sell_price": '¥238起'
  },
  {
    "id": 3,
   
    "title": "吉祥航空 HO1254",
    "Departure_time": "08:20",
    "arrival_time": "10:45",
    "starting_point": '北京(BJS)',
    "destination": "广州(CAN)",
    "Punctuality_rate": "到达准点率90%",
    "sell_price": '¥270起'
  },
  {
    "id": 4,

    "title": "中国国航 CA8219",
    "Departure_time": "07:45",
    "arrival_time": "09:10",
    "starting_point": '武汉(WUH)',
    "destination": "西安(SIA)",
    "Punctuality_rate": "到达准点率90%",
    "sell_price": '¥320起'
  },
  {
    "id": 5,
   
    "title": "海南航空 HU7254",
    "Departure_time": "19:05",
    "arrival_time": "22:30",
    "starting_point": '青岛(TAO)',
    "destination": "深圳(SZX)",
    "Punctuality_rate": "到达准点率90%",
    "sell_price": '¥350起'
  },
  {
    "id": 6,

    "title": "Y87509 波音738(中)",
    "Departure_time": "09:50",
    "arrival_time": "12:55",
    "starting_point": '上海(SHA)',
    "destination": "贵阳(KWE)",
    "Punctuality_rate": "到达准点率90%",
    "sell_price": '¥610起'
  },
  {
  
    "title": "Y87509 波音738(中)",
    "Departure_time": "07:50",
    "arrival_time": "12:55",
    "starting_point": '上海(SHA)',
    "destination": "贵阳(KWE)",
    "Punctuality_rate": "到达准点率90%",
    "sell_price": '¥310起'
  },
  {
    "id": 8,
  
    "title": "Y87509 波音738(中)",
    "Departure_time": "06:50",
    "arrival_time": "12:55",
    "starting_point": '上海(SHA)',
    "destination": "贵阳(KWE)",
    "Punctuality_rate": "到达准点率90%",
    "sell_price": '¥510起'
  },
  {
    "id": 9,

    "title": "Y87509 波音738(中)",
    "Departure_time": "09:50",
    "arrival_time": "12:25",
    "starting_point": '上海(SHA)',
    "destination": "贵阳(KWE)",
    "Punctuality_rate": "到达准点率90%",
    "sell_price": '¥710起'
  },
  {
    "id": 10,
    "img_url": "https://pic.c-ctrip.com/flight_intl/airline_logo/40x35/HU.png",
    "title": "Y87509 波音738(中)",
    "Departure_time": "09:00",
    "arrival_time": "12:05",
    "starting_point": '上海(SHA)',
    "destination": "贵阳(KWE)",
    "Punctuality_rate": "到达准点率90%",
    "sell_price": '¥210起'
  }
  ]
}


export default [
  {
    url: '/vue-admin-template/domestic/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]



