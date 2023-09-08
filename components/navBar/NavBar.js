import Image from "next/image";

import styles from "./NavBar.module.css";
import { logout } from "@/apis/logOut";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const NavBar = () => {
  const router = useRouter();

  const userId =
    typeof window !== "undefined" && localStorage?.getItem("user_id")
      ? true
      : false;

  const handleLogout = async () => {
    if (typeof window !== "undefined") {
      localStorage?.clear();
    }
    const response = await logout();
    if (response?.success) {
      router?.push("/");
    } else {
      toast?.error("Logout Error", {
        theme: "dark",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className={styles.nav}>
      <nav className={`navbar navbar-expand-lg container`}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            <Image
              src="https://img.freepik.com/premium-vector/nft-non-fungible-token-nonfungible-tokens-icon-covering-concept-nft-hightech-technology-symbol_662353-136.jpg?w=2000"
              width="50"
              height="50"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="/blogs">
                  Blog
                </a>
              </li>
              {userId ? (
                <li className="nav-item">
                  <a className="nav-link active text-white" href="/blog/create">
                    Create
                  </a>
                </li>
              ) : null}
              {!userId ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link active text-white" href="/signup">
                      Signup
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active text-white" href="/signin">
                      SignIn
                    </a>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    style={{ cursor: "pointer" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
