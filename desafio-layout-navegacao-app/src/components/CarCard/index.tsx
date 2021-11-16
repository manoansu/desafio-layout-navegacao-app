import './styles.css';
import CarImg from '../../assets/images/car.png';
import ButtonIcon from '../ButtonIcon';
const CarCard = () =>{

    return (
        <div className="base-card car_card">
            <div className="card-top-container">
                <img src={ CarImg } alt="Car" />
            </div>
            <div className="car-doc-container">
                <h4>Audi Supra TT</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cupiditate, nisi</p>
            </div>
            <div>
                <ButtonIcon />
            </div>
        </div>
    );
};

export default CarCard;