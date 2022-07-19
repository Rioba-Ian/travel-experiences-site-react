import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import travelData from "./data/travelData"

function App(props) {
  const travelElements = travelData.map(travel => {
    return <TravelCard
      title={travel.title}
      location={travel.location}
      MapsUrl={travel.googleMapsUrl}
      startDate={travel.startDate}
      endDate={travel.endDate}
      place={travel.description}
      image={travel.imageUrl}
      description={travel.description}
    />
  })

  return (
    <div className="App">
      <Navbar />
      {travelElements}
    </div>
  );
}

export default App;
