import { Icon } from '@iconify/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const ArrivalsItems: FC = () => {
	const Card = ({ img, title, favClick, name, price }: { img?: string; title: string; favClick: () => void; name: string; price: string }) => {
		return (
			<>
				<div className='flex flex-col space-y-2'>
					<div className='h-[345px] bg-gray-200'></div>
					<div className='flex items-center justify-between'>
						<div className='text-2xl font-bold leading-[28px] tracking-[0.06em]'>{title}</div>
						<Icon onClick={favClick} icon='ci:heart-outline' className='w-10 h-10 text-primary cursor-pointer' />
					</div>
					<div className='text-lg font-light tracking-[0.03em] text-primary'>{name}</div>
					<div className='text-red text-2xl font-bold tracking-[0.06em]'>${price}</div>
				</div>
			</>
		);
	};
	return (
		<>
			<div className='text-center mb-16 mt-[130px] text-primary text-[50px] font-bold'>NEW ARRIVALS ITEMS</div>
			<div className='mx-10'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					<Card title='Brown Hoodie' favClick={() => console.log('clicked')} name='Sunglasses' price='100' />
					<Card title='Sunglasses' favClick={() => console.log('clicked')} name='Sunglasses' price='100' />
					<Card title='Brown Hoodie' favClick={() => console.log('clicked')} name='Sunglasses' price='80' />
					<Card title='Sunglasses' favClick={() => console.log('clicked')} name='Sunglasses' price='50' />
				</div>
				<div className='flex items-center justify-center my-[130px]'>
					<Link to='/' className='py-[10px] px-[30px] rounded-full border-2 border-primary cursor-pointer hover:bg-primary hover:text-white text-primary'>
						<div className='text-lg font-semibold text-center '>SEE MORE PRODUCT</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ArrivalsItems;
