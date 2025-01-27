import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Founder = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="owner" id="founder">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="founder-bx wow zoomIn">
                        <h2>What we offer</h2>
                        <p>At Cast Labs everyday is a new venture that we set sail together.<br></br> Perfection is the killer of creativity and so we do not boast being 100% perfect but we enjoy our journey by doing better every day.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                           
                            <div className="Fitem">
                                <img src={meter1} alt="Image" />
                                <h5>Logical Thinking</h5>
                            </div>
                            <div className="Fitem">
                                <img src={meter1} alt="Image" />
                                <h5>Creative Environment</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
