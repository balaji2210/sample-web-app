import Card from "../card/Card";

import styles from "./Blogs.module.css";

const Blogs = () => {
  return (
    <div className={`${styles.blogs} p-3 `}>
      <div className={`${styles.wrapper} container `}>
        {new Array(10).fill("x")?.map((item) => (
          <Card key={item} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
