/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './items.css'

const Items = ({ image, name, new_price, old_price, id }) => {
  return (
    <div className='item' onClick={() => window.scrollTo(0, 100)}>
        <Link to={`/product/${id}`}><img src={image} /></Link>
        <p>{name}</p>
        <div className="item-prices">
            <div className='new-price'>
                ${new_price}
            </div>
            <div className="old-price">
                ${old_price}
            </div>
        </div>
    </div>
  )
}

export default Items