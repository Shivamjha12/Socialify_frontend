import React from 'react'
import SmallCard from './UserPageCard';
function ListOfRows({list}) {
  return (
    <div>
        {list.map(
            (value, index) => (
                <SmallCard key={index} text={value} />
            )
        )}
    </div>
  )
}

export default ListOfRows;
