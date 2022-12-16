const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ANSWER, SUCCESS } = require('../Utils/Constant');
const MakeMap = require('../Models/MakeMap');

const OutputView = {
  startMessage() {
    Console.print(MESSAGE.gameStart);
  },

  printError(error) {
    Console.print(error);
  },
  
  printMap(userMoving, isAnswer) {
    Console.print(MakeMap.makePrintMap(userMoving, isAnswer));
  },
  
  printResult(userMoving, failOrSuccess, tryCount) {
    const isOkOrNot = (failOrSuccess === SUCCESS.success) ? ANSWER.ok : ANSWER.no;
    
    Console.print(MESSAGE.finalMessage);
    OutputView.printMap(userMoving, isOkOrNot);
    Console.print(`${MESSAGE.failOrSuccess}${failOrSuccess}`);
    Console.print(`${MESSAGE.tryCount}${tryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
