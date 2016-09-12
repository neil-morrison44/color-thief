'use strict';

var ColorThief = require('../js/color-thief');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['color-thief'] = {
  constructor: function(test) {
    test.equal(typeof ColorThief, 'function', 'ColorThief should be a function');
    test.done();
  },

  color: function(test) {
    var filename =  __dirname + '/../img/photo1.jpg';
    var colorThief = new ColorThief();
    var color = colorThief.getColor(filename);

    test.deepEqual(color, [124, 190, 192], 'correct color returned');
    test.done();
  },
  colorpng: function(test){
    var filename =  __dirname + '/../img/photo3.png';
    var colorThief = new ColorThief();
    var color = colorThief.getColor(filename);

    test.deepEqual(color, [207, 145, 149], 'correct color returned');
    test.done();
  }
};
