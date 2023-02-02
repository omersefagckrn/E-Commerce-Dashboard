import { FC } from 'react';
import { Link } from 'react-router-dom';

const Collection: FC = () => {
	const Card = ({ bgColor, title, subTitle, description, subDescription, link }: { bgColor: string; title: string; subTitle: string; description: string; subDescription: string; link: string }) => {
		return (
			<div className={`pl-16 py-[106px] ${bgColor}`}>
				<div className='flex flex-col select-none'>
					<div className='flex space-x-2'>
						<div className='font-semibold text-primary uppercase'>{title}</div>
						<div className='text-red font-semibold uppercase'>{subTitle}</div>
					</div>
					<div className='text-primary text-[40px] font-bold leadingh-[37px] tracking-[0.03em] uppercase'>{description}</div>
					<div className='text-primary text-[40px] font-normal tracking-[0.03em] uppercase'>{subDescription}</div>
				</div>
				<div className='mt-6'>
					<Link to={link} className='py-[10px] px-[30px] border-2 border-primary rounded-full'>
						SHOP NOW
					</Link>
				</div>
			</div>
		);
	};
	return (
		<>
			<div className='grid md:grid-cols-2 gap-4 mt-4'>
				<Card bgColor='bg-pink' title='Get UP TO ' subTitle='60%' description='New Collection' subDescription='off glasses' link='/' />
				<Card bgColor='bg-orange' title='Get UP TO ' subTitle='60%' description='New Collection' subDescription='off glasses' link='/' />
				<Card bgColor='bg-softblue' title='Get UP TO ' subTitle='60%' description='New Collection' subDescription='off glasses' link='/' />
				<Card bgColor='bg-green' title='Get UP TO ' subTitle='60%' description='New Collection' subDescription='off glasses' link='/' />
			</div>
		</>
	);
};

export default Collection;
