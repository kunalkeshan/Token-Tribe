import PublicLayout from '@/layouts/PublicLayout';
import Head from 'next/head';
import React from 'react';

const TermsOfConditionsPage = () => {
	const tocs = [
		'Users must be at least 18 years old to use Token Tribe.',
		'Users are responsible for maintaining the confidentiality of their account and password.',
		'Users must not use Token Tribe for any illegal or unauthorized purpose.',
		'Token Tribe reserves the right to terminate user accounts at any time for any reason.',
		'The CommuniCoin tokens are not refundable or exchangeable for cash.',
		'Token Tribe is not responsible for any losses incurred due to the use of CommuniCoin tokens.',
		"Users must not engage in any activity that may harm Token Tribe's reputation or interfere with the app's operations.",
	];
	return (
		<PublicLayout>
			<Head>
				<title>Terms of Conditions</title>
			</Head>
			<div className='max-w-[1240px] w-full mx-auto px-6'>
				<h1 className='font-primary font-bold text-3xl'>
					Terms of Conditions
				</h1>
				<p className='mt-4'>
					By using Token Tribe, you agree to comply with these terms
					and conditions.
				</p>
				<ul className='list-disc ml-4 mt-4'>
					{tocs.map((toc, idx) => (
						<li key={idx}>{toc}</li>
					))}
				</ul>
			</div>
		</PublicLayout>
	);
};

export default TermsOfConditionsPage;
