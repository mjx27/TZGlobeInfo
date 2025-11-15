export const getFlag = (countryCode: string | undefined): string => {
  if (countryCode)
    {return `https://flagcdn.com/w640/${countryCode.toLowerCase()}.png`;}
  return '';
};
