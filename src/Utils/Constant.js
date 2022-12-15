const MESSAGE = {
  gameStart: '다리 건너기 게임을 시작합니다.\n',
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  chooseUpDown: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  chooseRetry: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  finalMessage: '최종 게임 결과',
  failOrSuccess: '게임 성공 여부: ',
  tryCount: '총 시도한 횟수: ',
};

const ERROR = {
  sizeRange: '[ERROR] 사이즈 범위는 3에서 20 사이의 정수입니다.',
  sizeWord: '[ERROR] 사이즈에는 정수만 입력해야 합니다.',
  upDownWord: '[ERROR] U 또는 D만 입력 가능합니다.',
  upDownSize: '[ERROR] 한 글자만 입력 가능합니다.',
};

const UP_DOWN = {
  up: 'U',
  down: 'D',
};

const ANSWER = {
  ok: ' O ',
  no: ' X ',
  blank: '   ',
};

const SUCCESS = {
  success: '성공',
  fail: '실패',
};

module.exports = {
  MESSAGE,
  ERROR,
  UP_DOWN,
  ANSWER,
  SUCCESS,
};