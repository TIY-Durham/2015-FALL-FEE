var test = require('mocha').it,
    expect = require('chai').expect,
    assert = require('chai').assert;

test('making threes', function(){
  expect(threes).to.be.a('function');
  expect(threes(0)).to.deep.equal([ ]);
  expect(threes(3)).to.deep.equal([ ]);
  expect(threes(4)).to.deep.equal([ 3 ]);
  expect(threes(6)).to.deep.equal([ 3 ]);
  expect(threes(7)).to.deep.equal([ 3, 6 ]);
  expect(threes(9)).to.deep.equal([ 3, 6 ]);
  expect(threes(10)).to.deep.equal([ 3, 6, 9 ]);
}); // END making threes

/**
 * @param {Number} N to limit my multiples
 * @return {Array} of multiples of 3 below N
 */
function threes(N){
  var multiples = [ ];

  var increment = 0;

  while ( increment < N ){
    console.log(increment);
    increment++;
  }

  if (N > 3){
    // maybe put `3` into `multiples`
    multiples.push(3); // [ 3 ]
  }
  if (N > 6){
    // return [ 3, 6 ];
    multiples.push(6); // [ 3, 6 ]
  }
  if (N > 9){
    // return [ 3, 6, 9 ];
    multiples.push(9);
  }
  // then return `multiples`
  return multiples;
}
