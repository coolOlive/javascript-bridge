const BridgeController = require('./Controller/BridgeController');

class App {
  play() {
    new BridgeController();
  };
};

const app = new App();
app.play();

module.exports = App;
