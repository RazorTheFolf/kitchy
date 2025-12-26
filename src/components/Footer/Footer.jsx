import { t } from "i18next";
import React from "react";
import { withTranslation } from "react-i18next";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footer_container}>
        <section className={styles.services}>
          <h2>{t("components.footer.services.title")}</h2>
          <div className={styles.section_container}>
            <a href="#">{t("components.footer.services.legal_notice")}</a>
            <a href="#">{t("components.footer.services.data_protection")}</a>
          </div>
        </section>
        <section className={styles.newsletter}>
          <h2>{t("components.footer.newsletter.title")}</h2>
          <div className={styles.section_container}>
            <a href="#">
              {t("components.footer.newsletter.enter_email_address")}
            </a>
            <a href="#">{t("components.footer.newsletter.sign_up")}</a>
          </div>
        </section>
        <section className={styles.footer_logo}>Kitchy</section>
        <section className={styles.socials}>
          <h2>{t("components.footer.socials.title")}</h2>
          <div className={styles.section_container}>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </section>
        <section className={styles.contact}>
          <h2>Contact</h2>
          <div className={styles.section_container}>
            <a href="#">25 Rue Claude Tillier, 75012 Paris</a>
            <a href="mailto:contact@">contact@kitchy.com</a>
          </div>
        </section>
      </div>
      <div className={styles.footer_sign}>
        {t("components.footer.signature")}
        <span>@thekitchyteam</span>
      </div>
    </footer>
  );
}

export default withTranslation()(Footer);
