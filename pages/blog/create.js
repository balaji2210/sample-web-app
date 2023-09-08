import BlogForm from "@/components/blogForm/BlogForm";
import withAuth from "@/utility/withAuth";

const index = () => {
  return <BlogForm />;
};

export default withAuth(index);
