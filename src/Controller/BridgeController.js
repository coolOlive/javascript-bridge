const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');
const SizeCheck = require('../Models/SizeCheck');
const UpDownCheck = require('../Models/UpDownCheck');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeGame = require('../Models/BridgeGame');

class BridgeController {
  size;
  bridge;

  constructor() {
    this.SizeCheck = new SizeCheck();
    this.UpDownCheck = new UpDownCheck();
    OutputView.startMessage();
  };

  inputSize() {
    InputView.readBridgeSize(size => {
      this.isValidSize(this.SizeCheck.validate(size), size);
    });
  };

  isValidSize(isValid, size) {
    if (!isValid) {
      return this.inputSize();
    };

    this.size = size;
    return this.makeBridge();
  };

  makeBridge() {
    this.bridge = BridgeMaker.makeBridge(this.size, BridgeRandomNumberGenerator.generate);
    this.BridgeGame = new BridgeGame(this.bridge);
    this.inputUpDown();
  };

  inputUpDown() {
    InputView.readMoving(upDown => {
      this.isValidUpDown(this.UpDownCheck.validate(upDown), upDown);
    });
  };

  isValidUpDown(isValid, upDown) {
    if (!isValid) {
      return this.inputUpDown();
    };

    return this.BridgeGame.move(upDown);
  };

};

module.exports = BridgeController;