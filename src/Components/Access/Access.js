import { Button } from '../Button/Button';
import {accessData} from '../../Data/data'

export default function Access() {
    const {text,heading} = accessData;
    return (
        <div>
            <div>
                <h3>{heading}</h3>
                <p>{text}</p>
                <form >
                <input type="email" className="input_email" placeholder="email@example.com" aria-label="EmailAccess" name="email" />
				<Button title='Get Started For Free' />
                </form>
            </div>
        </div>
    )
}
