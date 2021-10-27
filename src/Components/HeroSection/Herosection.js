import "./Hero.css";
import { Button } from '../Button/Button';
import bgDesktop from '../../images/bg-curvy-desktop.svg';
import bgMobile from '../../images/bg-curvy-mobile.svg';
import Illustration from '../../images/illustration-intro.png';
import {headingData} from '../../Data/data'
export default function Herosection() {
    const backGround = window.screen.width < 1024 ? bgMobile : bgDesktop;
    const data = headingData;
    const {heading, text} = data[0];
    console.log(data)
    return (
        <>
            <div className="d-flex flex-column align-items-center mx-auto mt-0 mb-0 w-85 bg_color">
                <img src={Illustration} alt="Illustration"className="mw-100 mb-3"/>
                <div className="d-flex flex-column align-items-center w-80">
                    <h1 className=" text-center w-75 mb-4 text-white">{heading}</h1>
                    <p className=" text-center mb-3 w-50 text-white">{text}</p>
                    <Button title="Get Started"/>
                </div>
            </div>
            <img src={backGround} alt="backGround" className="bg_bottom"/>
        </>
   
    )
}
