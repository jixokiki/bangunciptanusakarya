import './index.css'
import LogoResidential from '../../assets/images/LogoResidential2.png'
import LogoResidential2 from '../../assets/images/LogoResidential3.png'
import LogoResidential3 from '../../assets/images/LogoResidential4.png'
import Residential1 from '../../assets/images/residential1.png'
import LogoResidential4 from '../../assets/images/LogoResidential1.png'
import LogoResidential5 from '../../assets/images/LogoResidential6.png'
import LogoResidential6 from '../../assets/images/LogoResidential7.png'
import LogoResidential7 from '../../assets/images/LogoResidential8.png'
import bgR from '../../assets/images/bg2.png'
// import bgR from '../../assets/images/bg3.png'

const Residential = () =>{
    return(
        <div className="residential">
        <div className="residential-gallery">
          <img
            src={LogoResidential}
            alt="Gambar 1"
            className="residential-image"
          />
          <img
            src={LogoResidential2}
            alt="Gambar 2"
            className="residential-image"
          />
          <img
            src={LogoResidential3}
            alt="Gambar 3"
            className="residential-image"
          />
          <img
            src={LogoResidential4}
            alt="Gambar 4"
            className="residential-image"
          />
          <img
            src={LogoResidential5}
            alt="Gambar 5"
            className="residential-image"
          />
          <img
            src={LogoResidential6}
            alt="Gambar 6"
            className="residential-image"
          />
          <img
            src={LogoResidential7}
            alt="Gambar 7"
            className="residential-image"
          ></img>
        </div>
      </div>
    )
}

export default Residential