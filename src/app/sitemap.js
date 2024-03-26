export default function sitemap() {
  const baseUrl = 'https://lotusite.pl'; 

  return [
    {
      url: baseUrl, 
      lastModified: new Date(), 
      priority: 1,
    }, 
    {
      url: baseUrl + '/uslugi', 
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: baseUrl + '/kontakt', 
      lastModified: new Date(),
      priority: 1,
    }
  ]
};