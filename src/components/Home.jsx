import React from "react";
import LineData from "./LineData";
import BarData from "./BarData";
import NavBar from "./NavBar";
import DoughnutData from "./DoughnutData";

const Home = () => {

    return(
       <>
       <NavBar/>
       <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-center">Chart Data</h4>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div style={{width:"600px", height:"auto"}}>
                                <LineData/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div style={{width: "600px", height:"auto"}}>
                                <BarData/>
                            </div>
                        </div>
                        <hr className="mt-4"/>
                        <div className="col-md-6 mt-4">
                            <div style={{width: "450px", height:"auto"}}>
                                <DoughnutData/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       </>
    )
}

export default Home;