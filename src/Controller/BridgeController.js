const { ANSWER, SUCCESS } = require('../Utils/Constant');
const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');
const SizeCheck = require('../Models/SizeCheck');
const UpDownCheck = require('../Models/UpDownCheck');
const RetryCheck = require('../Models/RetryCheck');
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
    this.RetryCheck = new RetryCheck();
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
    this.askRetry();
  };

  allCorrect() {
    this.isSuccess = SUCCESS.success;
    return this.finalResultPrint();
  };

  correct() {
    OutputView.printMap(this.userMoving, ANSWER.ok);
    this.inputUpDown();
  };

  askRetry() {
    InputView.readGameCommand(retryAnswer => {
      this.isValidRetryAnswer(this.RetryCheck.validate(retryAnswer), retryAnswer);
    });
  };

  isValidRetryAnswer(isValid, retryAnswer) {
    if (!isValid) {
      return this.askRetry();
    };
    
    return this.isRetryOrFinish(this.BridgeGame.retry(retryAnswer));
  };

  isRetryOrFinish(retryAnswer) {
    if (retryAnswer === 1) {
      this.tryCount += 1;
      this.userMoving = [];
      return this.inputUpDown();
    };

    return this.finalResultPrint();
  };

  finalResultPrint() {
    OutputView.printResult(this.userMoving, this.isSuccess, this.tryCount);
  };

};

module.exports = BridgeController;
