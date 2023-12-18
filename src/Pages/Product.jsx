
import BreadCrump from "../Components/BreadCrump"
import ProductDisplay , { DescriptionBox } from "../Components/ProductDisplay"
import all_product from "../assets/all_product"
import { useParams } from "react-router-dom"

const Product = ({ addToCart }) => {
  
  const { productId } = useParams()
  const product = all_product.find((e)=> e.id === Number(productId))


  return (
    <div>
      <BreadCrump product={product}/>
      <ProductDisplay product={product} addToCart={addToCart}  />
      <DescriptionBox/>
    </div>
  )
}

export default Product