var myDataRef = new Firebase('https://resplendent-inferno-1454.firebaseio.com/Companies/Zappos/Campaigns/Cloths/Data');

var sampleData = [{"id":1,"purchases":0,"like":true,"Items":"Boots"},
{"id":2,"purchases":3,"Items":"Jeans"},
{"id":3,"purchases":0,"like":true,"Items":"Shirts"},
{"id":4,"purchases":4,"like":false,"Items":"Jeans"},
{"id":5,"purchases":2,"like":false,"Items":"Boots"},
{"id":6,"purchases":4,"like":true,"Items":"Boots"},
{"id":7,"purchases":2,"like":false,"Items":"Boots"},
{"id":8,"purchases":0,"Items":"Shirts"},
{"id":9,"purchases":3,"like":true,"Items":"Jeans"},
{"id":10,"purchases":3,"like":true,"Items":"Shirts"},
{"id":11,"purchases":4,"like":true,"Items":"Shirts"},
{"id":12,"purchases":2,"like":true,"Items":"Jeans"},
{"id":13,"purchases":4,"like":false,"Items":"Jeans"},
{"id":14,"purchases":2,"like":false,"Items":"Jeans"},
{"id":15,"purchases":5,"Items":"Boots"},
{"id":16,"purchases":4,"like":false,"Items":"Shirts"},
{"id":17,"purchases":2,"like":false,"Items":"Boots"},
{"id":18,"purchases":3,"like":true,"Items":"Jeans"},
{"id":19,"purchases":0,"like":false,"Items":"Shirts"},
{"id":20,"purchases":4,"like":true,"Items":"Boots"},
{"id":21,"purchases":0,"Items":"Jeans"},
{"id":22,"purchases":5,"Items":"Shirts"},
{"id":23,"purchases":0,"Items":"Shirts"},
{"id":24,"purchases":1,"like":false,"Items":"Shirts"},
{"id":25,"purchases":1,"Items":"Shirts"},
{"id":26,"purchases":4,"like":true,"Items":"Jeans"},
{"id":27,"purchases":2,"like":false,"Items":"Jeans"},
{"id":28,"purchases":2,"like":false,"Items":"Shirts"},
{"id":29,"purchases":2,"like":false,"Items":"Jeans"},
{"id":30,"purchases":1,"Items":"Jeans"},
{"id":31,"purchases":2,"like":true,"Items":"Boots"},
{"id":32,"purchases":1,"Items":"Jeans"},
{"id":33,"purchases":4,"like":true,"Items":"Jeans"},
{"id":34,"purchases":1,"like":true,"Items":"Boots"},
{"id":35,"purchases":2,"like":false,"Items":"Boots"},
{"id":36,"purchases":3,"like":false,"Items":"Jeans"},
{"id":37,"purchases":1,"like":true,"Items":"Jeans"},
{"id":38,"purchases":4,"like":true,"Items":"Jeans"},
{"id":39,"purchases":1,"like":true,"Items":"Jeans"},
{"id":40,"purchases":3,"like":true,"Items":"Jeans"},
{"id":41,"purchases":3,"like":true,"Items":"Jeans"},
{"id":42,"purchases":3,"like":true,"Items":"Boots"},
{"id":43,"purchases":4,"like":true,"Items":"Shirts"},
{"id":44,"purchases":3,"like":true,"Items":"Jeans"},
{"id":45,"purchases":5,"like":true,"Items":"Jeans"},
{"id":46,"purchases":0,"Items":"Jeans"},
{"id":47,"purchases":5,"like":true,"Items":"Shirts"},
{"id":48,"purchases":0,"Items":"Shirts"},
{"id":49,"purchases":0,"like":false,"Items":"Jeans"},
{"id":50,"purchases":4,"like":false,"Items":"Shirts"},
{"id":51,"purchases":3,"like":true,"Items":"Jeans"},
{"id":52,"purchases":0,"Items":"Boots"},
{"id":53,"purchases":3,"like":true,"Items":"Boots"},
{"id":54,"purchases":0,"like":true,"Items":"Boots"},
{"id":55,"purchases":5,"like":true,"Items":"Shirts"},
{"id":56,"purchases":5,"Items":"Shirts"},
{"id":57,"purchases":2,"like":true,"Items":"Jeans"},
{"id":58,"purchases":5,"like":true,"Items":"Shirts"},
{"id":59,"purchases":4,"like":false,"Items":"Jeans"},
{"id":60,"purchases":0,"like":true,"Items":"Boots"},
{"id":61,"purchases":5,"like":true,"Items":"Jeans"},
{"id":62,"purchases":4,"like":false,"Items":"Jeans"},
{"id":63,"purchases":4,"Items":"Boots"},
{"id":64,"purchases":2,"Items":"Shirts"},
{"id":65,"purchases":5,"like":true,"Items":"Shirts"},
{"id":66,"purchases":0,"like":true,"Items":"Shirts"},
{"id":67,"purchases":3,"like":true,"Items":"Boots"},
{"id":68,"purchases":0,"like":false,"Items":"Shirts"},
{"id":69,"purchases":2,"Items":"Shirts"},
{"id":70,"purchases":3,"like":true,"Items":"Shirts"},
{"id":71,"purchases":4,"Items":"Boots"},
{"id":72,"purchases":2,"like":false,"Items":"Boots"},
{"id":73,"purchases":0,"like":false,"Items":"Shirts"},
{"id":74,"purchases":1,"like":false,"Items":"Jeans"},
{"id":75,"purchases":0,"like":true,"Items":"Shirts"},
{"id":76,"purchases":0,"Items":"Jeans"},
{"id":77,"purchases":2,"Items":"Shirts"},
{"id":78,"purchases":4,"like":false,"Items":"Jeans"},
{"id":79,"purchases":2,"Items":"Jeans"},
{"id":80,"purchases":1,"like":false,"Items":"Shirts"},
{"id":81,"purchases":3,"Items":"Jeans"},
{"id":82,"purchases":1,"like":false,"Items":"Shirts"},
{"id":83,"purchases":2,"like":false,"Items":"Shirts"},
{"id":84,"purchases":2,"like":false,"Items":"Jeans"},
{"id":85,"purchases":1,"like":true,"Items":"Shirts"},
{"id":86,"purchases":2,"like":false,"Items":"Jeans"},
{"id":87,"purchases":0,"like":true,"Items":"Boots"},
{"id":88,"purchases":2,"like":false,"Items":"Boots"},
{"id":89,"purchases":3,"like":true,"Items":"Jeans"},
{"id":90,"purchases":2,"like":true,"Items":"Shirts"},
{"id":91,"purchases":1,"like":false,"Items":"Shirts"},
{"id":92,"purchases":3,"like":false,"Items":"Boots"},
{"id":93,"purchases":1,"like":false,"Items":"Shirts"},
{"id":94,"purchases":1,"like":false,"Items":"Shirts"},
{"id":95,"purchases":3,"like":false,"Items":"Boots"},
{"id":96,"purchases":5,"like":true,"Items":"Boots"},
{"id":97,"purchases":4,"like":true,"Items":"Shirts"},
{"id":98,"purchases":2,"like":false,"Items":"Jeans"},
{"id":99,"purchases":5,"like":true,"Items":"Boots"},
{"id":100,"purchases":1,"like":true,"Items":"Jeans"}]