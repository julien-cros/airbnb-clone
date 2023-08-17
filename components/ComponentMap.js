import "mapbox-gl/dist/mapbox-gl.css";
import React from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import { getCenter } from 'geolib';

function ComponentMap({ searchResults }) {

	const [selectedLocation, setSelectedLocation] = useState({});

	const coordinates = searchResults.map((result) => ({
		longitude: result.long,
		latitude: result.lat,
	}));
	
	const center = getCenter(coordinates);

	
	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
		latitude: center.latitude,
		longitude:  center.longitude,
		zoom: 11,
	});

  return <ReactMapGL
		mapStyle="mapbox://styles/juliencros/clldvj3cs00zo01pl58d7h5kg"
		mapboxAccessToken={process.env.mapbox_key}
		{...viewport}
		onMouseMove={(nextViewport) => setViewport(nextViewport)}
	>
			{searchResults.map((result) => (
				<div key={result.long}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						offsetLeft={-20}
						offsetTop={-10}
						>
						<p
							role='img'
							onMouseOver={() => setSelectedLocation(result)}
							className='cursor-pointer text-2xl animate-bounce '
							aria-label='push-pin'
							>📍</p>
					</Marker>

					{selectedLocation.long === result.long ? (
						<Popup
							onMouseOver={() => setSelectedLocation(result)}
							onMouseLeave={() => setSelectedLocation({})}
							closeOnClick={true}
							onMouseOut={true}
							latitude={result.lat}
							longitude={result.long}
							className="cursor-pointer opacity-100 transition-opacity-0 duration-200"
						>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
	</ReactMapGL>
}

export default ComponentMap;