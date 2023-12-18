import './ProductDisplay.css'
import starIcon from '../assets/star_icon.png'
import stardullIcon from '../assets/star_dull_icon.png'
const ProductDisplay = ({ product, addToCart }) => {
  return (
    <div className='productDisplay'>
        <div className="productD-left">
            <div className='productImg-list'>
                <img src={product.image} />
                <img src={product.image} />
                <img src={product.image} />
                <img src={product.image} />
            </div>
            <div className='productImg'>
                <img className='productMainimg' src={product.image} />
            </div>
        </div>
        <div className="productD-right">
            <h1>{product.name}</h1>
            <div className="productStar">
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={stardullIcon} />
                <p>(122)</p>
            </div>
            <div className='product-prices'>
                <div className='productD-oldprice'>${product.old_price}</div>
                <div className='productD-newprice'>${product.new_price}</div>
            </div>
            <div className='product-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dicta!
            </div>
            <div className='product-size'>
                <h1>Select Size</h1>
                <div className="product-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button onClick={()=> addToCart(product.id)} ><span></span><span></span><span></span><span></span>ADD TO CART</button>
                <span className='tagsDiv'>
                    <p className='productDisplay-category'><span>Category: </span>Women, T-shirt, Crop Top</p>
                    <p className='productDisplay-category'><span>Tags: </span>Modern, Latest</p>
                </span>

            </div>

        </div>
        
    </div>
    
  )
}
export const DescriptionBox = ()=> {
    return(
        <div className="descriptionBox">
            <div className="desNav">
                <div className="desNav-box">Description</div>
                <div className="desNav-box fade">Reviews (122)</div>
            </div>
            <div className="des-des">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores ratione repellendus eligendi. Cupiditate ipsa eligendi minus error? Suscipit odit eos dolor aperiam nihil itaque ipsum sequi, temporibus ex adipisci pariatur placeat enim earum quam corrupti soluta facilis mollitia nisi, illum explicabo fugit iure quisquam voluptas. Natus totam non eligendi.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aut deserunt natus rerum. Magnam necessitatibus architecto iste perspiciatis quos sunt?
                </p>
            </div>

        </div>
    )
}

export default ProductDisplay