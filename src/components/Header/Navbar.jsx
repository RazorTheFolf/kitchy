import { withTranslation } from "react-i18next";
import styles from "./Navbar.module.css";
import { Icon } from "@iconify/react";
import i18next, { t } from "i18next";
import { Link } from "react-router";
import { useEffect, useState } from "react";

function Navbar() {
  const [buttonSwitchLang, setButtonSwitchLang] = useState(<></>);

  useEffect(() => {
    if (i18next.language === "fr-FR") {
      setButtonSwitchLang(
        <>
          <Icon icon="twemoji:flag-united-kingdom" width="16" height="16" />
          EN
        </>
      );
    } else if (i18next.language === "en-GB") {
      setButtonSwitchLang(
        <>
          <Icon icon="twemoji:flag-france" width="16" height="16" />
          FR
        </>
      );
    }
  }, [i18next.language]);

  function SwitchLang() {
    if (i18next.language === "fr-FR") {
      i18next.changeLanguage("en-GB");
    } else if (i18next.language === "en-GB") {
      i18next.changeLanguage("fr-FR");
    }
  }

  return (
    <header>
      <nav>
        <Link to="/" className={styles.nav_logo}>
          Kitchy
        </Link>
        <div className={styles.nav_links}>
          <Link to="/shop">{t("components.navbar.shop")}</Link>
          <Link to="/contact">{t("components.navbar.get_in_touch")}</Link>
          <Link to="/about">{t("components.navbar.about_us")}</Link>
        </div>
        <div className={styles.nav_shortcuts}>
          <button className={styles.lang_btn} onClick={() => SwitchLang()}>
            {buttonSwitchLang}
          </button>
          <a href="#">
            <Icon icon="iconamoon:search-duotone" width="26" height="26" />
          </a>
          <Link to="/shop/cart">
            <Icon
              icon="iconamoon:shopping-bag-duotone"
              width="27"
              height="27"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default withTranslation()(Navbar);
