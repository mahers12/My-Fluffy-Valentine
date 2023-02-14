import React, { useEffect, useState } from 'react'

const ViewPet = (props) => {
  const [ViewPet, setViewPet] = useState(null)

  useEffect(() => {}, [petId])

  return (
    <div className="pet-information">
      <section className="image-container">
        <div></div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3></h3>
        </div>
      </section>
    </div>
  )
}

export default ViewPet
