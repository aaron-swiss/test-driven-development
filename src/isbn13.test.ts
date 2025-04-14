import { isValid } from './isbn13';

describe('isValid', () => {
  it('should return true for a valid ISBN-13', () => {
    expect(isValid('9780470059029')).toBe(true);
  });

  it('should return false for an invalid ISBN-13 with incorrect checksum', () => {
    expect(isValid('9780470059028')).toBe(false);
  });

  it('should return false for an ISBN-13 with invalid characters', () => {
    expect(isValid('97804700X9029')).toBe(false);
  });

  it('should return false for an ISBN-13 with incorrect length', () => {
    expect(isValid('978047005902')).toBe(false);
    expect(isValid('97804700590299')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isValid('')).toBe(false);
  });

  it('should return false for an ISBN-13 that consists of only zeros (invalid in practice)', () => {
    expect(isValid('0000000000000')).toBe(false);
  });
});