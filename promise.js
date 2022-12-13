let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let random = Math.random()
    console.log(random)
    if(random > 0.5) {
      resolve("", random);
    } else if(random <= 0.5) {
      reject(new Error('Required'))
    }
  }, 1000);
});

myPromise
  .then(function() {
    console.log('success')
    console.log('complete')
  })
  .catch(function() {
    console.log('fail')
    console.log('complete')
  })