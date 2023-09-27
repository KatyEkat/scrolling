import { PostList } from "../../features/postList/ui";
import styles from "./index.module.css";

export const Main = () => {

  return( 
  <div className={styles.container}>
    <PostList />
  </div>);
};
