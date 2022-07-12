import iconSkill1 from "../assets/img/iconCsharp.svg";
import iconSkill2 from "../assets/img/iconJavaScript.svg";
import iconSkill3 from "../assets/img/iconReact.svg";
import iconSkill4 from "../assets/img/iconXamarin.svg";
import iconSkill5 from "../assets/img/iconGit.svg";
import iconSkill6 from "../assets/img/iconSqlServer.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
  //IagoAntunesFerreira
export const Skills = () => {
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
  //IagoAntunesFerreira
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>See the programming languages, frameworks, tools I've used</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={iconSkill1} alt="CsharpImage" />
                                <h5>CSharp</h5>
                            </div>
                            <div className="item">
                                <img src={iconSkill4} alt="Image" />
                                <h5>Xamarin</h5>
                            </div>
                            <div className="item">
                                <img src={iconSkill3} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={iconSkill6} alt="Image" />
                                <h5>SQLServer</h5>
                            </div>
                            <div className="item">
                                <img src={iconSkill2} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={iconSkill5} alt="Image" />
                                <h5>Git</h5>
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
