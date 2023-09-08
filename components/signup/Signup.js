import { useState } from "react";
import styles from "./Signup.module.css";
import { signUp } from "@/apis/signup";
import { useRouter } from "next/router";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signUp({
      name,
      email,
      password,
    });
    if (result?.success) {
      toast.success("Signup Success", {
        theme: "dark",
        autoClose: 2000,
        position: "top-right",
      });
      router?.push(`/signin`);
    } else {
      toast.error("Signup Error", {
        theme: "dark",
        autoClose: 2000,
        position: "top-right",
      });
    }
  };

  return (
    <div className={styles.signup}>
      <div className={styles.card}>
        <form className="col-lg-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-white">
              Name
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-white">
              Email address
            </label>
            <input
              type="email"
              required
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleInputPassword1"
              className="form-label text-white"
            >
              Password
            </label>
            <input
              type="password"
              required
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
