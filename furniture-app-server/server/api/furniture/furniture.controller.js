var apiURI = 'http://localhost:3000'

var furnitureList = [
  [{
    it_id: '1',
    item_code: 'row_ac001',
    dimension: 'H: 85 W: 67 D: 72',
    price: 850.90,
    description: `It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it look
      like readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various versions
      have evolved over the years, sometimes by accident, sometimes on purpose
      (injected humour and the like).`,
    images:
      apiURI + '/img/row_ac001_0.jpg' + ',' +
      apiURI + '/img/row_ac001_1.jpg' + ',' +
      apiURI + '/img/row_ac001_2.jpg' + ',' +
      apiURI + '/img/row_ac001_3.jpg' + ',' +
      apiURI + '/img/row_ac001_4.jpg' + ',' +
      apiURI + '/img/row_ac001_5.jpg'
  },{
    it_id: '2',
    item_code: 'row_ac002',
    dimension: 'H: 85 W: 67 D: 72',
    price: 950.90,
    description: `It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it look
      like readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various versions
      have evolved over the years, sometimes by accident, sometimes on purpose
      (injected humour and the like).`,
    images:
      apiURI + '/img/row_ac002_0.jpg' + ',' +
      apiURI + '/img/row_ac002_1.jpg' + ',' +
      apiURI + '/img/row_ac002_2.jpg' + ',' +
      apiURI + '/img/row_ac002_3.jpg'
  },{
    it_id: '3',
    item_code: 'row_ac003',
    dimension: 'H: 85 W: 67 D: 72',
    price: 1950.00,
    description: `It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it look
      like readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various versions
      have evolved over the years, sometimes by accident, sometimes on purpose
      (injected humour and the like).`,
    images:
      apiURI + '/img/row_ac003_0.jpg' + ',' +
      apiURI + '/img/row_ac003_1.jpg' + ',' +
      apiURI + '/img/row_ac003_2.jpg' + ',' +
      apiURI + '/img/row_ac003_3.jpg' + ',' +
      apiURI + '/img/row_ac003_4.jpg' + ',' +
      apiURI + '/img/row_ac003_5.jpg'
  },{
    it_id: '4',
    item_code: 'row_ac004',
    dimension: 'H: 85 W: 67 D: 72',
    price: 650.00,
    description: `It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it look
      like readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various versions
      have evolved over the years, sometimes by accident, sometimes on purpose
      (injected humour and the like).`,
    images:
      apiURI + '/img/row_ac004_0.jpg' + ',' +
      apiURI + '/img/row_ac004_1.jpg' + ',' +
      apiURI + '/img/row_ac004_2.jpg'
  },{
    it_id: '5',
    item_code: 'row_ac005',
    dimension: 'H: 85 W: 67 D: 72',
    price: 350.90,
    description: `It is a long established fact that a reader will be distracted
    by the readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal distribution of
    letters, as opposed to using 'Content here, content here', making it look
    like readable English. Many desktop publishing packages and web page editors
    now use Lorem Ipsum as their default model text, and a search for 'lorem
    ipsum' will uncover many web sites still in their infancy. Various versions
    have evolved over the years, sometimes by accident, sometimes on purpose
    (injected humour and the like).`,
    images:
      apiURI + '/img/row_ac005_0.jpg' + ',' +
      apiURI + '/img/row_ac005_1.jpg' + ',' +
      apiURI + '/img/row_ac005_2.jpg' + ',' +
      apiURI + '/img/row_ac005_3.jpg',
  }], [{
    it_id: '6', item_code: 'row_sf001', dimension: 'H: 85 W: 67 D: 72',
    price: 1850.90,
    description: `It is a long established fact that a reader will be distracted
    by the readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal distribution of
    letters, as opposed to using 'Content here, content here', making it look
    like readable English. Many desktop publishing packages and web page editors
    now use Lorem Ipsum as their default model text, and a search for 'lorem
    ipsum' will uncover many web sites still in their infancy. Various versions
    have evolved over the years, sometimes by accident, sometimes on purpose
    (injected humour and the like).`,
    images:
      apiURI + '/img/row_sf001_0.jpg' + ',' +
      apiURI + '/img/row_sf001_1.jpg' + ',' +
      apiURI + '/img/row_sf001_2.jpg',
  },{
    it_id: '7',
    item_code: 'row_sf002',
    dimension: 'H: 85 W: 67 D: 72',
    price: 1950.90,
    description: `It is a long established fact that a reader will be distracted
    by the readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal distribution of
    letters, as opposed to using 'Content here, content here', making it look
    like readable English. Many desktop publishing packages and web page editors
    now use Lorem Ipsum as their default model text, and a search for 'lorem
    ipsum' will uncover many web sites still in their infancy. Various versions
    have evolved over the years, sometimes by accident, sometimes on purpose
    (injected humour and the like).`,
    images:
      apiURI + '/img/row_sf002_0.jpg' + ',' +
      apiURI + '/img/row_sf002_1.jpg' + ',' +
      apiURI + '/img/row_sf002_2.jpg' + ',' +
      apiURI + '/img/row_sf002_3.jpg'
  },{
    it_id: '8',
    item_code: 'row_ac003',
    dimension: 'H: 85 W: 67 D: 72',
    price: 1950.00,
    description: `It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it look
      like readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various versions
      have evolved over the years, sometimes by accident, sometimes on purpose
      (injected humour and the like).`,
    images:
      apiURI + '/img/row_sf003_0.jpg' + ',' +
      apiURI + '/img/row_sf003_1.jpg' + ',' +
      apiURI + '/img/row_sf003_2.jpg'
  },{
    it_id: '9',
    item_code: 'row_sf004',
    dimension: 'H: 85 W: 67 D: 72',
    price: 1650.00,
    description: `It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it look
      like readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various versions
      have evolved over the years, sometimes by accident, sometimes on purpose
      (injected humour and the like).`,
    images:
      apiURI + '/img/row_sf004_0.jpg' + ',' +
      apiURI + '/img/row_sf004_1.jpg' + ',' +
      apiURI + '/img/row_sf004_2.jpg',
  },{
    it_id: '10',
    item_code: 'row_sf005',
    dimension: 'H: 85 W: 67 D: 72',
    price: 1350.90,
    description: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using 'Content here, content here',
      making it look like readable English. Many desktop publishing packages and
      web page editors now use Lorem Ipsum as their default model text, and a
      search for 'lorem ipsum' will uncover many web sites still in their
      infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).`,
    images:
      apiURI + '/img/row_sf005_0.jpg' + ',' +
      apiURI + '/img/row_sf005_1.jpg' + ',' +
      apiURI + '/img/row_sf005_2.jpg' + ',' +
      apiURI + '/img/row_sf005_3.jpg',
  }]
]

exports.list = function (req, resp) {
  var cat_id = req.params.cat_id
  resp.status(200)
  resp.type('application/json')
  if (cat_id == '1')
    resp.json(furnitureList[0])
  else
    resp.json(furnitureList[1])
}
