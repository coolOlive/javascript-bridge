const { Console } = require('@woowacourse/mission-utils');
const { ANSWER, SUCCESS } = require('../Utils/Constant');
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
  tryCount = 1;
  isSuccess = SUCCESS.fail;

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
    Console.print(this.bridge)
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
    switch (this.BridgeGame.move(this.userMoving)) {
      case 0:
        return this.notCorrect();
      case 1:
        return this.allCorrect();
      case 2:
        return this.correct();
    };
  };
  
  notCorrect() {
    OutputView.printMap(this.userMoving, ANSWER.no);
    //재시도 묻기
  };

  allCorrect() {
    this.isSuccess = SUCCESS.success;
    // OutputView.printResult(this.userMoving, this.isSuccess, this.tryCount);
    // this.inputUpDown();
  };

  correct() {
    OutputView.printMap(this.userMoving, ANSWER.ok);
    this.inputUpDown();
  };

};

module.exports = BridgeController;
