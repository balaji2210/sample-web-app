import { useState } from "react";
import styles from "./SignIn.module.css";

import { signIn } from "@/apis/signin";
import { getUserData } from "@/apis/userData";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn({
      email,
      password,
    });

    if (result?.success && typeof window !== "undefined") {
      toast.success("Login Success", {
        theme: "dark",
        autoClose: 2000,
        position: "top-right",
      });
      localStorage?.setItem("token", result?.data?.data?.token);
      const response = await getUserData();
      if (response?.success) {
        router?.push(`/blog/create`);
      }
    } else {
      toast.error("Error", {
        theme: "dark",
        autoClose: 2000,
        position: "top-right",
      });
    }
  };

  return (
    <div className={styles.signin}>
      <div className={styles.card}>
        <form className="col-lg-3" onSubmit={handleSubmit}>
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
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
