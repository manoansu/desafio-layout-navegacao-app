

import ButtonIcon from '../../components/ButtonIcon';
import './styles.css';


const Home = () => {
    
    return(
        <div className="home-container">
          <div className="base-card home-card">
              <div className="home-content-container">
                <div>
                    <h1>O carro perfeito para você</h1>
                    <p>Conhecça nossos carros e dé mais um passo na realização do seu sonho</p>
                </div>
                <div>
                  
                    <ButtonIcon />
                 
                </div>
              </div>
               <div className="home-image-container">
                
                  
              </div>
          </div>
      </div>
        
    );
};

export default Home;