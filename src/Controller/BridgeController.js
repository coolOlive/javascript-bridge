const { Console } = require('@woowacourse/mission-utils');
const { ANSWER } = require('../Utils/Constant');
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
  userMoving = [];

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

    this.userMoving.push(upDown);
    return this.answerCheck();
  };

  answerCheck() {
    Console.print(this.bridge)
    Console.print(this.userMoving)
    Console.print(this.BridgeGame.move(this.userMoving))
  };
  // answerCheck() {
  //   switch (this.BridgeGame.move(this.userMoving)) {
  //     case 0:
  //       return this.notAnswerMoving();
  //     case 1:
  //       return this.repeatMoving();
  //     case 2:
  //       return this.finalAnswer(ANSWER.ok);
  //   };
  // };

};

module.exports = BridgeController;
