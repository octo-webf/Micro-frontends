import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import useSessionState from "../utils/sessionHelpers";

import PreviewProduct from "../components/previewProduct";
import PreviewProductSkeleton from "../components/previewProductSkeleton";

import { fetchProducts } from "../redux/actions";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  useSessionState();

  useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  const products = useSelector((state) => state.productsList.products);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Product List</h1>
        <ul className={styles.productsList}>
          {products.length > 0 ? (
            products.map((product) => (
              <PreviewProduct key={product.id} product={product} />
            ))
          ) : (
            <>
              <PreviewProductSkeleton />
              <PreviewProductSkeleton />
              <PreviewProductSkeleton />
              <PreviewProductSkeleton />
              <PreviewProductSkeleton />
              <PreviewProductSkeleton />
              <PreviewProductSkeleton />
              <PreviewProductSkeleton />
              <PreviewProductSkeleton />
              <PreviewProductSkeleton />
            </>
          )}
        </ul>
      </main>
    </div>
  );
}
