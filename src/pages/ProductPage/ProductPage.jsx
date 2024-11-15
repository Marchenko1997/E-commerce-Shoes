import { products } from "../../assets/db/products_list"
import AboutProduct from "../../components/AboutProduct/AboutProduct.jsx";
import ProductAccordion from "../../components/ProductAccordion/ProductAccordion.jsx";
import Slider from "../../components/Slider/Slider.jsx";

const product = products[0];

const ProductPage = () => {
  return (
      <div>
        <Slider product={product} curentColor="white"/>
          <ProductAccordion product={product}/>
        <AboutProduct product={product}/>
    </div>
  )
}

export default ProductPage