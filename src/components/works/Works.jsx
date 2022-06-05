import "./works.scss"
import { useState  } from "react";


export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
          {
            id: 1,
            title: "Chatbot",
            img: "assets/chatbot.png",
            icon: "assets/chatbot_icon.png"
          },
          {
            id: 2,
            title: "Master-thesis project",
            img: "assets/thesis.png",
            icon: "assets/thesis_icon.png"
          },
          {
            id: 3,
            title: "Personal Website",
            img: "",
            icon: "assets/branding.png"
          }
    ]

    const handleClick = (way) => {
        way === "left" ? 
        setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : 
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${ currentSlide *100}vw)`}}>
                {data.map(d=>(
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt=""></img>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.description}
                                    </p>
                                    <span>
                                        <a href="https://gitlab2.cip.ifi.lmu.de/wangyind/bingoparser">Projects</a>
                                    </span>
                                </div>
                            </div>
                            <div className="right">
                                <img 
                                    src={d.img} alt="">   
                                </img>
                            </div>
                        </div>
                    </div>
                ))}  
        </div>
        <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>
    </div>
);
}
