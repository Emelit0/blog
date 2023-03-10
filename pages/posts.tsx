import Post from "../components/Post";
import { getSortedPostsData } from "../utils/posts";

export default function Home({ posts }: any) {
  return (
    <div>
      <title>Dev Blog</title>

      <div className="posts">
        {posts.map((post: any, index: number) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      posts: allPostsData,
    },
  };
}
