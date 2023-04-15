import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import React from 'react';

const PublicLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='px-12'>{children}</main>
			<Footer />
		</>
	);
};

export default PublicLayout;
