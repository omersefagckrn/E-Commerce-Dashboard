import Logo from '@/assets/Logo.svg';
import { Icon } from '@iconify/react';
import { FC } from 'react';

const Footer: FC = () => {
	return (
		<>
			<div className='bg-[#E7D8C7]'>
				<div className='lg:max-w-container py-16 mx-auto'>
					<div className='flex flex-col space-y-16 ml-6'>
						<img className='w-[160px]' src={Logo} alt='Logo' />
						<div className='h-[0.5px] bg-primary mr-4 md:mr-0' />
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
							<div className='flex flex-col space-y-2'>
								<div className='text-primary font-normal leading-9 text-[24px] md:mr-20'>Subscribe to our newsletter</div>
								<div className='flex'>
									<input className='placeholder:font-light placeholder:opacity-80 placeholder:text-primary placeholder:text-[12px] border-primary border-b-[2px] focus:outline-none caret:bg-primary bg-transparent' placeholder='WHAT YOU LOOKING FOR?' />
								</div>
							</div>
							<div className='flex flex-col space-y-4'>
								<div className='text-primary leading-8 text-[24px]'>Navigation</div>
								<div className='text-[17px] text-primary'>Collection</div>
								<div className='text-[17px] text-primary'>Shop</div>
								<div className='text-[17px] text-primary'>Blog</div>
							</div>
							<div className='flex flex-col space-y-4'>
								<div className='text-primary leading-8 text-[24px]'>About</div>
								<div className='text-[17px] text-primary'>Our Story</div>
								<div className='text-[17px] text-primary'>Benefits</div>
								<div className='text-[17px] text-primary'>Careers</div>
							</div>
							<div className='flex flex-col space-y-4'>
								<div className='text-primary leading-8 text-[24px]'>Help</div>
								<div className='text-[17px] text-primary'>FAQs</div>
								<div className='text-[17px] text-primary'>Contact Us</div>
							</div>
						</div>
						<div className='md:flex items-center justify-between'>
							<div className='flex items-center space-x-6'>
								<div className='font-normal text-primary'>Terms & Conditions</div>
								<div className='font-normal text-primary'>Privacy Policy</div>
							</div>
							<div className='flex items-center space-x-6 mt-4 md:mt-0'>
								<Icon icon={'mdi:instagram'} className='text-primary w-8 h-8 cursor-pointer' />
								<Icon icon={'mdi:twitter'} className='text-primary w-8 h-8 cursor-pointer' />
								<Icon icon={'mdi:telegram'} className='text-primary w-8 h-8 cursor-pointer' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
