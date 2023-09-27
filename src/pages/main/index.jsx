import { PostList } from "../../features/postList";
import styles from "./index.module.css";

export const Main = () => {

  return( 
  <div className={styles.container}>
    <PostList />
  </div>);
};
