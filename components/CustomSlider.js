import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";

const images = ['project-1.jpg', 'project-2.jpg', 'project-3.jpg', 'project-4.jpg'];

function CustomSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <button className="w-12 h-10 bg-black rounded-r-full items-center arrow next" onClick={onClick}>
        <Image src="/next.svg" alt="next" width={14} height={22}/>
      </button>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button className="w-12 h-10 bg-black rounded-l-full items-center arrow prev" onClick={onClick}>
        <Image src="/prev.svg" alt="prev" width={14} height={22}/>
      </button>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  const getClass = (idx) => {
    const next = (imageIndex+1)%4;
    const prev = (imageIndex+3)%4;
    if (idx === imageIndex) {
      return "slide activeSlide"
    } else if ( idx === next ) {
      return "slide nextslide"
    } else if ( idx === prev ){
      return "slide prevslide"
    } else {
      return "slide"
    }
  }
  return (
    <div className="App">
      <Slider {...settings} className="relative">
      {images.map((img, idx) => (
          <div className={getClass(idx)} key={idx}>
            <img src={img} alt={img} />
          </div>
        ))}
        {/* <Image src="/project-1.jpg" alt="project-1" width={480} height={360}/>
        <Image src="/project-2.jpg" alt="project-1" width={480} height={360}/>
        <Image src="/project-3.jpg" alt="project-1" width={480} height={360}/>
        <Image src="/project-4.jpg" alt="project-1" width={480} height={360}/> */}

      </Slider>
    </div>
  );
}

export default CustomSlider;