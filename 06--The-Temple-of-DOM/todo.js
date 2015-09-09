var test = require('mocha').it,
    expect = require('chai').expect;

test('what happens when I pop?', function(){
  var tasks = [
    "Remember the milk",
    "Walk the dog"
  ];

   expect(tasks.length).to.equal(2);

   expect(tasks.pop()).to.equal('Walk the dog');

   expect(tasks.length).to.equal(1);
}); // END popping

test('how do I mark off a task?', function(){
  var tasks = [
    { // first task AKA tasks[0]
       "name": "Remember the milk",
       "completed": false
    },
    { // second task AKA tasks[1]
       "name": "Walk the dog",
       "completed": false
    }
  ];

  expect(tasks.length).to.equal(2);
  expect(tasks[0]).to.be.an('object');
  expect(tasks[0].name).to.equal("Remember the milk")
  expect(tasks[0].completed).to.be.false;

  // "Check off" the task "Walk the dog"
  //   i.e. change `completed` to `true`
  tasks[1].completed = true;

  expect(tasks[1].completed).to.be.true;
}); // END completion










// THIS LINE LEFT INTENTIONALLY FAR AWAY
