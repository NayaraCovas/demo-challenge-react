import { useState } from "react"


const SearchVenue = () => {
  const [text, SetText]  = useState('')
  
  return (
    <div>
      <form className="add-form">
        <div className="form-control">
            <label>Venue type:</label>
            <input
          type="text"
          placeholder="Type where you want to go"         
         
        />

        </div>
        <input type="submit" value="Submit" className="btn btn-block"  />
      </form>
    </div>
  )
}

export default SearchVenue
