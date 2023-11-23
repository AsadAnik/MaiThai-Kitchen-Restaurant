import React from 'react';

const NotFound = ({ title = 'Not Found!' }) => {
  return (
    <div className='not-found-comp'>
        <h3>{title}</h3>
    </div>
  )
}

export default NotFound;