import React from 'react';
import './link.css'; // Import file CSS untuk styling

const HomePage = () => {
  const items = [
    { id: 1, title: 'Home', link: '/'},
    // { id: 2, title: 'About', link: '/about' },
    // { id: 3, title: 'Experience', link: '/experience' },
    // { id: 4, title: 'Contact', link: '/formApp' },
  ];

  const items2 =[
    { id: 2, title: 'About', link: '/about' },
  ]

  const items3 =[
    { id: 3, title: 'Experience', link: '/experience' },
  ]

  const items4 =[
      { id: 4, title: 'Contact', link: '/formApp' },
  ]
  return (
    <div className="homepage">
      {/* <div className="item-list-home"> */}
        {items.map(item => (
          <a key={item.id} href={item.link} className="item-home">
            {/* {item.title} */}
            <div className="item-list-home">
              {item.title}
            </div>
          </a>
        ))}
      {/* </div> */}
      {/* <div className="item-list-about"> */}
        {items2.map(item => (
          <a key={item.id} href={item.link} className="item-about">
            <div className="item-list-about">
              {item.title}
            </div>
          </a>
        ))}
      {/* </div> */}
        {/* <div className="item-list-about"> */}
        {items3.map(item => (
          <a key={item.id} href={item.link} className="item-experience">
            <div className="item-list-experience">
              {item.title}
            </div>
          </a>
        ))}
      {/* </div> */}
      {/* </div> */}
        {/* <div className="item-list-about"> */}
        {items4.map(item => (
          <a key={item.id} href={item.link} className="item-formApp">
            <div className="item-list-formApp">
              {item.title}
            </div>
          </a>
        ))}
      {/* </div> */}
    </div>
  );
};

export default HomePage;
