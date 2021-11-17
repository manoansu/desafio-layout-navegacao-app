import CarCard from "../../components/CarCard";
import { ReactComponent as SearchCarIcon } from '../../assets/images/buscacar.svg';
const Catalog = () =>{

    return(
        <div className="container my-4">
            <div className="base-card search-car">
                <div className="input-group col-md-4">
                    <input className="form-control py-2" type="search" value="" placeholder="Digite sua busca" id="example-search-input"/>
                    <span className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </span>
                    <div  className="car-icon-container">
                        <SearchCarIcon />
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CarCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CarCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CarCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CarCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CarCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CarCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CarCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CarCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <CarCard />
                </div>
                
            </div>
        </div>
    );
};

export default Catalog;