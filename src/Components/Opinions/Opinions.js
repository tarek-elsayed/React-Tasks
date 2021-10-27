import {opinionsData} from '../../Data/data'
import "./Opinions.css"
import BgQuotes from '../../images/bg-quotes.png';

export default function Opinions() {
    
    return (
        <div>
            <img src={BgQuotes} alt="" />
            {opinionsData.map((opinionPer, index)=>{
                const {name, position, opinion, photo } = opinionPer;
                return(
                    <article className="article_opinion" key={index}>
					<p className="text">{opinion}</p>
					<div className="profile_article">
						<img src={photo} className="profile" alt={name} />
						<div className="author">
							<h6 className="title">{name}</h6>
							<sub>{position}</sub>
						</div>
					</div>
				</article>
                )

            })}
        </div>
    )
}
