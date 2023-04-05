import React from 'react';
import { Link } from 'react-router-dom';
import ColourItem from '../ColourItem';

export default function ColourPage({colourData}) {
    return(
        <div>
            <h1>Colours Page</h1>
            <p>                
                {colourData? colourData.map((colour, i) =>
                    <p key={colour.id}>
                    <Link to={`/colours/${colour.id}`}>
                        {colour.name}
                    </Link>
                   </p>
                ) : undefined }
            </p>
        </div>
    )
}
