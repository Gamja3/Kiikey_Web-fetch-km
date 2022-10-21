import { getShopList } from "service/OrderService";
import React, { useEffect } from "react";
import styles from "./Order.module.css";

const Order = () => {
  useEffect(() => {
    console.log("컴포넌트 on");
    return () => {
      console.log("컴포넌트 off");
    };
  }, []);

  return (
    <div className={styles.Wrap}>
      <header className={styles.header}>
        <span className={styles.headerText}>
          <p>검색</p>
        </span>
      </header>
      <ul className={styles.orderMenuList}>
        <li>
          <div className={styles.orderListHead}>
            <span className={styles.listHeadText}>
              <p>요식업</p>
            </span>
            <button className={styles.orderListButton}>
              <img src="./img/btn.png" alt="버튼이미지" />
            </button>
          </div>
          <ul className={styles.menuListDetail} id="1">
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>장보고 밀키트</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>한식</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>아시안/양식</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>분식</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>치킨</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>피자</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>중식</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>일식/돈까스/회</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>족발/보쌈</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>야식/안주</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>찜/탕</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>도시락/반찬</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>패스트푸드/샐러드</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img src="./img/ic_chinese_food.png" alt="메뉴이미지" />
              </div>
              <span>카페/디저트</span>
            </li>
          </ul>
        </li>
        <li>
          <div className={styles.orderListHead}>
            <span className={styles.listHeadText}>
              <p>배달맛집</p>
            </span>
            <button className={styles.orderListButton}>
              <img src="./img/btn.png" alt="버튼이미지" />
            </button>
          </div>
          <ul className={styles.menuListDetail1} id="4">
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_menu_beauty.a3ffaa718632068d1ae0.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>뷰티</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_menu_cosmetics.c73527bb0fcb2b4f1c60.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>화장품</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_self_shop.5d9c97936890b3968086.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>헤어</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_menu_nail.6db1d5274f3f1cf3e01f.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>네일</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_menu_tattoo.845cec9a49cbcf9aae88.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>타투</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_menu_waxing.b80611aa2134c61ebea8.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>왁싱</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_menu_aesthetics.db0567a2f8365c72d0a3.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>에스테틱/스파</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_menu_diet.795f2e48cca1877d2087.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>다이어트</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_menu_wedding.643956104eee60611117.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>웨딩</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_menu_scalp.45f5774ec36b132a4f53.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>두피관리</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_menu_makeup.b2ca7f5992cceb8130ab.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>반영구화장</span>
            </li>
          </ul>
        </li>
        <li>
          <div className={styles.orderListHead}>
            <span className={styles.listHeadText}>
              <p>숨은맛집</p>
            </span>
            <button className={styles.orderListButton}>
              <img src="./img/btn.png" alt="버튼이미지" />
            </button>
          </div>
          <ul className={styles.menuListDetail1} id="15">
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_mans_clothing.59c5fad6660adcbd1b2b.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>남성복</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_womans_clothing.3cc2674ea24fd23335dc.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>여성복</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_kids_clothing.133b13e84f9288cf90be.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>유아동복</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_mountain_clothing.3be1a8c357b0de95c0e8.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>등산복</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_training.c9cceed0b0799f4292d4.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>운동복</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_sports_shoes.90b8891c1f7ef30f7f11.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>운동화</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_shoes.0460848606af6eaee5e9.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>구두</span>
            </li>
            <li>
              <div className={styles.detailImg}>
                <img
                  src="/static/media/ic_stuff.0957ece5d556d4c96418.png"
                  alt="메뉴이미지"
                />
              </div>
              <span>잡화</span>
            </li>
          </ul>
        </li>

        <li>
          <div className={styles.orderListHead}>
            <span className={styles.listHeadText}>
              <p>의류(한시간배송)</p>
            </span>
            <button className={styles.orderListButton}>
              <img src="./img/btn.png" alt="버튼이미지" />
            </button>
          </div>
          <ul className={styles.menuListDetail1} id="8"></ul>
        </li>
        <li>
          <div className={styles.orderListHead}>
            <span className={styles.listHeadText}>
              <p>의류 (택배)</p>
            </span>
            <button className={styles.orderListButton}>
              <img src="./img/btn.png" alt="버튼이미지" />
            </button>
          </div>
          <ul className={styles.menuListDetail1} id="8"></ul>
        </li>
        <li>
          <div className={styles.orderListHead}>
            <span className={styles.listHeadText}>
              <p>마트</p>
            </span>
            <button className={styles.orderListButton}>
              <img src="./img/btn.png" alt="버튼이미지" />
            </button>
          </div>
          <ul className={styles.menuListDetail1} id="8"></ul>
        </li>
        <li>
          <div className={styles.orderListHead}>
            <span className={styles.listHeadText}>
              <p>부동산 (매매/임대)</p>
            </span>
            <button className={styles.orderListButton}>
              <img src="./img/btn.png" alt="버튼이미지" />
            </button>
          </div>
          <ul className={styles.menuListDetail1} id="8"></ul>
        </li>
        <li>
          <div className={styles.orderListHead}>
            <span className={styles.listHeadText}>
              <p>부동산 (매매/임대)</p>
            </span>
            <button className={styles.orderListButton}>
              <img src="./img/btn.png" alt="버튼이미지" />
            </button>
          </div>
          <ul className={styles.menuListDetail1} id="8"></ul>
        </li>
        <li>
          <div className={styles.orderListHead}>
            <span className={styles.listHeadText}>
              <p>부동산 (매매/임대)</p>
            </span>
            <button className={styles.orderListButton}>
              <img src="./img/btn.png" alt="버튼이미지" />
            </button>
          </div>
          <ul className={styles.menuListDetail1} id="8"></ul>
        </li>
        <li>
          <div className={styles.orderListHead}>
            <span className={styles.listHeadText}>
              <p>부동산 (매매/임대)</p>
            </span>
            <button className={styles.orderListButton}>
              <img src="./img/btn.png" alt="버튼이미지" />
            </button>
          </div>
          <ul className={styles.menuListDetail1} id="8"></ul>
        </li>
      </ul>
      <div className={styles.InputWrap}>
        <input
          className={styles.Input}
          type="text"
          placeholder="음식명이나 매장명을 검색하세요."
        />
      </div>
    </div>
  );
};

export default Order;
