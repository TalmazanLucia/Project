import React from "react";
import { Navbar } from "../../../widgets/Navbar";
import gallery1Image from "../../../shared/assets/images/gallery01.jpg";
import gallery2Image from "../../../shared/assets/images/gallery2.jpg";
import gallery3Image from "../../../shared/assets/images/gallery3.jpg";
import gallery4Image from "../../../shared/assets/images/gallery4.jpg";
import gallery5Image from "../../../shared/assets/images/gallery5.jpg";
import gallery6Image from "../../../shared/assets/images/gallery6.jpg";
import { Product } from "../../../entities/Product";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <Navbar />
      <div className="gallerycolumn-wrapper">
        <div className="galleryrow-wrapper">
          <div>
            <img src={gallery1Image} alt="" />
          </div>
          <div>
            <img src={gallery2Image} alt="" />
          </div>
          <div>
            <img src={gallery3Image} alt="" />
          </div>
        </div>
        <div className="galleryrow-wrapper">
          <div>
            <img src={gallery4Image} alt="" />
          </div>
          <div>
            <img src={gallery5Image} alt="" />
          </div>
          <div>
            <img src={gallery6Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
