import { Link } from "react-router-dom";
import {productiveData} from '../../Data/data'
export default function productive() {
    const {heading,text_1,text_2,icon_1,icon_2} = productiveData;

    return (
        <div>
            <img src={icon_1} alt="icon_1" />
            <div>
                <h3>{heading}</h3>
                <p>{text_1}</p>
                <p>{text_2}</p>
                <Link to="/">
                    See how Fylo works
                    <img src={icon_2} alt="icon_2" />
                </Link>
            </div>
            
        </div>
    )
}
