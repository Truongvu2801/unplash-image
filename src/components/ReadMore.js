import React from 'react';

const ReadMore = ({ children }) => {
  const text = children
  return (
    <p className="text">
      {text !== null && text.length > 130 ? 
      <> 
        {text.slice(0, 120)}
        <a className="read-or-hide">
        ...read more
        </a>
      </> : text}
    </p>
  )
}

export default ReadMore;