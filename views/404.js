var html = require('choo/html');

var TITLE = '🚂🚋🚋 - route not found';

module.exports = view;

function view(state, emit) {
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE);
  }

  return html`
    <body class="sans-serif">
      <h1 class="f-headline pa3 pa4-ns mv3 f3">
        404 - route not found
      </h1>

      <div class="ph3 pv3 ph4-ns">
        <a href="/" class="link blue underline hover-hot-pink">
          Navigate back to "main" route.
        </a>
      </div>
    </body>
  `;
}
