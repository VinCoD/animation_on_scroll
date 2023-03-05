import React, { useEffect, useState } from 'react';
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from "../../../../img/carousel/carousel-img-1.jpg";
import img2 from "../../../../img/carousel/carousel-img-2.jpg";
import img3 from "../../../../img/carousel/carousel-img-3.jpg";
import img4 from "../../../../img/carousel/carousel-img-4.jpg";
import img5 from "../../../../img/carousel/carousel-img-5.jpg";
import wedding1 from "../../../../img/wedding1.jpg";

const Gallery = () => {
   useEffect(() => {
      AOS.init({ duration: 200 });
   }, []);

   let data = [
      {
         id: 7,
         imgSrc: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
         id: 8,
         imgSrc: 'https://images.unsplash.com/photo-1537633468298-d86f0c2d4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
         id: 1,
         imgSrc: img1,
      },
      {
         id: 9,
         imgSrc: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 3,
         imgSrc: img3,
      },
      {
         id: 10,
         imgSrc: 'https://images.unsplash.com/photo-1481066717861-4775e000c88a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
         id: 11,
         imgSrc: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 12,
         imgSrc: 'https://images.unsplash.com/photo-1615439935188-5e488fc6b764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 6,
         imgSrc: wedding1,
      },
      {
         id: 13,
         imgSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 14,
         imgSrc: 'https://images.unsplash.com/photo-1600164913117-2125c1f60b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 4,
         imgSrc: img4,
      },
      {
         id: 15,
         imgSrc: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 16,
         imgSrc: 'https://images.unsplash.com/photo-1507092519286-c691a4c6de74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 5,
         imgSrc: img5,
      },
      {
         id: 17,
         imgSrc: 'https://plus.unsplash.com/premium_photo-1663097417329-6ff06e9201b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 2,
         imgSrc: img2,
      },
      {
         id: 18,
         imgSrc: 'https://images.unsplash.com/photo-1559556489-4024a5abfb57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },

   ];

   const [model, setModel] = useState(false);
   const [tempImgSrc, setTempImgSrc] = useState('');
   const getImg = (imgSrc) => {
      setTempImgSrc(imgSrc);
      setModel(true);
   };

   return (
       <div className="px-5 md:px-16 pt-16 md:pt-32">
          <div className={model ? 'model open' : 'model'}>
             <img src={tempImgSrc} alt="img" />
             <CloseIcon onClick={() => setModel(false)} />
          </div>
          <div className="gallery">
             {data.map((item, index) => {
                return (
                    <div data-aos-duration="500" data-aos="zoom-in" data-aos="zoom-in" className="md:px-2 mb-6 md:mb-8 pics transition-opacity duration-200" key={index} onClick={() => getImg(item.imgSrc)}>
                       <img className="hover:cursor-zoom-in" src={item.imgSrc} style={{ width: '100%' }} alt="img"/>
                    </div>
                );
             })}
          </div>
       </div>
   );
};

export default Gallery;
