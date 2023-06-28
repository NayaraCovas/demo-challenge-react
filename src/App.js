import SearchVenue from "./components/SearchVenue";
function App() {
  return (
    <div className="container">
      <h1>Foursquare API </h1>
      <SearchVenue onAddSearch ={addSearch}/>
    </div>
  );
}
//
const addSearch = (text) => {
  console.log (text);
}
export default App;
