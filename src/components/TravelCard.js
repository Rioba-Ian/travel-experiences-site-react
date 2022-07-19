import mapLogo from "../images/Fill 219.png"

export default function TravelCard(props) {
    return (
        <main className="main-content">
            <div className="container">
                <div className="image-card">
                    <img className="image-card" src={props.image} alt="travelimage" />
                </div>
                <div className="container-content">
                    <div className="maps-content">
                        <img src={mapLogo} alt='google maps logo' className="map-logo" />
                        <span className="span-spacing"></span>
                        <p>{props.location}</p>
                        <span className="span-spacing"></span>
                        <p className="location">View on Google Maps</p>
                    </div>
                    <div className="card-inner-content">
                        <h1>{props.title}</h1>
                        <div className="date-content">
                            {props.startDate}<span className="span-spacing">-</span>{props.endDate}
                        </div>
                        <p className="">{props.description}</p>
                    </div>
                </div>

            </div>
        </main >
    )
}

{/* <div className="map-content">
                <img className="image-card" src={props.image} alt="travelimage" />
            </div>
            <div className="card-content">
                <div className="maps-content">
                    <img src={mapLogo} alt='google maps logo' className="map-logo" />
                    <p>{props.location}</p>
                    <span></span>
                    <p>View on Google Maps</p>
                </div>

                <div className="card-inner-content">
                    <h1>{props.title}</h1>
                    <p>{props.startDate}</p><span>-</span><p>{props.endDate}</p>
                    <p className="">{props.description}</p>
                </div>
</div> */}