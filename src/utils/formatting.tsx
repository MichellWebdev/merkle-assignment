export const formatUrl = (longUrl: string) => {
  const createShortUrl = longUrl.slice(0, 40) + (longUrl && longUrl.length > 40 ? '...' : '');

  return createShortUrl;
};

export const formatDate = (date: any) => {
  const formatDate = new Date(date * 1000).toLocaleDateString('en-GB', { hour: 'numeric', minute: 'numeric' });

  return formatDate;
};
