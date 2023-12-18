import './Popular.css'
import data_product from '../assets/data'
import Items from './items'

const Popular = () => {
    
  return (
    <div className='popular'>
        <h1>POPULAR WOMEN DRESS</h1>
        <hr />
        <div className='popular-item'>
            {data_product.map(({ id, name, image, old_price, new_price})=>{
                return <Items id={id} name={name} image={image} old_price={old_price} new_price={new_price} key={crypto.randomUUID()} />
            })}
        </div>
    </div>
  )
}

export default Popular