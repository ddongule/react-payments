const COLOR = {
  MAIN: {
    MINT: '#04c09e',
    WHITE: '#FFFFFF',
    GLOBAL_FONT: '#525252',
    BG: '#F7F9FA',
    BORDER: '#737373',
  },

  CARD: {
    DEFAULT: '#d2d2d2',
    RED: '#E24141',
    BLUE: '#547cE4',
    GREEN: '#73bc6D',
    HOTPINK: '#DE59B9',
    PINK: '#E76E9A',
    ORANGE: '#F37D3B',
    YELLOW: '#FBCD58',
    PLUS: '#575757',
    BOX_SHADOW: '#00000040',
  },

  INPUT: {
    DEFAULT_BG: '#ECEBF1',
    FONT: '#383838',
  },

  USIM: {
    BG: '#cbba64',
  },

  MODAL: {
    BG: 'rgba(0, 0, 0, 0.5)',
  },

  KEYBOARD: {
    BG: '#efefef',
    BORDER: '#ddd',
  },

  CVC: {
    FONT: '#969696',
    BORDER: '#bababa',
  },
};

const CARD = {
  포코: COLOR.CARD.RED,
  준: COLOR.CARD.BLUE,
  공원: COLOR.CARD.GREEN,
  브랜: COLOR.CARD.HOTPINK,
  로이드: COLOR.MAIN.MINT,
  도비: COLOR.CARD.PINK,
  콜린: COLOR.CARD.ORANGE,
  썬: COLOR.CARD.YELLOW,
};

const FONT_WEIGHT = {
  LIGHT: '400',
  NORMAL: '500',
  BOLD: '700',
};

const FONT_SIZE = {
  MINI: '0.75rem',
  SMALL: '0.875rem',
  NORMAL: '1rem',
  LARGE: '1.125rem',
  XLARGE: '1.3rem',
  XLLARGE: '2rem',
  XXLARGE: '2.5rem',
};

export { CARD, FONT_SIZE, FONT_WEIGHT, COLOR };
