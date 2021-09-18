import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Yindong Wang",
            title: "NLP Engineer",
            img: "assets/me.png",
            icon: "assets/mobile.png",
            desc: "I'm an NLP Enthusiast. Hanna is my lover!",
        },
        {
            id: 2,
            name: "Johanna Reiml",
            title: "Game Developer",
            img: "assets/hanna.png",
            icon: "assets/mobile.png",
            desc: "I'm a Game Developer. Dongzi is my lover!"
        },
    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d)=> (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img 
                                className="user"
                                src={d.img}
                                alt=""
                            />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                 ))}
                 </div>
               </div>
             );
        }
