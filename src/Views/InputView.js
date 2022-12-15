const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/Constant');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.bridgeSize, callback);
  },
  
  readMoving(callback) {
    Console.readLine(MESSAGE.chooseUpDown, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
