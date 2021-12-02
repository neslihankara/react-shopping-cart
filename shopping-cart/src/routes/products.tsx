import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/productCard";
import { fetchProducts, productsSelector } from "../store/slices/cartSlice";

const ProductsView = () => {
  const { products } = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);
  if (!products.length) return null;

  return (
    <div>
      <p>See products here</p>
      {products.map(({ id, name, price }) => (
        <ProductCard id={id} name={name} price={price}></ProductCard>
      ))}
    </div>
  );
};

export default ProductsView;
