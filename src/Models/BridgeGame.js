const { Console } = require('@woowacourse/mission-utils');

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
    // Console.print(movingCount, this.#bridge.length)
    if (movingCount === this.#bridge.length) {
      return 1;
    }

    return 2;
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {};
};

module.exports = BridgeGame;
