import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import travelData from "./data/travelData"

function App() {
  const travelElements = travelData.map(travel => {
    return <TravelCard
      key={travel.id}
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
    <div>
      <Navbar />
      <section className="cards-list">
        {travelElements}
      </section>
    </div>
  );
}

export default App;
