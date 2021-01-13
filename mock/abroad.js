// import Mock from 'mockjs'

const data = {
  items: [{
    'id': 87,
    'img_url': 'https://pic.c-ctrip.com/flight_intl/airline_logo/32/dl.png?v=2',
    'title': 'Y87509 波音738(中)',
    'Departure_time': '09:50',
    'arrival_time': '16:55',
    'starting_point': '上海(SHA)',
    'destination': '东京(KWE)',
    'Punctuality_rate': '到达准点率90%',
    'sell_price': '¥910起'
  },
  {
    'id': 88,
    'img_url': 'https://pic.c-ctrip.com/flight_intl/airline_logo/32/dl.png?v=2',
    'title': 'KN5737 空客330(大)',
    'Departure_time': '05:25',
    'arrival_time': '09:35',
    'starting_point': '北京(BJS)',
    'destination': '首尔(CAN)',
    'Punctuality_rate': '到达准点率90%',
    'sell_price': '¥238起'
  },
  {
    'id': 89,
    'img_url': 'https://pic.c-ctrip.com/flight_intl/airline_logo/32/dl.png?v=2',
    'title': '吉祥航空 HO1254',
    'Departure_time': '08:20',
    'arrival_time': '16:45',
    'starting_point': '北京(BJS)',
    'destination': '伦敦(CAN)',
    'Punctuality_rate': '到达准点率90%',
    'sell_price': '¥870起'
  },
  {
    'id': 90,
    'img_url': 'https://pic.c-ctrip.com/flight_intl/airline_logo/32/dl.png?v=2',
    'title': '中国国航 CA8219',
    'Departure_time': '07:45',
    'arrival_time': '15:10',
    'starting_point': '武汉(WUH)',
    'destination': '汉堡(SIA)',
    'Punctuality_rate': '到达准点率90%',
    'sell_price': '¥920起'
  },
  {
    'id': 91,
    'img_url': 'https://pic.c-ctrip.com/flight_intl/airline_logo/32/dl.png?v=2',
    'title': '海南航空 HU7254',
    'Departure_time': '14:05',
    'arrival_time': '22:30',
    'starting_point': '青岛(TAO)',
    'destination': '洛杉矶(SZX)',
    'Punctuality_rate': '到达准点率90%',
    'sell_price': '¥1250起'
  },
  {
    'id': 92,
    'img_url': 'https://pic.c-ctrip.com/flight_intl/airline_logo/32/dl.png?v=2',
    'title': 'Y87509 波音738(中)',
    'Departure_time': '09:50',
    'arrival_time': '19:55',
    'starting_point': '上海(SHA)',
    'destination': '纽约(KWE)',
    'Punctuality_rate': '到达准点率90%',
    'sell_price': '¥610起'
  },
  {
    'id': 93,
    'img_url': 'https://pic.c-ctrip.com/flight_intl/airline_logo/32/dl.png?v=2',
    'title': 'Y87509 波音738(中)',
    'Departure_time': '04:50',
    'arrival_time': '12:55',
    'starting_point': '上海(SHA)',
    'destination': '巴黎(KWE)',
    'Punctuality_rate': '到达准点率90%',
    'sell_price': '¥1310起'
  },
  {
    'id': 94,
    'img_url': 'https://pic.c-ctrip.com/flight_intl/airline_logo/32/dl.png?v=2',
    'title': 'Y87509 波音738(中)',
    'Departure_time': '06:50',
    'arrival_time': '12:55',
    'starting_point': '上海(SHA)',
    'destination': '曼彻斯特(KWE)',
    'Punctuality_rate': '到达准点率90%',
    'sell_price': '¥1210起'
  },
  {
    'id': 95,
    'img_url': 'https://pic.c-ctrip.com/flight_intl/airline_logo/32/dl.png?v=2',
    'title': 'Y87509 波音738(中)',
    'Departure_time': '09:50',
    'arrival_time': '19:25',
    'starting_point': '上海(SHA)',
    'destination': '巴塞罗那(KWE)',
    'Punctuality_rate': '到达准点率90%',
    'sell_price': '¥1010起'
  },
  {
    'id': 96,
    'img_url': 'https://pic.c-ctrip.com/flight_intl/airline_logo/32/dl.png?v=2',
    'title': 'Y87509 波音738(中)',
    'Departure_time': '09:00',
    'arrival_time': '18:05',
    'starting_point': '上海(SHA)',
    'destination': '都灵(KWE)',
    'Punctuality_rate': '到达准点率90%',
    'sell_price': '¥1210起'
  }
  ]
}

export default [
  {
    url: '/vue-admin-template/abroad/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 3 } = config.query
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items.slice((page - 1) * limit, limit * page)
        }
      }
    }
  },
]
