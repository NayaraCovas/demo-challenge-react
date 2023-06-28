import { useState } from "react"


const SearchVenue = ({onAddSearch}) => {
  const [text, setText]  = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please the type of place you want to go')
      return
    }

    onAddSearch(text)

    setText('')
    
  }
  
  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Venue type:</label>
            <input
          type="text"
          placeholder="Type where you want to go"   
          value={text}   onChange={(e) => setText (e.target.value)}  
         
        />

        </div>
        <input type="submit" value="Submit" className="btn btn-block"  />
      </form>
    </div>
  )
}

export default SearchVenue
