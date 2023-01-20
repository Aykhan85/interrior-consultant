import mainImg from '../assets/photo1.png';
import avatar from '../assets/photo2.png';

const MainImage = () => {
    return (
        <div className="main__img-container">
            <img src={mainImg} alt="room photo" className='primary-img' />
            <div className="img-content flex ">
                <div className='flex align-center'>
                    <div className="img-wrapper">
                        <img src={avatar} alt="avatar image" />
                    </div>
                    <div className='img-content__text-wrapper'>
                        <h3>Aliza Webber</h3>
                        <p>Interrior Designer</p>
                    </div>
                </div>

                <div className='img-content__secondary-title'>
                    <h2>Designed in 2020 by Aliza Webber</h2>
                </div>
            </div>
        </div>
    )
}

export default MainImage