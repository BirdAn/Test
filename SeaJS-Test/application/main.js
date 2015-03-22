define(function(require,exports,module){
  var $ = require('jquery');
  var util = require('./util');

  var title = $('#title');
  //console.log(util.randomColor())
  title.css('color',util.randomColor());
  window.setInterval(function(){
    title.css('color',util.randomColor());
  },1500);
});