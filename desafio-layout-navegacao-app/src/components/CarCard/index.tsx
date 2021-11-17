import './styles.css';
import { ReactComponent as SearchCarIcon } from '../../assets/images/buscacar.svg';
import CarImg from '../../assets/images/car.png';
import ButtonBuy from '../ButtonBuy';

const CarCard = () =>{

    return (
        <div className="home-car">

        <div className="base-card car_card">
            <div className="card-top-container">
                <img src={ CarImg } alt="Car" />
            </div>
            <div className="car-doc-container">
                <h4>Audi Supra TT</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cupiditate, nisi</p>
            </div>
            <div className="btn-car">
                <ButtonBuy />
            </div>
        </div>
        </div>
    );
};

export default CarCard;