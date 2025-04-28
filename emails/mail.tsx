import { Body, Button, Container, Head, Html, Link, Preview, Section, Text } from '@react-email/components';
import * as React from 'react';

interface FormData {
	name: string;
	email: string;
	phone: string;
	message: string;
	company: string;
}

export const GithubAccessTokenEmail = (formData: FormData) => (
	<Html lang='pl'>
		<Head />
		<Preview>Dziękuję za wiadomość</Preview>
		<Body style={main}>
			<Container style={container}>
				<Text style={title}>
					<strong>{formData.name}</strong>, {formData.company} :)
				</Text>

				<Section style={sectionBlue}>
					<Text style={text}>
						Cześć <strong>{formData.email}</strong>!
					</Text>
					<Text style={text}>{formData.phone}</Text>
					<Text style={text}>{formData.message}</Text>

					<Button href='https://lotusite.pl' style={button}></Button>
				</Section>
				<Text style={{ textAlign: 'center' }}>
					<Link style={link}>Audyt bezpieczeństwa</Link> ・ <Link style={link}>Kontakt</Link>
				</Text>
			</Container>
		</Body>
	</Html>
);

GithubAccessTokenEmail.PreviewProps = {
	username: 'alanturing',
};

export default GithubAccessTokenEmail;

const main = {
	backgroundColor: '#ffffff',
	color: '#24292e',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
	maxWidth: '480px',
	margin: '0 auto',
	padding: '20px 0 48px',
};

const title = {
	fontSize: '24px',
	lineHeight: 1.25,
};

const sectionBlue = {
	padding: '24px',
	backgroundColor: '#54aedf',
	borderRadius: '16px',
	'text-align': 'center',
};

const text = {
	margin: '0 0 10px 0',
	'text-align': 'left',
};

const button = {
	fontSize: '14px',
	backgroundColor: '#28a745',
	color: '#fff',
	lineHeight: 1.5,
	borderRadius: '0.5em',
	padding: '12px 24px',
};

const link = {
	color: '#0366d6',
	fontSize: '12px',
};
