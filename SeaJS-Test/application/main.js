define(function(require,exports,module){
  var $ = require('jquery');

  var util = {};
  var colorRange = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

  util.randomColor = function(){
  	return '#' +
  	  colorRange[Math.floor(Math.random() * 16)] +
  	  colorRange[Math.floor(Math.random() * 16)] +
  	  colorRange[Math.floor(Math.random() * 16)] +
  	  colorRange[Math.floor(Math.random() * 16)] +
  	  colorRange[Math.floor(Math.random() * 16)] +
  	  colorRange[Math.floor(Math.random() * 16)];
  };

  var title = $('#title');
  //console.log(util.randomColor())
  title.css('color',util.randomColor());
  window.setInterval(function(){
    title.css('color',util.randomColor());
  },1500);
});