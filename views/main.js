var html = require('choo/html')

var TITLE = '🚂🚋🚋'

module.exports = view

function view(state, emit) {
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE);
  }

  return html`
    <body class="sans-serif">
      <h1 class="f-headline pa3 pa4-ns mv3">
        Choo choo!
      </h1>

      <div class="ph3 pv3 ph4-ns">
        <a href="/esri-map-view" class="link blue underline hover-hot-pink f3">
          Navigate to "esri-map-view" route.
        </a>
      </div>

      <div class="ph3 pv3 ph4-ns">
        <p>Current number of clicks: ${state.totalClicks}</p>
        <button class="f5 dim br-pill ph3 pv2 mb2 dib white bg-hot-pink bn pointer" onclick=${handleClick}>Click Me!</button>
      </div>

      <div class="ph3 pv3 ph4-ns bt">
        built with <a href="https://github.com/esri/esri-loader" class="link black underline hover-hot-pink">esri/esri-loader</a> and <a href="https://github.com/choojs/create-choo-app" class="link black underline hover-hot-pink">choojs/create-choo-app</a>
      </div>
    </body>
  `;

  function handleClick() {
    emit('clicks:add', 1);
  }
}
