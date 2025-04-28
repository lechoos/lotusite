import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	classes?: string;
}

export const Section = ({ children, classes = '' }: Props) => (
	<section className={`section ${classes}`}>{children}</section>
);
