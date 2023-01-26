import { useEffect, useState } from "react";
import { DELETE, GET } from "../../libs/HTTP";
import LiProduct from "../LiProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  const reloadItems = () => {
    GET("products").then((data) => {
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(() => {
    reloadItems();
  }, []);

  const deleteElement = (id) => {
    DELETE("products", id).then((data) => {
      if (data.status === 200) {
        reloadItems();
      }
    });
  };

  return (
    <div>
      <ul>
        {products.map((item, index) => (
          <LiProduct
            reloadItems={reloadItems}
            deleteElement={deleteElement}
            item={item}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
