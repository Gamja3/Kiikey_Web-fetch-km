import { Link, Outlet } from "react-router-dom";
import styles from "./BaseLayout.module.css";

const BaseLayoutPage = () => {
  console.log("MainLayout");
  return (
    <div>


      {/* <Link to={"main/about"}>about</Link>
        <Link to={"account"}>account</Link> */}

      <Outlet />
      <div className={styles.fixed_navi}>
        <div>
          <Link to={"main"}>
            <div className={styles.fixed_navi_img}>
              <img src="/img/icon/home_icon.png" />
            </div>
            <div className={styles.fixed_navi_title}>홈</div>
          </Link>
        </div>
        <div>
          <Link to={"order"}>
            <div className={styles.fixed_navi_img}>
              <img src="./img/icon/search-icon.png" />
            </div>
            <div className={styles.fixed_navi_title}>검색</div>
          </Link>
        </div>
        <div>
          <a href="/main.do">
            <div className={styles.fixed_navi_img}>
              <img src="./img/icon/talk_icon.png" />
            </div>
            <div className={styles.fixed_navi_title}>톡</div>
          </a>
        </div>
        <div>
          <a href="/mypage/mypageFredit.do">
            <div className={styles.fixed_navi_img}>
              <img src="./img/icon/sns_icon.png" />
            </div>
            <div className={styles.fixed_navi_title}>SNS</div>
          </a>
        </div>
        <div>
          <Link to={"mykiikey"}>
            <div className={styles.fixed_navi_img}>
              <img src="img/icon/my_icon.png" />
            </div>
            <div className={styles.fixed_navi_title}>마이키키</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BaseLayoutPage;
