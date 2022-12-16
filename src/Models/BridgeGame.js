class BridgeGame {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  };
  
  move(userMoving) {
    let movingCount = userMoving.length;
    if (this.#bridge[movingCount - 1] === userMoving[movingCount - 1]) {
      return this.isLastAnswer(movingCount);
    };

    return 0;
  };

  isLastAnswer(movingCount) {
    if (movingCount === this.#bridge.length) {
      return 1;
    }

    return 2;
  };
  
  retry(retryAnswer) {
    if (String(retryAnswer) === 'R') {
      return 1;
    };

    return 0;
  };
};

module.exports = BridgeGame;
