import { Link } from 'react-router-dom';
import { ReactComponent as MainImage } from '../../assets/images/car-image.svg';
import ButtonIcon from '../../components/ButtonIcon';
import './styles.css';



const Home = () => {
    
    return(
        <div className="home-global">
          <div className="home-container">
            <div className="base-card home-card">
                <div className="home-content-container">
                  <div>
                      <h1>O carro perfeito para você</h1>
                      <p>Conhecça nossos carros e dê mais um passo na realização do seu sonho</p>
                  </div>               
                </div>
                <div className="home-image-container">
                  <MainImage />
                </div>
            </div>
        </div>
        <div className="home-btn">
          <div className="home-btn-button">
            <Link to="/cars">
                <ButtonIcon />
            </Link>
            <p>Comece agora a navegar</p>
          </div>
        </div> 
    </div>
      
        
    );
};

export default Home;