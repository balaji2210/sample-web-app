import { useState } from "react";
import styles from "./BlogForm.module.css";
import { createBlog } from "@/apis/postBlog";
import { toast } from "react-toastify";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e?.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    const result = await createBlog(formData);

    if (result?.success) {
      toast.success("Post Created", {
        theme: "dark",
        autoClose: 2000,
        position: "top-right",
      });
      setTitle("");
      setDescription("");
      setImage(null);
    } else {
      toast.error("Error", {
        theme: "dark",
        autoClose: 2000,
        position: "top-right",
      });
    }
  };

  return (
    <div className={styles.blog}>
      <div className={styles.card}>
        <form className="col-lg-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Title</label>
            <input
              type="text"
              required
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label
              for="exampleInputPassword1"
              className="form-label text-white"
            >
              Description
            </label>
            <textarea
              type="text"
              rows="6"
              required
              className="form-control"
              id="exampleInputPassword1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Upload Image</label>
            <input
              type="file"
              className="text-white"
              onChange={(e) => setImage(e?.target?.files?.[0])}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
