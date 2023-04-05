import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'

export default function ColourItem({colourData}) {
  const {id} = useParams();
  const [colour, setColour] = useState({});

  console.log(colour)
  function getColorInformation() {
    colourData.map((el) => {
        if(el.id === parseInt(id)) {
            setColour(el)
        }
    })
  }

  useEffect(() => {
    getColorInformation()
  }, [])

  return (
   <h1>Colour</h1>
  )
}
