import React from "react";
import SideMenu from "../components/sidemenu";
import DummyVerticalBarChart from "../components/verticalchart";

const Dashboardpage = () => {
    return (
        <>
            <div className="dashboard">

                <div className="row">
                    <div className="col-md-3">
                        <SideMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="dash-title">
                            <label>Dashboard</label>
                        </div>
                        <div className="dash-week-chart">
                            <DummyVerticalBarChart />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Dashboardpage;