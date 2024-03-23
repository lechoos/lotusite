'use server';

import { Resend } from 'resend';
import GithubAccessTokenEmail from './mail';

export const send = async (formData) => {
	const resend = new Resend(process.env.RESEND_API_KEY);
	function formatDate(date) {
    // Pobierz dzień, miesiąc, rok, godzinę i minutę
    const day = date.getDate();
    const month = date.getMonth() + 1; // Miesiące są indeksowane od zera, dlatego dodajemy 1
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Utwórz zero przed cyframi jednocyfrowymi
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Zwróć sformatowaną datę
    return `${formattedDay}.${formattedMonth}.${year}, godz: ${formattedHours}:${formattedMinutes}`;
}
	const date = new Date();
	const fDate = formatDate(date);

	const data = await resend.emails.send({
		from: 'kontakt@lotusite.pl',
		to: 'formularz.lotusite@gmail.com',
		subject: `${formData.company} | ${fDate}` ,
		react: GithubAccessTokenEmail(formData),
	});

  return data;
};
