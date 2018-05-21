class {
  constructor() {

  }

  get(url) {
    var requestPromise = new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('get', url);

      req.onload = function() {
        req.status === 200 ? resolve(req.response) : reject(Error(req.statusText))
      }

      req.onerror = function(){
        reject(Error('Network Error'))
      }

      req.send();
    });

    return Promise.all([requestPromise]).then(results => {
      console.log({results});
    })
  }

  getJSON(url) {
    // return Promise.
  }
}