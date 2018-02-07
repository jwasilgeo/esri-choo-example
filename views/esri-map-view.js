var html = require('choo/html');
var css = require('sheetify');
var esriLoader = require('esri-loader');

css`
  .esri-view {
    width: 80vw;
    height: 40vh;
  }
`;

var TITLE = 'Esri + 🚂🚋🚋';

module.exports = view;

function view(state, emit) {
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE);
  }

  createEsriMapView();

  return html`
    <body class="sans-serif">
      <h1 class="f-headline pa3 pa4-ns mv3">
        Esri + choo
      </h1>

      <div class="ph3 pv3 ph4-ns">
        <a href="/" class="link blue underline hover-hot-pink f3">
          Navigate back to "main" route.
        </a>
      </div>

      <div class="flex justify-center ph3 pv3 ph4-ns">
        <div id="mapViewNode" class="shadow-2"></div>
      </div>
    </body>
  `;

  function createEsriMapView() {
    esriLoader.loadCss('https://js.arcgis.com/4.6/esri/css/view.css');

    esriLoader.loadModules([
      'esri/Map',
      'esri/views/MapView'
    ])
      .then(function([Map, MapView]) {
        new MapView({
          container: 'mapViewNode',
          map: new Map({
            basemap: 'streets'
          }),
          zoom: 4,
          center: [15, 65]
        });
      });
  }
}
