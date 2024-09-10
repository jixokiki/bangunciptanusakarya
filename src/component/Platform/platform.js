import React from 'react';
import "./platform.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Platform() {
  // const items = [
  //   { id: 1, title: 'Youtube', link: 'https://youtube.com/@BCNK.CORPORATION' },
  //   { id: 2, title: 'LinkedIn', link: 'https://www.linkedin.com/in/pt-bangun-cipta-nusa-karya-3a324b288' },
  //   { id: 3, title: 'Instagram', link: 'https://instagram.com/bcnk.corporation?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' },
  //   { id: 4, title: 'Tiktok', link: '/item4' },
  // ];
  const items5 = [
    { id: 1, title: 'LinkedIn', link: 'https://www.linkedin.com/in/pt-bangun-cipta-nusa-karya-3a324b288'}
  ];

  const items6 = [
    { id: 2, title: 'Youtube', link: 'https://youtube.com/@BCNK.CORPORATION'}
  ];

  const items7 = [
    { id: 3, title: 'Instagram', link: 'https://instagram.com/bcnk.corporation?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' }
  ];

  const items8 = [
    { id: 4, title: 'Tiktok', link: '/item4' }
  ];
  return (
    <div className='platform'>
      <div className="platform-list-Linkedin">
        {items5.map(item => (
          <a key={item.id} href={item.link} className="itemp">
            {item.title}
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        ))}
      </div>
      <div className="platform-list-Youtube">
        {items6.map(item => (
          <a key={item.id} href={item.link} className="itemp">
            {item.title}
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        ))}
      </div> 
      <div className="platform-list-Instagram">
        {items7.map(item => (
          <a key={item.id} href={item.link} className="itemp">
            {item.title}
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        ))}
      </div>
      <div className="platform-list-Tiktok">
        {items8.map(item => (
          <a key={item.id} href={item.link} className="itemp">
            {item.title}
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        ))}
      </div>     
    </div>
    
  )
}

export default Platform
