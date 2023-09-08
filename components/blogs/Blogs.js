import { useEffect, useState } from "react";
import Card from "../card/Card";

import styles from "./Blogs.module.css";
import { getBlogs } from "@/apis/getBlogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getData = async () => {
    const result = await getBlogs();

    setBlogs(result?.data?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`${styles.blogs} p-3 `}>
      <div className={`${styles.wrapper} container `}>
        {blogs?.map((item, index) => (
          <Card
            key={index}
            title={item?.title}
            description={item?.description}
            image={item?.image?.secure_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
