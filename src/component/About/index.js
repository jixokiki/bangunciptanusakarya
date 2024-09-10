import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState } from 'react'

const About =() =>{
    const [letterClass, setLetterClass] = useState('text-animate')

    useState(() =>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
    },[])

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p align="LEFT">
                Perusahaan kami berdiri secara resmi pada tahun 2022 dengan nama PT.
                BANGUN CIPTA NUSAKARYA yang berlokasi di Kota Bekasi, Jawa Barat.
                Perusahaan kami merupakan sebuah perusahaan yang bergerak dibidang General
                Kontraktor, Design & Interior. Perusahaan kami memiliki sumber daya manusia
                profesional dan berpengalaman dibidangnya serta manajemen perusahaan yang
                baik, sehingga kami yakin dapat memberikan pelayanan terbaik untuk menjamin
                kepuasan klien kami.
                </p>
                <p align="LEFT">
                Kami mengerjakan proyek dari kalangan individu, swasta maupun pemerintah.
                Kami berkomitmen untuk menyelesaikan setiap project yang telah dipercayakan.
                Peran setiap elemen perusahaan sangat penting dalam melakukan perencanaan,
                pelaksanaan, dan pengendalian project. Terbukti dari kemampuan, komitmen
                untuk selalu memberikan pelayanan terbaik dan fokus pada mutu dan pekerjaan
                yang tepat waktu. PT. BANGUN CIPTA NUSAKARYA telah berhasil
                menawarkan efisiensi dan flexibilitas secara optimal agar dapat memberikan
                hasil yang baik dalam hal biaya dan waktu
                </p>

            </div>

        </div>
    )
}

export default About