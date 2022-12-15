const BridgeController = require('./Controller/BridgeController');

class App {
  constructor() {
    this.gameStart = new BridgeController();
  };

  play() {
    this.gameStart.inputSize();
  };
};

const app = new App();
app.play();

module.exports = App;
