import './BreadCrump.css'
import arrowIcon from '../assets/breadcrum_arrow.png'
const BreadCrump = ({product}) => {
  return (
    <div className='breadcrump'>
        HOME <img src={arrowIcon}/> SHOP <img src={arrowIcon} /> {product.categorys} <img src={arrowIcon}/> 
        {product.name}
    </div>
  )
}

export default BreadCrump