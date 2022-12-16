const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/Constant');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.bridgeSize, callback);
  },
  
  readMoving(callback) {
    Console.readLine(MESSAGE.chooseUpDown, callback);
  },
  
  readGameCommand(callback) {
    Console.readLine(MESSAGE.chooseRetry, callback);
  },
};

module.exports = InputView;
