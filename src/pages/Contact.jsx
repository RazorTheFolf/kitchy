import React from "react";
import { Icon } from "@iconify/react";
import { withTranslation } from "react-i18next";
import { t } from "i18next";
import styles from "./styles/Contact.module.css";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.main_title}>{t("page_content.contact.title")}</h1>
        <section className={styles.formulaire}>
          <section className={styles.gauche}>
            <p>{t("page_content.contact.sub_title_top")}</p>
            <p className={styles.t1}>
              {t("page_content.contact.sub_title_bot")}
            </p>
            <section className={styles.img}></section>
          </section>
          <section className={styles.droite}>
            <form>
              <section className={styles.prenometnom}>
                <div>
                  <label for="prenom">
                    {t("page_content.contact.form.first_name")}
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label for="nom">
                    {t("page_content.contact.form.last_name")}
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    placeholder={t("page_content.contact.form.last_name_ph")}
                  />
                </div>
              </section>

              <section className={styles.emailettelephone}>
                <div>
                  <label for="email">
                    {t("page_content.contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t("page_content.contact.form.email_ph")}
                  />
                </div>
                <div>
                  <label for="telephone">
                    {t("page_content.contact.form.phone_number")}
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    pattern="^[0-9]{10}$"
                    title="Numéro de téléphone à 10 chiffres"
                    placeholder={t("page_content.contact.form.phone_number_ph")}
                  />
                </div>
              </section>

              <section className={styles.message}>
                <div>
                  <label for="message">
                    {t("page_content.contact.form.message")}
                  </label>
                  <textarea
                    className={styles.form_texta}
                    id="message"
                    name="message"
                    required
                    placeholder={t("page_content.contact.form.message_ph")}
                  ></textarea>
                </div>
              </section>

              <button className={styles.form_btn} type="submit">
                {t("page_content.contact.form.send_btn")}
                <Icon
                  icon="iconamoon:arrow-right-1-light"
                  width="27"
                  height="27"
                />
              </button>
            </form>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default withTranslation()(Contact);
