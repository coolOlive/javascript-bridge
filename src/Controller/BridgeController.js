const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');
const sizeCheck = require('../Models/sizeCheck');

class BridgeController {
  size;

  constructor() {
    this.sizeCheck = new sizeCheck();
    OutputView.startMessage();
    this.inputSize();
  }

  inputSize() {
    InputView.readBridgeSize(size => {
      this.isValideSize(this.sizeCheck.validate(size), size);
    });
  };

  isValideSize(isValid, size) {
    if (!isValid) {
      return this.inputSize();
    };

    this.size = size;
    return this.makeBridge();
  };

  makeBridge() {

  };

};

module.exports = BridgeController;