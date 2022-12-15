const { UP_DOWN } = require('./Utils/Constant');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < size; i++) {
      bridge.push(this.makeRandomBridge(generateRandomNumber));
    };
    
    return bridge;
  },

  makeRandomBridge(generateRandomNumber) {
    if (String(generateRandomNumber()) === '1') {
      return UP_DOWN.up;
    };

    return UP_DOWN.down;
  },
};

module.exports = BridgeMaker;
