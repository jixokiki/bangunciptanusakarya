import './index.css'
import LogoInterior from '../../assets/images/interior.png'
import LogoInterior2 from '../../assets/images/LogoInterior2.png'
import LogoInterior3 from '../../assets/images/LogoInterior3.png'
import LogoInterior4 from '../../assets/images/LogoInterior4.png'
import LogoInterior5 from '../../assets/images/LogoInterior5.png'
import LogoInterior6 from '../../assets/images/LogoInterior6.png'
import LogoInterior7 from '../../assets/images/LogoInterior8.png'
import LogoInterior8 from '../../assets/images/LogoInterior7.png'
import bgR2 from '../../assets/images/bg2.png'

const Interior = () =>{
    return(
        <div className="interior">
        <div className="interior-gallery">
          <img
            src={LogoInterior}
            alt="Gambar 1"
            className="interior-image"
          />
          <img
            src={LogoInterior2}
            alt="Gambar 2"
            className="interior-image"
          />
          <img
            src={LogoInterior3}
            alt="Gambar 3"
            className="interior-image"
          />
          <img
            src={LogoInterior4}
            alt="Gambar 4"
            className="interior-image"
          />
          <img
            src={LogoInterior5}
            alt="Gambar 5"
            className="interior-image"
          />
          <img
            src={LogoInterior6}
            alt="Gambar 6"
            className="interior-image"
          />
          <img
            src={LogoInterior7}
            alt="Gambar 7"
            className="interior-image"
          />
          <img
            src={LogoInterior8}
            alt="Gambar 8"
            className="interior-image"></img>
        </div>
      </div>
    )
}

export default Interior