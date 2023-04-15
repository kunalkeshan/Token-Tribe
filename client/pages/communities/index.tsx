import Communities from '@/components/landing/Communities';
import PublicLayout from '@/layouts/PublicLayout';
import React from 'react';
import Head from 'next/head';

const CommunitiesPage = () => {
	return (
		<PublicLayout>
			<Head>
				<title>Communities | Token-Tribe</title>
			</Head>
			<Communities />
		</PublicLayout>
	);
};

export default CommunitiesPage;
