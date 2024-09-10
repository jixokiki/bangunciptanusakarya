// import { Link } from "react-router-dom";
// import LogoTitle from '../../assets/images/logo.png';
// import './index.scss';
// import { useEffect, useState } from "react";
// import AnimatedLetters from "../AnimatedLetters";
// import HomePage from "../link/link";
// import Platform from "../Platform/platform";
// import Form from "../Form/Form";

// const Home = () => {

//     // const [letterClass] = useState('text-animate')
//     const [setLetterClass] = useState('text-animate-hover')
//     // const nameArray = ['B','A','N','G','U','N']

//     const [letterClass] = useState('text-animate')
//     const nameArray = ['C','o','m','p','a','n','y',' ', 'P','r','o','f','i','l','e']

//     return (
//         <div className="container home-page">
//                 <span className=' top-tags'>
//                     <span className={letterClass}>C</span>
//                     <span className={`${letterClass} _12`}>o</span>
//                     <span className={`${letterClass} _13`}>m</span>
//                     <span className={`${letterClass} _14`}>p</span>
//                     <span className={`${letterClass} _15`}>a</span>
//                     <span className={`${letterClass} _16`}>n</span>
//                     <span className={`${letterClass} _17`}>y</span>
//                     <span> </span>
//                     <span className={`${letterClass} _18`}>P</span>
//                     <span className={`${letterClass} _19`}>r</span>
//                     <span className={`${letterClass} _20`}>o</span>
//                     <span className={`${letterClass} _21`}>f</span>
//                     <span className={`${letterClass} _22`}>i</span>
//                     <span className={`${letterClass} _23`}>l</span>
//                     <span className={`${letterClass} _24`}>e</span>
//                 </span>
//             <div className="text-zone">
//                 <h1>
//                 <img src={LogoTitle} alt="developer" />
//                 {/* <h2>BANGUN CIPTA NUSAKARYA</h2> */}
//                 <br />
//                 <br />
//                 <span className={setLetterClass}>B</span>
//                 <span className={`${setLetterClass} _12`}>A</span>
//                 <span className={`${setLetterClass} _13`}>N</span>
//                 <span className={`${setLetterClass} _14`}>G</span>
//                 <span className={`${setLetterClass} _15`}>U</span>
//                 <span className={`${setLetterClass} _16`}>N</span>
//                 <span> </span>
//                 <span className={`${setLetterClass} _17`}>C</span>
//                 <span className={`${setLetterClass} _18`}>I</span>
//                 <span className={`${setLetterClass} _19`}>P</span>
//                 <span className={`${setLetterClass} _20`}>T</span>
//                 <span className={`${setLetterClass} _21`}>A</span>
//                 <br/>
//                 <span className={`${setLetterClass} _22`}>N</span>
//                 <span className={`${setLetterClass} _23`}>U</span>
//                 <span className={`${setLetterClass} _24`}>S</span>
//                 <span className={`${setLetterClass} _25`}>A</span>
//                 <span className={`${setLetterClass} _26`}>K</span>
//                 <span className={`${setLetterClass} _27`}>A</span>
//                 <span className={`${setLetterClass} _28`}>R</span>
//                 <span className={`${setLetterClass} _29`}>Y</span>
//                 <span className={`${setLetterClass} _30`}>A</span>
//                 {/* <AnimatedLetters setLetterClass={setLetterClass} 
//                 strArray={nameArray} 
//                 idx={22}/> */}
//                 {/* <span className='tags bottom-tags'> */}
//                     {/* The best partner for your business needs
//                     <br /> */}
//                     {/* <span className='bottom-tag-html'>&lt;/html&gt;</span> */}
//                 {/* </span> */}
//                 </h1>
//                 <br/>
//                 <h2>General Kontraktor, Design & Interior</h2>
//                 {/* <Link to="/contact" className="flat-button"> CONTACT ME</Link> */}
//             </div>
//             <span className='tags bottom-tags'>
//                 The best partner for your business needs
//                 <br />
//                 {/* <span className='bottom-tag-html'>&lt;/html&gt;</span> */}
//             </span>
//             <span className='bottom-right-tags'>
//                 <h2>Kontak Informasi</h2>
//                     PT BANGUN CIPTA NUSAKARYA <br/>
//                     location : Rukan Jalan Abimanyu 3 No. 8 Rt 06 Rw 01, Jatiasih bekasi 17423, Jawa barat<br/>
//                     call : 081219241609 / 081219241608 <br/>
//                     email : bangunciptanusakarya.perseroan@gmail.com
//             </span>
//             <HomePage/>
//             <Platform/>
//             <Form/>
//         </div>
//     )
// }

