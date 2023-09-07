import Footer from "../footer/Footer";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <section className={styles.home}>
        <div className="container">
          <section className="container">
            <div className="row text-white">
              <div className={`${styles.content} col-lg-6 fs-1 `}>
                <div>
                  Cryptocurrency Platform
                  <div className={` ${styles.subtext} pt-3`}>
                    A comprehensive cryptocurrency solution to track trading and
                    ad metrics, fine-tune ad campaigns, and strategically expand
                    your presence in the crypto market.
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <img
                  className="ms-lg-5"
                  src="https://lambent-axolotl-8a21ee.netlify.app/static/media/bg.68dccac4d01b1bd666f1ccfdff27d3d5.svg"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
