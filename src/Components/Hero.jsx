import './Hero.css'
import handIcon from '../assets/hand_icon.png'
import arrowIcon from '../assets/arrow.png'
import heroImage from '../assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className='hand-icon-div'>
                    <p>New</p>
                    <img src={handIcon} alt="" />
                </div>
                <p>Collections</p>
                <p>For Everyone!</p>
            </div>
            <div className="hero-latest-btn">
                <div>
                    Latest Collection
                </div>
                <img src={arrowIcon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={heroImage} alt="" />
        </div>
    </div>
  )
}

export default Hero