// export default Home


import { Link } from "react-router-dom";
import LogoTitle from '../../assets/images/logo.png';
import './index.scss';  // Default styles that apply to both
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import HomePage from "../link/link";
import Platform from "../Platform/platform";
import Form from "../Form/Form";

const Home = () => {
  const [setLetterClass] = useState('text-animate-hover');
  const [letterClass] = useState('text-animate');
  const nameArray = ['C','o','m','p','a','n','y',' ', 'P','r','o','f','i','l','e'];

  useEffect(() => {
    // Dynamically load the appropriate CSS file
    if (window.innerWidth <= 850) {
      import('./mobile.css'); // Load mobile styles
    } else {
      import('./desktop.css'); // Load desktop styles
    }
  }, []);

  return (
    <div className="container home-page">
      <span className='top-tags'>
        <span className={letterClass}>C</span>
        <span className={`${letterClass} _12`}>o</span>
        <span className={`${letterClass} _13`}>m</span>
        <span className={`${letterClass} _14`}>p</span>
        <span className={`${letterClass} _15`}>a</span>
        <span className={`${letterClass} _16`}>n</span>
        <span className={`${letterClass} _17`}>y</span>
        <span> </span>
        <span className={`${letterClass} _18`}>P</span>
        <span className={`${letterClass} _19`}>r</span>
        <span className={`${letterClass} _20`}>o</span>
        <span className={`${letterClass} _21`}>f</span>
        <span className={`${letterClass} _22`}>i</span>
        <span className={`${letterClass} _23`}>l</span>
        <span className={`${letterClass} _24`}>e</span>
      </span>

      <div className="text-zone">
        <h1>
          <img src={LogoTitle} alt="developer" />
          <br />
          <br />
          <span className={setLetterClass}>B</span>
          <span className={`${setLetterClass} _12`}>A</span>
          <span className={`${setLetterClass} _13`}>N</span>
          <span className={`${setLetterClass} _14`}>G</span>
          <span className={`${setLetterClass} _15`}>U</span>
          <span className={`${setLetterClass} _16`}>N</span>
          <span> </span>
          <span className={`${setLetterClass} _17`}>C</span>
          <span className={`${setLetterClass} _18`}>I</span>
          <span className={`${setLetterClass} _19`}>P</span>
          <span className={`${setLetterClass} _20`}>T</span>
          <span className={`${setLetterClass} _21`}>A</span>
          <br />
          <span className={`${setLetterClass} _22`}>N</span>
          <span className={`${setLetterClass} _23`}>U</span>
          <span className={`${setLetterClass} _24`}>S</span>
          <span className={`${setLetterClass} _25`}>A</span>
          <span className={`${setLetterClass} _26`}>K</span>
          <span className={`${setLetterClass} _27`}>A</span>
          <span className={`${setLetterClass} _28`}>R</span>
          <span className={`${setLetterClass} _29`}>Y</span>
          <span className={`${setLetterClass} _30`}>A</span>
        </h1>
        <br />
        <h2>General Kontraktor, Design & Interior</h2>
      </div>

      <span className='tags bottom-tags'>
        The best partner for your business needs
        <br />
      </span>

      <span className='bottom-right-tags'>
        <h2>Kontak Informasi</h2>
        <span className="bottom-right-tags2">
        PT BANGUN CIPTA NUSAKARYA <br />
        location: Rukan Jalan Abimanyu 3 No. 8 Rt 06 Rw 01, Jatiasih bekasi 17423, Jawa Barat <br />
        call: 081219241609 / 081219241608 <br />
        email: bangunciptanusakarya.perseroan@gmail.com
        </span>
      </span>

      <HomePage />
      <Platform />
      <Form />
    </div>
  );
};

export default Home;
