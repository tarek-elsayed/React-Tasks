import {services} from '../../Data/data'
import './Services.css'


export default function Workbox() {
    return <div  className="text-center servContainer ">
        {services.map((item)=>{
            const{heading,text,icon,id} = item;
            return(
                <div key={id} className="">
                    <img src={icon} alt="icon" />
                    <h3>{heading}</h3>
                    <p>{text}</p>
                </div>
            )
        })}
    </div>
}
