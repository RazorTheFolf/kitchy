import React from "react";
import { withTranslation } from "react-i18next";
import styles from "./Navbar.module.css";
import { Icon } from "@iconify/react";
import { t } from "i18next";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/" className={styles.nav_logo}>
        Kitchy
      </Link>
      <div className={styles.nav_links}>
        <Link to="/shop">{t("components.navbar.shop")}</Link>
        <Link to="/contact">{t("components.navbar.get_in_touch")}</Link>
        <Link to="/about-us">{t("components.navbar.about_us")}</Link>
      </div>
      <div className={styles.nav_shortcuts}>
        <a href="#">
          <Icon icon="iconamoon:search-duotone" width="26" height="26" />
        </a>
        <Link to="/shop/cart">
          <Icon icon="iconamoon:shopping-bag-duotone" width="27" height="27" />
        </Link>
      </div>
    </nav>
  );
}

export default withTranslation()(Navbar);
