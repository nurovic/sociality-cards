import React from 'react'
import Data from '../Data/data.json'
import CardsList from './CardsList'

const Cards = ({date}) => {
    const DataDate = Data.posts_by_date[date]
    const dateList = new Date(date).toDateString()

    return (
      <div>
        <div className="pl-8 text-gray-600">{dateList}</div>
        <div className="flex flex-row p-8">
          {DataDate.map((info) => (
            <CardsList info={info} />
          ))}
        </div>
      </div>
    );
}

export default Cards