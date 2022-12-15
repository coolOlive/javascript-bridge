const { ERROR } = require('../Utils/Constant');
const OutputView = require('../Views/OutputView');

class UpDownCheck {
  validate(upDown) {
    try {
      this.checkSizeAndWord(upDown);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    };
  };

  checkSizeAndWord(upDown) {
    this.upDownWord(upDown);
    this.upDownSize(upDown);
  };

  upDownWord(upDown) {
    if (!upDown.match(/[UD]/g)) {
      throw (ERROR.upDownWord);
    };
  };

  upDownSize(upDown) {
    if (upDown.length > 1) {
      throw (ERROR.upDownSize);
    };
  };
};

module.exports = UpDownCheck;
