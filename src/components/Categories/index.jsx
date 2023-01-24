import { useEffect, useState } from "react";
import { GET } from "../../libs/HTTP.js";
import Table from "../Table";
import styles from "./styles.module.scss";

const Categories = () => {
  const categoriesStateInit = {
    categories: [],
    loading: true,
  };
  const [categoriesState, setCategoriesState] = useState(categoriesStateInit);

  const getData = () => {
    setCategoriesState({ ...categoriesState, loading: true });
    GET("categories").then((data) =>
      setCategoriesState({
        loading: false,
        categories: data,
      })
    );
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.main}>
      <h1>Categories</h1>
      <Table
        categoriesState={categoriesState.categories}
        loading={categoriesState.loading}
        getData={getData}
      />
    </div>
  );
};

export default Categories;
