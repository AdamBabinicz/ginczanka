import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>urodziny</h4>
              <p>22 marca 1917</p>
              <p>Kijów</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>śmierć</h4>
              <CopyToClipboard
                text="https://pl.wikipedia.org/wiki/Zuzanna_Ginczanka"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert(
                      "Jesienią 1944 roku wskutek kolejnego donosu sąsiadów została aresztowana przez Gestapo i wkrótce później rozstrzelana na dziedzińcu więzienia przy Montelupich."
                    );
                  }}
                >
                  wiosna 1944 KL Płaszów (?)
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>lektury</h4>
              <CopyToClipboard
                text="https://wolnelektury.pl/katalog/autor/zuzanna-ginczanka"
                className="hover"
              >
                <a
                  href="https://wolnelektury.pl/katalog/autor/zuzanna-ginczanka"
                  target="_blank"
                >
                  <p
                    style={{ cursor: "pointer" }}
                    className="clipboard"
                    onClick={() => {
                      alert(
                        "Ballada o Żydziaku, Mętne historie, Na zdarzenie z życia prywatnego, *** (Non omnis moriar), O centaurach, Panteistyczne, Powrót, Przebudzenie, Przypadek, Rozbrat z przedwiośniem, Rozmówka o przyszłości, Rozprawa, Świętokradztwo, Zabobon"
                      );
                    }}
                  >
                    link
                  </p>
                </a>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>2021</p>
          </div>
        </div>
        <ButtonsBottom left={"/project-7"} />
      </motion.div>
    </main>
  );
};

export default Contact;
