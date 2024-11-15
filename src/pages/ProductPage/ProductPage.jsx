import { products } from "../../assets/db/products_list"
import AboutProduct from "../../components/AboutProduct/AboutProduct.jsx";

const product = products[0];

const ProductPage = () => {
  return (
      <div>
        <AboutProduct product={product}/>
    </div>
  )
}

export default ProductPage