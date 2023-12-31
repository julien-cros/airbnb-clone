import Image from "next/legacy/image"

export default function SmallCard({img, location, distance}) {
  return (
	<div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
		hover:bg-gray-100 hover:scale-105 trasition trasform duration-150 ease-out'>
		<div className='relative h-16 w-16 '>
			<Image
				alt='SmallCard'
				src={img}
				layout='fill'
				className='rounded-lg'
			/>
		</div>
		<div>
		<h2 className=''>{location}</h2>
		<h3 className='text-gray-500'>{distance}</h3>
		</div>
	</div>
	
  )
}
