import React from 'react'


function List({list}) {
  return (
    <div className='portfolio--list'>
      {list.map((category , index ) => {
        return (
          <button className='portfolio--list-item text-cs'
           key={index}>
            {category}</button>
        )
      })}
    </div> 
  ) 
}

export default List