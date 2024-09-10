import './index.css'
import LogoHospitality from '../../assets/images/hospitality.png'
import LogoHospitality2 from '../../assets/images/LogoHospitality.png'
import LogoHospitality3 from '../../assets/images/LogoHospitality2.png'
import LogoHospitality4 from '../../assets/images/LogoHospitality3.png'
import LogoHospitality5 from '../../assets/images/LogoHospitality4.png'
import LogoHospitality6 from '../../assets/images/LogoHospitality5.png'
import LogoHospitality7 from '../../assets/images/LogoHospitality6.png'
import LogoHospitality8 from '../../assets/images/LogoHospitality7.png'
import bgR3 from '../../assets/images/bg2.png'


function Hospitality (){
    return(
        <div className="hospitality">
          <div className="hospitality-gallery">
            <img
            src={LogoHospitality}
            alt="Gambar 1"
            className="hospitality-image"
            />
            <img
            src={LogoHospitality2}
            alt="Gambar 2"
            className="hospitality-image"
            />
            <img
            src={LogoHospitality3}
            alt="Gambar 3"
            className="hospitality-image"
            />
            <img
            src={LogoHospitality4}
            alt="Gambar 4"
            className="hospitality-image"
            />
            <img
            src={LogoHospitality5}
            alt="Gambar 5"
            className="hospitality-image"
            />
            <img
            src={LogoHospitality6}
            alt="Gambar 6"
            className="hospitality-image"
            />
            <img
            src={LogoHospitality7}
            alt="Gambar 7"
            className="hospitality-image"
            />
            <img
            src={LogoHospitality8}
            alt="Gambar 8"
            className="hospitality-image"></img>
        </div>
      </div>
    )
}

export default Hospitality