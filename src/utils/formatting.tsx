export const formatUrl = (longUrl: string) => {
  const createShortUrl = longUrl.slice(0, 35) + (longUrl && longUrl.length > 35 ? '...' : '');

  return createShortUrl;
};

export const formatDate = (date: any) => {
  const formatDate = new Date(date * 1000).toLocaleDateString('en-GB', { hour: 'numeric', minute: 'numeric' });

  return formatDate;
};
