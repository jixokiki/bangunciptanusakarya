// import { Outlet } from 'react-router-dom';
// import Sidebar from '../Sidebar';
// import './index.scss';
// import { useState } from 'react';
// const Layout =()=>{
    
//     // const [letterClass] = useState('text-animate')
//     // const nameArray = ['C','o','m','p','a','n','y',' ', 'P','r','o','f','i','l','e']

//     return (
//         <div className="App">
//             <Sidebar />
//             <div className='page'>
//                 {/* <span className=' top-tags'>
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
//                 </span> */}
//                 <Outlet/>

//                 {/* <span className='tags bottom-tags'>
//                     The best partner for your business needs
//                     <br />
//                     //<span className='bottom-tag-html'>&lt;/html&gt;</span>
//                 </span> */}
                
//                 {/* <span className='bottom-right-tags'>
//                     <h2>Kontak Informasi</h2>
//                     PT BANGUN CIPTA NUSAKARYA <br/>
//                     location : Rukan Jalan Abimanyu 3 No. 8 Rt 06 Rw 01, Jatiasih bekasi 17423, Jawa barat<br/>
//                     call : 081219241609 / 081219241608 <br/>
//                     email : bangunciptanusakarya.perseroan@gmail.com
//                 </span> */}
//             </div>
//         </div>
//     )
// }

// export default Layout



import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import { useState } from 'react';
const Layout =()=>{
    
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout
