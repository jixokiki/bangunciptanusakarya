// import './index.css'
// import Residential from '../../assets/images/residential1.png'
// import Interior from '../../assets/images/interior.png'
// import Hospitality from '../../assets/images/hospitality.png'
// import { NavLink } from 'react-router-dom'

// const Experience =()=>{
//     return(
//         <div className="experience">
//         {/* <h1>Galeri Gambar</h1> */}
//         <div className="experience-gallery">
//             <nav>
//                 <NavLink exact="true" activeclassname="active" className="residential-link" to="/residential">
//                     <img src={Residential} alt="Gambar 1" className="experience-image"/>
//                 </NavLink>
//             </nav>
//             <nav>
//                 <NavLink exact="true" activeclassname="active" className="interior-link" to="/interior">
//                     <img src={Interior} alt="Gambar 2" className="experience-image"/>
//                 </NavLink>
//             </nav>
//             <nav>
//                 <NavLink exact="true" activeclassname="active" className="hospitality-link" to="/hospitality">
//                     <img src={Hospitality} alt="Gambar 3" className="experience-image"/>
//                 </NavLink>
//             </nav>
//           {/* <img
//             src={IMAGE4}
//             alt="Gambar 3"
//             className="gallery-image"></img> */}
//         </div>
//       </div>
//     )
// }

// export default Experience



// import './index.css';
// import Residential from '../../assets/images/residential1.png';
// import Interior from '../../assets/images/interior.png';
// import Hospitality from '../../assets/images/hospitality.png';
// import { NavLink } from 'react-router-dom';

// const Experience = () => {
//   return (
//     <div className="experience">
//       <div className="experience-gallery">
//         <nav>
//           <NavLink exact="true" activeclassname="active" className="residential-link" to="/residential">
//             <img src={Residential} alt="Residential" className="experience-image" />
//           </NavLink>
//         </nav>
//         <nav>
//           <NavLink exact="true" activeclassname="active" className="interior-link" to="/interior">
//             <img src={Interior} alt="Interior" className="experience-image" />
//           </NavLink>
//         </nav>
//         <nav>
//           <NavLink exact="true" activeclassname="active" className="hospitality-link" to="/hospitality">
//             <img src={Hospitality} alt="Hospitality" className="experience-image" />
//           </NavLink>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Experience;



import React, { useEffect } from 'react';
import Residential from '../../assets/images/residential1.png';
import Interior from '../../assets/images/interior.png';
import Hospitality from '../../assets/images/hospitality.png';
import { NavLink } from 'react-router-dom';

// Import the CSS dynamically based on screen width
const loadStyle = () => {
  const isMobile = window.innerWidth <= 850;
  if (isMobile) {
    require('./mobile.css');  // Load mobile CSS
  } else {
    require('./dekstop.css'); // Load desktop CSS
  }
};

const Experience = () => {
  useEffect(() => {
    loadStyle(); // Run the function when the component mounts
    // Optionally, add a listener to update the style on window resize
    const handleResize = () => {
      loadStyle();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="experience">
      <div className="experience-gallery">
        <nav>
          <NavLink exact="true" activeclassname="active" className="residential-link" to="/residential">
            <img src={Residential} alt="Residential" className="experience-image" />
          </NavLink>
        </nav>
        <nav>
          <NavLink exact="true" activeclassname="active" className="interior-link" to="/interior">
            <img src={Interior} alt="Interior" className="experience-image" />
          </NavLink>
        </nav>
        <nav>
          <NavLink exact="true" activeclassname="active" className="hospitality-link" to="/hospitality">
            <img src={Hospitality} alt="Hospitality" className="experience-image" />
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Experience;
