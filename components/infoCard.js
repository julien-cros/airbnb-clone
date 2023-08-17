import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

export default function InfoCard({img, title, description, location, star, price, total}) {
  return (
	<div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
		<div className='relative h-24 w-40  md:w-80 md:h-52 flex-shrink-0 '>
			<Image
				alt='img-stays'
				src={img}
				layout="fill"
				objectFit="cover"
				className='rounded-2xl'	
			/>
		</div>

		<div className='flex flex-col flex-grow pl-5'>
			<div className='flex justify-between'>
				<p className=''>{location}</p>
				<HeartIcon className=' h-7 cursor-pointer'/>
			</div>
				<h4 className='text-xl'>{title}</h4>
				<div className='border-b w-10 pt-2'/>
				<p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

				<div className='flex justify-between items-end pt-5'>
					<p className='flex items-center'>
						<StarIcon className='text-red-400 h-5'/>
						{star}
					</p>

					<div className=''>
						<p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
						<p className='text-right  font-light'>{total}</p>
					</div>
				</div>
		</div>
	</div>
  )
}
