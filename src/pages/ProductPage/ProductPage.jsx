import { products } from "../../assets/db/products_list"
import AboutProduct from "../../components/AboutProduct/AboutProduct.jsx";
import ProductAccordion from "../../components/ProductAccordion/ProductAccordion.jsx";

const product = products[0];

const ProductPage = () => {
  return (
      <div>
          <ProductAccordion product={product}/>
        <AboutProduct product={product}/>
    </div>
  )
}

export default ProductPage