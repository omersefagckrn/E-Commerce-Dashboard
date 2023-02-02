import { Icon } from '@iconify/react';
import { gsap } from 'gsap';
import { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import Logo from '@/assets/Logo.svg';

type Route = {
	path: string;
	name: string;
};

const navigationRoute: Route[] = [
	{
		path: '/',
		name: 'Home'
	},
	{
		path: '/featured-product',
		name: 'Featured Product'
	},
	{
		path: '/collection',
		name: 'Collection'
	},
	{
		path: '/shop',
		name: 'Shop'
	},
	{
		path: '/blog',
		name: 'Blog'
	},
	{
		path: '/contact',
		name: 'Contact'
	}
];

const mobileNavigationRoute: Route[] = [
	...navigationRoute,
	{
		path: '/favorites',
		name: 'Favorites'
	},
	{
		path: '/basket',
		name: 'Basket'
	}
];

const Route: FC = () => {
	const [showMobileMenu, setShowMobileMenu] = useState<boolean | undefined>(false);

	const { ref, inView } = useInView({
		threshold: 0 as number
	});

	useEffect(() => {
		if (inView) {
			gsap.fromTo(
				'#mobileMenu',
				{
					opacity: 0,
					x: -100
				},
				{
					opacity: 2,
					x: 0,
					duration: 0.5,
					ease: 'power4.out'
				}
			);
		}
	}, [inView]);

	return (
		<div className='bg-white'>
			<div className='lg:max-w-container py-8 mx-auto space-y-4'>
				<div className='flex items-center justify-between mx-4'>
					<div className='hidden md:flex items-center space-x-2'>
						<Icon className='w-8 h-8 text-primary cursor-pointer' icon={'fe:search'} />
						<input className='placeholder:font-light placeholder:opacity-80 placeholder:text-primary placeholder:text-[12px] border-primary border-b-[2px] focus:outline-none caret:bg-primary bg-transparent' placeholder='WHAT YOU LOOKING FOR?' />
					</div>
					<Link className='md:mr-12' to='/'>
						<img src={Logo} alt='O-Brand' />
					</Link>
					<div className='flex space-x-4'>
						<Icon className='w-8 h-8 text-primary cursor-pointer hidden md:block' icon={'ci:heart-outline'} />
						<Icon className='w-8 h-8 text-primary cursor-pointer hidden md:block' icon={'bx:bx-shopping-bag'} />
						<Icon className='w-8 h-8 text-primary cursor-pointer' icon={'akar-icons:person'} />
						<Icon onClick={() => setShowMobileMenu((prev) => !prev)} className='w-8 h-8 text-primary cursor-pointer md:hidden' icon={'ic:sharp-menu'} />
					</div>
				</div>
				{showMobileMenu && (
					<div ref={ref} id='mobileMenu' className='flex py-4 flex-col items-center justify-center space-y-4 md:hidden select-none absolute w-full bg-white z-[100]'>
						{mobileNavigationRoute.map((route, _) => (
							<Link key={_} to={route.path} className={`tracking-[0.06em] text-[20px] text-primary ${location.pathname === route.path ? 'font-semibold' : 'font-normal'}`}>
								{route.name}
							</Link>
						))}
					</div>
				)}
				<div className='hidden md:flex items-center justify-center space-x-10 leading-[23px]'>
					{navigationRoute.map((route, _) => (
						<Link key={_} to={route.path} className={`tracking-[0.06em] text-[20px] text-primary ${location.pathname === route.path ? 'font-semibold' : 'font-normal'}`}>
							{route.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Route;
