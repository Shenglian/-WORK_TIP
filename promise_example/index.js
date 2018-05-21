class Example {
  constructor() {
    this.storyDiv = document.querySelector('.story');
  }

  addHtmlToPage(content) {
    let div = document.createElement('div');
    div.innerHTML = content;
    this.storyDiv.appendChild(div);
  }

  addTextToPage(text) {
    let p = document.createElement('p');
    p.textContent = text;
    this.storyDiv.appendChild(p);
  }

  // https://googlesamples.github.io/web-fundamentals/fundamentals/primers/story.json
  // https://shenglian.github.io/-WORK_TIP/promise_example/story.json
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

    return Promise.all([requestPromise, requestPromise]).then(results => {
      return results[1];
    })
  }

  getJSON(url) {
    return this.get(url).then(JSON.parse)
  }
}

const _Example = new Example();

_Example.getJSON('https://shenglian.github.io/-WORK_TIP/promise_example/story.json')
  .then(res => {
    _Example.addHtmlToPage(res.heading);

    return res.chapterUrls.map(_Example.getJSON.bind(_Example)).reduce((chain, chapterPromise) => {
      return chain.then(function() {
        return chapterPromise;
      }).then(function(chapter) {
        _Example.addHtmlToPage(chapter.html);
      })
    }, Promise.resolve());
  })
  .then(() => {
    _Example.addTextToPage(' Well Done! ');
  })
  .then(() => {
    document.querySelector('.spinner').style.display = 'none';
  })
