import "./contact.scss"
import { useState } from "react";

export default function Contact() {
    const requiredNotification: [] = [
        "Please give your email address here.",
        "Please write something here."
    ]

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <a href="https://gitlab2.cip.ifi.lmu.de/wangyind"><img src="assets/gitlab.svg" alt="" /></a>
                <a href="https://www.linkedin.com/in/yindongwang/"><img src="assets/linkedin.svg" alt="" /></a>

            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" required={requiredNotification[0]}/>
                    <textarea placeholder="Message" required={requiredNotification[1]}/>
                    <button type="submit" >Send</button>
                    {message && <span> Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}