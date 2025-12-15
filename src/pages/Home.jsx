import React from "react";
import styles from "./styles/Home.module.css";
import Navbar from "../components/Header/Navbar";
import { Icon } from "@iconify/react";
import { withTranslation } from "react-i18next";
import { t } from "i18next";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero_container}>
          <section className={styles.hero}>
            <h1>{t("page_content.home.hero_title")}</h1>
            <p>Kitchy</p>
          </section>
          <section className={styles.cta}>
            <div className={styles.product_info}>
              <div className={styles.product_tag}>Air Fryer</div>
              <p className={styles.product_name}>Moulinex Easy Fry Dual XXL</p>
              <p className={styles.product_price}>244,99€</p>
            </div>
            <img
              src="./images/products/moulinex_airfryer.png"
              className={styles.product_img}
              alt="Our newest product, Moulinex AirFryer"
            />
            <Link to="/shop" className={styles.shop_btn}>
              {t("page_content.home.cta_btn")}
              <Icon icon="iconamoon:arrow-right-1" width="28" height="28" />
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}

export default withTranslation()(Home);
