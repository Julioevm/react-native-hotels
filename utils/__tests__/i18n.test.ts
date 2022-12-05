// test file for i18n.ts
//
import {getCurrencySymbol} from '../i18n';
describe('getCurrencySymbol', () => {
  it('should return the currency symbol for known currencies', () => {
    expect(getCurrencySymbol('EUR')).toBe('€');
    expect(getCurrencySymbol('USD')).toBe('$');
    expect(getCurrencySymbol('GBP')).toBe('£');
  });
  it('should return the currency code for unknown currencies', () => {
    expect(getCurrencySymbol('CAD')).toBe('CAD');
  });
});
