import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';

import '@/index.css';

import * as Pages from '@/pages';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Pages.Dashboard />} />
			<Route path='*' element={<Navigate replace to='/' />} />
		</>
	)
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
