import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore.js";
import { useEffect } from "react";
const ProductsList = () => {
  const { deleteProduct, toggleFeaturedProduct, products, fetchAllProducts } =
    useProductStore();
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  console.log("products", products);
  return <div>Products List</div>;
};

export default ProductsList;
