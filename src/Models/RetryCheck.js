const { ERROR } = require('../Utils/Constant');
const OutputView = require('../Views/OutputView');

class RetryCheck {
  validate(retry) {
    try {
      this.checkRetrySizeAndWord(retry);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    };
  };

  checkRetrySizeAndWord(retry) {
    this.retryWord(retry);
    this.retrySize(retry);
  };

  retryWord(retry) {
    if (!retry.match(/[RQ]/g)) {
      throw (ERROR.retryWord);
    };
  };

  retrySize(retry) {
    if (retry.length > 1) {
      throw (ERROR.retrySize);
    };
  };
};

module.exports = RetryCheck;
