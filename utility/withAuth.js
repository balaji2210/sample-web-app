import { useRouter } from "next/router";

const withAuth = (Component) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const router = useRouter();
      const userID = localStorage?.getItem("user_id");

      if (!userID) {
        router.replace("/");
        return null;
      }

      return <Component {...props} />;
    }

    return null;
  };
};

export default withAuth;
