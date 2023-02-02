import { ArrivalsItems, BestSeller, Collection, Footer, LatestBlog, Route } from '@/components';
import { Icon } from '@iconify/react';
import { FC } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Product from '@/assets/Product.webp';

const Dashboard: FC = () => {
	const arrows: {
		prevArrow: JSX.Element | undefined;
		nextArrow: JSX.Element | undefined;
	} = {
		prevArrow: <Icon icon={'material-symbols:arrow-back-rounded'} className='w-10 h-10 ml-4 text-primary' />,
		nextArrow: <Icon icon={'material-symbols:arrow-forward-rounded'} className='w-10 h-10 mr-4 text-primary' />
	};

	return (
		<>
			<Route />

			<Slide
				cssClass='select-none'
				indicators={(_idx) => {
					return <div className='flex items-center justify-center text-xl w-4 h-4 rounded-full mx-1 p-4 cursor-pointer bg-primary text-white hover:bg-opacity-70 select-none'>{_idx?.toFixed()}</div>;
				}}
				canSwipe={false}
				easing='cubic-in'
				{...arrows}
				autoplay
				infinite
				pauseOnHover
			>
				{[0, 0, 0, 0, 0].map(() => (
					<img src={Product} alt='Product' />
				))}
			</Slide>
			<div className='flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-[#FFB2B2] to-[#F4EDE5] mt-8 select-none'>
				<div className='flex items-center space-x-2'>
					<div className='font-normal text-red tracking-[0.02em]'>-20%</div>
					<div className='font-bold text-primary tracking-[0.02em]'>OFF THIS WEEK</div>
				</div>
				<div className='text-[50px] font-bold tracking-[0.06em] text-primary'>NEWLY ARRIVED</div>
				<div className='text-lg font-light tracking-[0.03em] mr-2 md:mr-0'>
					<div>Let yourself be inspired by the new trends and key pieces</div>
					<div>and create your own look for the transition period.</div>
				</div>
				<div className='flex md:flex-row flex-col mt-4'>
					<div className='border-primary border-2 rounded-full py-[10px] px-[30px]'>
						<div className='text-primary text-xl'>SEE MORE</div>
					</div>
				</div>
			</div>
			<Collection />
			<ArrivalsItems />
			<BestSeller />
			<LatestBlog />
			<Footer />
		</>
	);
};

export default Dashboard;
