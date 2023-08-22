import React, {useState} from 'react'

const Searchbar = (setSearch) => {
    const[text, setText]=useState('');

    const handleChange =(e)=>{
        setText(e.target.value);
    }

  return (
    <div>
    <section>
        <form >
            <input
            className='form-control'
             type="text"
              placeholder="Search"
              autoFocus
              name='search'
              value={text}
              onChange={handleChange}
              id='search' 
            />

        </form>
    </section>


    </div>
  )
}

export default Searchbar