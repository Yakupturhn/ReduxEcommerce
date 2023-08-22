import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/products";
import ProductCard from "../components/ProductCard";
import { searchAction } from "../redux/actions/search";

const Home = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(searchAction());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-center">
      {search.length > 0
        ? search.map((prd, i) => <ProductCard key={i} prd={prd} />)
        : products &&
          products.map((prd, i) => <ProductCard key={i} prd={prd} />)}
    </div>
  );
};
export default Home;
