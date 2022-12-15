const { ERROR } = require('../Utils/Constant');
const OutputView = require('../Views/OutputView');

class SizeCheck {
  validate(size) {
    try {
      this.checkRangeAndWord(size);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    };
  };

  checkRangeAndWord(size) {
    this.sizeWord(size);
    this.sizeRange(size);
  };

  sizeWord(size) {
    if (size.match(/[^0-9]/g)) {
      throw (ERROR.sizeWord);
    };
  };

  sizeRange(size) {
    if (size < 3 || size > 20) {
      throw (ERROR.sizeRange);
    };
  };
};

module.exports = SizeCheck;
