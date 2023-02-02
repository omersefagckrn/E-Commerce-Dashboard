import { Icon } from '@iconify/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const BestSeller: FC = () => {
	const Card = ({ img, title, favClick, name, price }: { img?: string; title: string; favClick: () => void; name: string; price: string }) => {
		return (
			<div className='flex flex-col space-y-2'>
				<div className='h-[266px] bg-gray-200'></div>
				<div className='flex items-center justify-between'>
					<div className='text-2xl font-bold leading-[28px] tracking-[0.06em]'>{title}</div>
					<Icon onClick={favClick} icon='ci:heart-outline' className='w-10 h-10 text-primary cursor-pointer' />
				</div>
				<div className='text-lg font-light tracking-[0.03em] text-primary'>{name}</div>
				<Icon className='text-yellow-400' icon={'fa:star'} />
				<div className='text-red text-2xl font-bold tracking-[0.06em]'>${price}</div>
			</div>
		);
	};
	return (
		<>
			<div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 mx-10'>
				{[0, 0, 0, 0, 0, 0].map(() => (
					<Card title='Brown Hoodie' favClick={() => console.log('clicked')} name='Sunglasses' price='100' />
				))}
			</div>
			<div className='flex items-center justify-center my-[130px]'>
				<Link to='/' className='py-[10px] px-[30px] rounded-full border-2 border-primary cursor-pointer hover:bg-primary hover:text-white text-primary'>
					<div className='text-lg font-semibold text-center'>SEE MORE PRODUCT</div>
				</Link>
			</div>
		</>
	);
};

export default BestSeller;
