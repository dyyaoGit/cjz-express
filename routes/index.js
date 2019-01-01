var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
      data: {
          text: "我是测试接口的数据"
      }
  })
});

module.exports = router;
