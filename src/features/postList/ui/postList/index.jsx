// import { Link } from "react-router-dom";
// import styles from "./index.module.css";

import { useState } from "react";
import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList as List } from "react-window";
import { Post } from "../post";
import { useGetPostsQuery } from "../../api/postsListApi";

const limit = 10;

export const PostList = () => {
  const [start, setStart] = useState(0);

  const posts = useGetPostsQuery({ start, end: start + limit });
  const getPosts = (start, end) => {
    setStart(start);
    //   return(
    //       useGetPostQuery()
    //   )
  };

  //   <div className={styles.container}>
  //   <div className={styles.list}>
  //     <h2 className={styles.list_header}>ЗАГОЛОВОК</h2>
  //     <p className={styles.list_heading}>ПАРАГРАФ скрытый .....</p>
  //     <Link className={styles.list_link}>Просмотр</Link>
  //   </div>
  // </div>
  if (posts.isLoading) {
    return null;
  }

  const isItemLoaded = (index) => {
    return !!posts.data[index];
  };

  const Post = (data) => {
    console.log(posts.data[data.index]);
    return (<div>

    </div>);
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={1000}
      loadMoreItems={getPosts}
    >
      {({ onItemsRendered, ref }) => (
        <List
          className="List"
          height={150}
          itemCount={1000}
          itemSize={30}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width={300}
        >
          {Post}
        </List>
      )}
    </InfiniteLoader>
  );
};
