import {
  API_BASE_URL,
  ORDER_PAYREQUEST_API_PATH,
  ORDER_PAYRESULT_API_PATH,
  ORDER_SHOP_API_PATH,
  USER_API_PATH,
  USER_ORDER_API_PATH,
  USER_SHOP_API_PATH,
} from "App-config";
import { call, customAlert } from "service/ApiService";

export const setOrder = async (orderDTO) => {
  orderDTO.action = "setOrder";
  try {
    const response = await call(ORDER_SHOP_API_PATH, "POST", orderDTO);
    if (!response.success) {
      console.error("setOrder fail:", response.msg);
      customAlert(response.msg);
    }
    return response;
  } catch (error) {
    console.error("setOrder err:", error);
    customAlert(error.msg);
    return false;
  }
};

export const getShopReview = async (sIdx) => {
  try {
    const response = await call(ORDER_SHOP_API_PATH, "POST", { action: "getShopReview", sIdx: sIdx });
    if (!response.success) {
      console.error("getShopReview fail:", response.msg);
      customAlert(response.msg);
    }
    return response;
  } catch (error) {
    console.error("getShopReview err:", error);
    customAlert(error.msg);
    return false;
  }
};

export const writeReview = async (formData) => {
  const response = await call(USER_SHOP_API_PATH, "POST", formData, true);
  return response;
};

export const paySuccess = async (formData) => {
  try {
    const response = await call(ORDER_PAYRESULT_API_PATH, "POST", formData);
    if (!response.success) {
      console.error("paySuccess fail:", response.msg);
      customAlert(response.msg);
    }
    return response;
  } catch (error) {
    console.error("paySuccess err:", error);
    customAlert(error.msg);
    return false;
  }
};

export const setInquire = async ({ s_idx, m_idx, iq_content, table_name }) => {
  const response = await call(ORDER_SHOP_API_PATH, "POST", {
    action: "setInquire",
    s_idx: s_idx,
    m_idx: m_idx,
    iq_content: iq_content,
    table_name: table_name,
  });
  return response;
};

export const getMenuDetail = async ({ s_idx, m_idx, table_name }) => {
  const response = await call(ORDER_SHOP_API_PATH, "POST", {
    action: "getMenuDetail",
    s_idx: s_idx,
    m_idx: m_idx,
    table_name: table_name,
  });
  return response;
};

export const getProdMenu = async (shopDTO) => {
  shopDTO.action = "getProdMenu";
  const response = await call(ORDER_SHOP_API_PATH, "POST", shopDTO);
  return response;
};

export const setBuyBasket = async (basketDTO) => {
  basketDTO.action = "setBuyBasket";
  const response = await call(ORDER_SHOP_API_PATH, "POST", basketDTO);
  return response;
};

export const setBasket = async (basketDTO) => {
  basketDTO.action = "setBasket";
  const response = await call(ORDER_SHOP_API_PATH, "POST", basketDTO);
  return response;
};

export const delBasket = async (basketDTO) => {
  basketDTO.action = "delBasket";
  const response = await call(ORDER_SHOP_API_PATH, "POST", basketDTO);
  return response;
};

export const delBasketConfirm = async (basketDTO) => {
  basketDTO.action = "delBasketConfirm";
  const response = await call(ORDER_SHOP_API_PATH, "POST", basketDTO);
  return response;
};

export const getPayBasket = async () => {
  const response = await call(ORDER_SHOP_API_PATH, "POST", { action: 'getPayBasket' });
  return response;
};

export const getBasket = async () => {
  const response = await call(ORDER_SHOP_API_PATH, "POST", { action: 'getBasket' });
  return response;
};

export const deleteOrder = async ({ od_idx }) => {
  const response = await call(USER_API_PATH, "POST", {
    action: "deleteOrder",
    od_idx: od_idx,
  });
  return response;
};

export const cancelOrder = async ({ od_idx_list, cancelType, basket_list }) => {
  const response = await call(USER_API_PATH, "POST", {
    action: "cancelOrder",
    od_idx_list: od_idx_list,
    cancel_type: cancelType,
    basket_list: basket_list
  });
  return response;
};

export const getOrderDetail = async ({ od_idx }) => {
  const response = await call(USER_ORDER_API_PATH, "POST", {
    action: "getOrderDetail",
    od_idx: od_idx,
  });
  return response;
};

export const getOrderHistory = async () => {
  try {
    const response = await call(USER_API_PATH, "POST", {
      action: "getOrderHistoryList",
    });
    if (!response.success) {
      console.error("getOrderHistoryList fail:", response.msg);
      customAlert(response.msg);
    }
    return response;
  } catch (error) {
    console.error("getOrderHistoryList err:", error);
    customAlert(error.msg);
    return false;
  }
};

export const getShopInfo = async (sIdx) => {
  try {
    const response = await call(ORDER_SHOP_API_PATH, "POST", {
      action: "getShopInfo",
      sIdx: sIdx,
    });
    if (!response.success) {
      console.error("getShopInfo fail:", response.msg);
      customAlert(response.msg);
    }
    return response;
  } catch (error) {
    console.error("getShopInfo err:", error);
    customAlert(error.msg);
    return false;
  }
};

export const getShopKeywordList = async (searchKeyword) => {
  try {
    const response = await call(ORDER_SHOP_API_PATH, "POST", {
      action: "getShopKeywordList",
      searchKeyword: searchKeyword,
    });
    if (!response.success) {
      console.error("getShopInfo fail:", response.msg);
      customAlert(response.msg);
    }
    return response;
  } catch (error) {
    console.error("getShopInfo err:", error);
    customAlert(error.msg);
    return false;
  }
};

export const getCateList = async () => {
  const response = await call(ORDER_SHOP_API_PATH, "POST", {
    action: "getCateList",
  });
  return response;
};

export const selectPopKeyword = async () => {
  const response = await call(ORDER_SHOP_API_PATH, "POST", { action: "selectPopKeyword" });
  return response;
};

export const getShopList = async (shopDTO) => {
  shopDTO.action = "getShopList";
  const response = await call(ORDER_SHOP_API_PATH, "POST", shopDTO);
  return response;
};

export const setShopScrap = async (sIdx) => {
  const response = await call(ORDER_SHOP_API_PATH, "POST", {
    action: "setShopScrap",
    sIdx: sIdx,
  });
  return response;
};

export const getMemberInfo = async () => {
  const response = await call(ORDER_SHOP_API_PATH, "POST", {
    action: "getMemberInfo",
  });
  return response.data;
};

export const getShopMenuList = async (sIdx) => {
  const response = await call(ORDER_SHOP_API_PATH, "POST", {
    action: "getShopMenuList",
    sIdx: sIdx,
  });
  return response;
};

export const submitPayment = async (odIdxList) => {
  try {
    const response = await payCall(ORDER_PAYREQUEST_API_PATH, "POST", {
      action: "payRequest",
      od_idx_list: odIdxList,
    });
    return response;
  } catch (error) {
    console.error("test pay err:", error);
    customAlert(error.msg);
    return false;
  }
};

export const payCall = async (api, method, request) => {
  let options = {
    url: API_BASE_URL + api + ".php",
    method: method,
  };

  if (request) options.body = JSON.stringify(request);

  const response = await fetch(options.url, options);
  const json = await response.json();
  if (!json.success) {
    return Promise.reject(json);
  }
  return json;
};
