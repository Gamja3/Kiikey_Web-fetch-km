let backendHost;

const hostname = window && window.location && window.location.hostname;
if (hostname.includes("kiikey")) backendHost = "https://www.kiikey.com/api";
else if (hostname.includes("godseun"))
  backendHost = "http://www.godseun.com/api";
else backendHost = `http://${hostname}:3000/api`;

export const API_BASE_URL = `${backendHost}`;

export const AD_API_PATH = "/ads";
export const USER_API_PATH = "/user/account";
export const USER_ORDER_API_PATH = "/user/order";
export const USER_SHOP_API_PATH = "/user/shop";
export const ORDER_SHOP_API_PATH = "/order/shop";
export const ORDER_JBG_SHOP_API_PATH = "/order/shopJbg";
export const ORDER_PAYREQUEST_API_PATH = "/order/payRequest";
export const ORDER_PAYRESULT_API_PATH = "/order/payResult";

export const SHOP_IMG_PATH = "https://api.kiikey.com/img/shop/";
export const SHOP_CUSTOM_IMG_PATH = "https://api.kiikey.com/img/";
export const SHOP_COSMETICS_IMG_PATH = "https://api.kiikey.com/img/cosmetics/";
export const MENU_IMG_PATH = "https://api.kiikey.com/img/menu/";
export const REVIEW_IMG_PATH = "https://api.kiikey.com/img/review/";
export const POPUP_NOTICE_IMG_PATH = "https://api.kiikey.com/img/notice/";
export const EVENT_SLAVE_IMG_PATH = "https://api.kiikey.com/img/event/slave/";
export const EVENT_APPLY_IMG_PATH =
  "https://api.kiikey.com/img/event/applyImg/";

export const SHOP_C2_IDX_MAP = {
  beauty: 4,
  clothes: 15,
};

export const SHOP_C3_IDX_MAP = {
  cosmetics: 91,
  scalp: 92,
  makeup: 93,
  beauty: 110,
  nail: 111,
  tatto: 112,
  waxing: 113,
  aesthetics: 114,
  diet: 115,
  wedding: 116,
  hair: 90,
  jbg: 46,
};

// 특수문자
// eslint-disable-next-line
export const NOT_SPECIAL_CODE_REG = /[~!@#$%";'^,&*()_+|</>=>`?:{[\}]/g;
// 공백
export const NOT_SPACE_REG = /^\s+|\s+$/g;

export const USER_ID_MIN_LENGTH = 4;
export const USER_ID_MAX_LENGTH = 25;

export const USER_NAME_MIN_LENGTH = 2;
export const USER_NAME_MAX_LENGTH = 10;

export const USER_PASSWORD_MIN_LENGTH = 8;

export const USER_ID_REG = /^[a-zA-Z]+[a-zA-Z0-9]{3,24}$/g;
export const USER_NAME_REG = /^[가-힣a-zA-Z]$/g;

export const PHONE_REG = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
export const EIGHT_BIRTH_REG =
  /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;

export const DEFAULT_GUEST_NAME = "솜솜";
export const DEFAULT_POINT_VALUE = "7700000";
export const DESKTOP_VIEW_COUNT = 6;
export const MOBILE_VIEW_COUNT = 4;
export const DEFAULT_POINT_PANNEL_VALUE = Array.from(DEFAULT_POINT_VALUE);
export const DEFAULT_POINT_PANNEL_INIT_VALUE = [
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
];
export const DEFAULT_POINT_PANNEL_LENGTH = DEFAULT_POINT_VALUE.length;

export const DEFAULT_ADS_VIEW_COUNT = 0;
export const DEFAULT_ADS_TOTAL_VIEW_COUNT = 30;

export const USER_DTO = {
  myPoint: DEFAULT_POINT_VALUE,
  mbName: DEFAULT_GUEST_NAME,
  viewCnt: DEFAULT_ADS_VIEW_COUNT,
  totalViewCnt: DEFAULT_ADS_TOTAL_VIEW_COUNT,
  isLogin: false,
  adList: [],
  gameList: [],
};

export const KAKAO_ADDR_API_URL =
  "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

export const debounceFunction = (callback, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};
