import mapLogo from "../images/Fill 219.png"

export default function TravelCard(props) {
    let online
    if (props.MapsUrl === 0) {
        online = ""
    } else if (props.MapsUrl > 0) {
        online = "View on Google Maps"
    }
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
                        {online && <p className="location">{online}</p>}
                    </div>
                    <div className="card-inner-content">
                        <h1 className="place">{props.title}</h1>
                        <div className="date-content">
                            {props.startDate}<span className="span-spacing">-</span>{props.endDate}
                        </div>
                        <p className="description">{props.description}</p>
                    </div>
                </div>

            </div>
        </main >
    )
}

