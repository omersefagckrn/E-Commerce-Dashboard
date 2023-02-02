import { Icon } from '@iconify/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const LatestBlog: FC = () => {
	const Card = () => {
		return (
			<div className='px-4 py-6 bg-[#E6E3DF] bg-opacity-90 space-y-4'>
				<div className='h-[266px] bg-gray-400'></div>
				<div className='text-primary font-bold leading-9 tracking-[0.03em] text-[30px] mr-40'>The 15 Secrets About Fashion People</div>
				<div className='flex items-center justify-between'>
					<div className='flex space-x-2'>
						<Icon icon={'ant-design:calendar-outlined'} className='text-primary w-6 h-6' />
						<div className='text-primary font-semibold'>Jan 12th 2021</div>
					</div>
					<div className='flex space-x-2'>
						<Icon icon={'octicon:comment-discussion-24'} className='text-primary w-6 h-6' />
						<div className='text-primary font-semibold'>120 Comments</div>
					</div>
				</div>
				<div className='py-[15px] rounded-full border-2 border-primary text-center cursor-pointer '>
					<div className='font-bold text-primary'>Read More</div>
				</div>
			</div>
		);
	};
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10'>
				{[0, 0, 0].map(() => (
					<Card />
				))}
			</div>
			<div className='flex items-center justify-center my-[130px]'>
				<Link to='/' className='py-[10px] px-[30px] rounded-full border-2 border-primary cursor-pointer hover:bg-primary hover:text-white text-primary'>
					<div className='text-lg font-semibold text-center'>SEE MORE ARTICLES</div>
				</Link>
			</div>
		</>
	);
};

export default LatestBlog;
