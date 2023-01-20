import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import MainImage from "./MainImage";
const Main = () => {
    return (
        <div className="main__container">
            <div className='aaa'>
                <h1 className="main__title">Modern interior</h1>
                <p className="main__text">
                    A full-Service residential & commercial interior design and staging company offering
                    professional organizing & eco-services.
                </p>
                <button className="btn icon-btn">
                    Read more
                    <span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </span>
                </button>
            </div>

            <MainImage />
        </div>
    )
}

export default Main