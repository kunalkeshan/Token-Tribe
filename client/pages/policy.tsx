import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import Head from 'next/head';

const PrivacyPolicyPage = () => {
	const policies = [
		"Token Tribe collects personal information from users for the purpose of providing the app's services.",
		'Token Tribe may use cookies to improve the user experience and collect usage data.',
		"Token Tribe may share user data with third-party service providers for the purpose of providing the app's services.",
		"Token Tribe will not share user data with any other third party without the user's consent.",
		'Token Tribe takes reasonable measures to protect user data from unauthorized access or disclosure.',
		"Users may request to access, modify, or delete their personal information by contacting Token Tribe's support team.",
		'Token Tribe reserves the right to modify this privacy policy at any time.',
	];
	return (
		<PublicLayout>
			<Head>
				<title>Privacy Policy</title>
			</Head>
			<div className='max-w-[1240px] w-full mx-auto px-6'>
				<h1 className='font-primary font-bold text-3xl'>
					Privacy Policy
				</h1>
				<ul className='list-disc ml-4 mt-4'>
					{policies.map((policy, idx) => (
						<li key={idx}>{policy}</li>
					))}
				</ul>
				<p className='mt-4'>
					By using Token Tribe, you agree to these terms and
					conditions and privacy policy. If you have any questions or
					concerns, please contact Token Tribe's support team.
				</p>
			</div>
		</PublicLayout>
	);
};

export default PrivacyPolicyPage;
