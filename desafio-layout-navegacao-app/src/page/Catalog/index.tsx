import CarCard from "../../components/CarCard";

const Catalog = () =>{

    return(
        <div className="container-my-4">
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
            </div>
        </div>
    );
};

export default Catalog;