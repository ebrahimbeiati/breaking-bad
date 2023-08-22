import React from 'react'
import CharacterListItem from './CharacterListItem'

const CharacterList = (items) => {
  return (
    <div>
        <section className='cards'>
        {
            items.items.map((item)=>{
                return <CharacterListItem key={item.char_id} item={item}/>
            })
        }



        </section>
    </div>
  )
}

export default CharacterList