import React from "react";

import ArticleList from "../../components/ArticleList/ArticleList";
import Pagination from "../../components/Pagination/Pagination";

function MainPage() {
  return (
    <>
      <ArticleList />
      <Pagination />
    </>
  );
}

export default MainPage;
