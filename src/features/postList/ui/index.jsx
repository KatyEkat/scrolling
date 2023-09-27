import { Link } from "react-router-dom";
import { useGetPostQuery } from "../../post/api/postApi";
import styles from "./index.module.css";

export const PostList = () => {
  console.log(useGetPostQuery());

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <h2 className={styles.list_header}>ЗАГОЛОВОК</h2>
        <p className={styles.list_heading}>ПАРАГРАФ скрытый .....</p>
        <Link className={styles.list_link}>Просмотр</Link>
      </div>
    </div>
  );
};
