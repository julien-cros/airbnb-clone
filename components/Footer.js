import React from 'react'

export default function Footer() {
  return (
	<div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
		<div className='space-y-4 text-xs text-gray-600'>
			<h5 className='font-bold'>ABOUT</h5>
			<p>How Airbnb works</p>
			<p>Newsroom</p>
			<p>Investors</p>
			<p>Airbnb Plus</p>
			<p>Airbnb Luxe</p>
		</div>
		<div className='space-y-4 text-xs text-gray-600'>
			<h5 className='font-bold'>COMMUNITY</h5>
			<p>Accessibility</p>
			<p>This is not a real Site</p>
			<p>Just an Exercise</p>
			<p>i hope a good clone</p>
			{/* <p></p> */}
		</div>
		<div className='space-y-4 text-xs text-gray-600'>
			<h5 className='font-bold'>HOST</h5>
			<p>Julien</p>
			<p>Presents</p>
			<p>Zero to Full Stack Hero</p>
			<p>hundreds of Students</p>
			<p>Join Now</p>
		</div>
		<div className='space-y-4 text-xs text-gray-600'>
			<h5 className='font-bold'>SUPPORT</h5>
			<p>Help Center</p>
			<p>Trust & Safety</p>
			<p>FAQ</p>
			<p>Current Questions</p>
			{/* <p>Airbnb Luxe</p> */}
		</div>
	</div>
  )
}
