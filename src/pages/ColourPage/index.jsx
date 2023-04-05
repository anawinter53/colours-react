import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ColourItem } from '../ColourItem';

export default function ColourPage() {
    return(
        <div>
            <h1>Colours Page</h1>
            <p>
                <Link to={`shop/${id}`}>{name}</Link>
            </p>
        </div>
    )
}
