import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'

export default function ColourItem({colourData}) {
  const {id} = useParams();
  const [colour, setColour] = useState({});

  function getColorInformation() {
    colourData? colourData.map((el) => {
        if(el.id === parseInt(id)) {
            setColour(el)
        }
    }) : undefined
  } 

  useEffect(() => {
    getColorInformation()
  }, [])

  return (
    <div role='div' className='colour-item' style={{backgroundColor: colour.hex}}>
    <h1 role="headingone">{colour.name}</h1>
    <h3>{colour.hex}</h3>
   </div>
  )
}
