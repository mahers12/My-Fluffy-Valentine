import React from 'react'

const Pet = (props) => {
  return (
    <div className="Pet-information">
      <div className="img-wrapper"></div>
      <img src={props.Image} />
      <div className="info-wrapper flex-col"></div>
    </div>
  )
}

export default Pet
