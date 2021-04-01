/**
 * Return zodiac sign by month and day
 * @param day {string}
 * @param month {string}
 * @return {string} name of zodiac sign
 */
function ZodiacCalculator(day: number, month: number): string {
  const signs = {
    Capricorn: 'Capricorn',
    Aquarius: 'Aquarius',
    Pisces: 'Pisces',
    Aries: 'Aries',
    Taurus: 'Taurus',
    Gemini: 'Gemini',
    Cancer: 'Cancer',
    Leo: 'Leo',
    Virgo: 'Virgo',
    Libra: 'Libra',
    Scorpio: 'Scorpio',
    Sagittarius: 'Sagittarius',
  };

  if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) {
    return signs.Capricorn;
  }
  if ((month === 1 && day >= 21) || (month === 2 && day <= 19)) {
    return signs.Aquarius;
  }
  if ((month === 2 && day >= 20) || (month === 3 && day <= 20)) {
    return signs.Pisces;
  }
  if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
    return signs.Aries;
  }
  if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
    return signs.Taurus;
  }
  if ((month === 5 && day >= 22) || (month === 6 && day <= 22)) {
    return signs.Gemini;
  }
  if ((month === 6 && day >= 23) || (month === 7 && day <= 23)) {
    return signs.Cancer;
  }
  if ((month === 7 && day >= 24) || (month === 8 && day <= 23)) {
    return signs.Leo;
  }
  if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
    return signs.Virgo;
  }
  if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
    return signs.Libra;
  }
  if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
    return signs.Scorpio;
  }
  if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
    return signs.Sagittarius;
  }
}

export default ZodiacCalculator;
