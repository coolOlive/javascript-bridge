const { UP_DOWN, ANSWER } = require('../Utils/Constant');

const MakeMap = {
  upBridge: [],
  downBridge: [],

  makePrintMap(userMoving, isAnswer) {
    for (let i = 0; i < userMoving.length - 1; i++) {
      MakeMap.inputOX(userMoving[i], ANSWER.ok);
    };

    return MakeMap.inputLastOX(userMoving[userMoving.length - 1], isAnswer);
  },

  inputOX(userMoving, isAnswer) {
    if (userMoving === UP_DOWN.up) {
      MakeMap.upBridge.push(isAnswer);
      return MakeMap.downBridge.push(ANSWER.blank);
    };

    MakeMap.upBridge.push(ANSWER.blank);
    return MakeMap.downBridge.push(isAnswer);
  },

  inputLastOX(userMoving, isAnswer) {
    MakeMap.inputOX(userMoving, isAnswer);
    return MakeMap.finalMap();
  },

  finalMap() {
    let movingMap = '';
    movingMap += `[${MakeMap.upBridge.join('|')}]\n`;
    movingMap += `[${MakeMap.downBridge.join('|')}]`;
    MakeMap.clearMap();
    return movingMap;
  },

  clearMap() {
    MakeMap.upBridge = [];
    MakeMap.downBridge = [];
  },
};

module.exports = MakeMap;
