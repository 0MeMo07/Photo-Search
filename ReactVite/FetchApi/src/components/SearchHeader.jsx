import '../css/SearchBar.scss'
import { useState } from 'react';
function SearchHeader({search}) {
    const [value, setValue] = useState("")
    const handleFormSumbit = (event) => {
        event.preventDefault();
        search(value)
    }
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (  
        <>
        <form onSubmit={handleFormSumbit}>
            <div className="form__group field" >
                <input type="text" className="form__field" value={value} placeholder="Name" id='name' onChange={handleChange}/>

                <label htmlFor="name" className="form__label">What are you looking for?</label>
            </div>
        </form>
        </>
    
    );
}

export default SearchHeader;