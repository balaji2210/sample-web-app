import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container text-white p-3">
        <h4>About Our Cryptocurrency Platform</h4>

        <h5 className={` ${styles.text} mt-3`}>
          we are driven by a relentless passion for innovation and a commitment
          to making the world of cryptocurrency accessible to everyone. Our
          journey began, and since then, we have been on a mission to empower
          individuals and businesses to harness the full potential of blockchain
          technology.
        </h5>
        <h4 className="mt-3">Our Mission</h4>
        <h5 className={` ${styles.text} mt-3`}>
          we are driven by a relentless passion for innovation and a commitment
          to making the world of cryptocurrency accessible to everyone. Our
          journey began, and since then, we have been on a mission to empower
          individuals and businesses to harness the full potential of blockchain
          technology.
        </h5>
      </div>
    </div>
  );
};

export default About;
