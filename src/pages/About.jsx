import React from "react";
import styles from "./styles/About.module.css";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { withTranslation } from "react-i18next";
import { t } from "i18next";

function About() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.about_row}>
          <div className={`${styles.about_card} ${styles.about_text}`}>
            <h2>{t("page_content.about.title")}</h2>
            <p>{t("page_content.about.sub_title")}</p>
          </div>

          <div className={`${styles.about_card} ${styles.about_image}`}>
            <img src="./images/about-img.png" alt="À propos Kitchy" />
            <span className={styles.label}>
              {t("page_content.about.image_title")}
            </span>
          </div>
        </section>

        <section className={styles.mission}>
          <h2>Mission</h2>
          <p>{t("page_content.about.mission.text")}</p>
          <div className={styles.icons}>
            <span>📦</span>
            <span>👨‍🍳</span>
            <span>💰</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default withTranslation()(About);
