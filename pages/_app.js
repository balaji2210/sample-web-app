import NavBar from "@/components/navBar/NavBar";
import "../styles/globals.css";
import Footer from "@/components/footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <ToastContainer />
      <Footer />
    </>
  );
}
