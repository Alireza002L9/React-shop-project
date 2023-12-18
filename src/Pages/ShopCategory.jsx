import './ShopCategory.css'
import products from '../assets/all_product'
import menBanner from '../assets/banner_mens.png'
import womenBanner from '../assets/banner_women.png'
import kidBanner from '../assets/banner_kids.png'
import dropDown from '../assets/dropdown_icon.png'
import Items from '../Components/items'
const ShopCategory = ({ category }) => {
  let banner

    if(category === 'men'){
    banner = menBanner
  } else if(category === 'women') {
    banner = womenBanner
  } else if(category === 'kid') {
    banner = kidBanner
  }

  return (
    <div className='category'>
      <img src={banner} className='category-banner'/>
      <div className="indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>      
        <div className='category-sort'>
          Sort by <img src={dropDown} />
        </div>
      </div>
      <div className='category-products'>
      {products.map(({ id, name, image, old_price, new_price, categorys})=>{
        if(category === categorys){
          return <Items id={id} name={name} image={image} old_price={old_price} new_price={new_price} key={crypto.randomUUID()} />
        }
        
      })}
      </div>
      <div className='category-load'>
        Explore More
      </div>

    </div>
  )
}

export default ShopCategory