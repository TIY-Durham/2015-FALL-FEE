(function(globals){ // IIFE
// Not this again...

  // it('should totally fail', function(){
  //   chai.expect(false).equals(true);
  // })

  it('should have a `game` in the `window`', function(){
    chai.expect(window.game).to.be.equal(game);
    chai.expect(game).to.be.an('object');
    chai.expect(game.board).to.a('function'); // ???
  });

  it('should give me a big array as the board', function(){
    var board = game.board();

    chai.expect(board).to.be.an('array');
    // chai.expect(game.board().length).to.be.equal(8);
    chai.expect(board).to.have.length(8);

    chai.expect(board[0]).to.be.a('array');
    chai.expect(board[0]).to.have.length(8);

    chai.expect(board[0][0]).to.be.a('string');
    chai.expect(board[0][0]).to.equal('R');

  }); // END it should be a big Array

  it('should be able to move pieces', function(){
    // board[0][0] = board[0][1];
    game.applyMove(
      // TODO: one day take { file: 'd', rank: 2 },
      { rank: 6, file: 3 }, // from
      // TODO: one day take { file: 'd', rank: 4 }
      { rank: 4, file: 3 } // to
    );

    var board = game.board();

    chai.expect(board[6][3]).to.be.equal(null);
    chai.expect(board[4][3]).to.be.equal('p');

  });

  it.skip('should be able to advance to the next move', function(){
    // TODO: Maybe I should write some tests for this?
  });

// There's that crazy line again...
})(window || module && module.exports || this);
