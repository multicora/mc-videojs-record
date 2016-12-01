module.exports = {
  name: 'ember-cli-videojs-record',

  included: function(app) {
    this._super.included(app);

    app.import('src/css/videojs.record.css');
    app.import('src/js/videojs.record.js');
  }
};