import { EmailValidPipe } from './week-3-day-2/email-valid-pipe';

describe('EmailValidPipe', () => {
  it('create an instance', () => {
    const pipe = new EmailValidPipe();
    expect(pipe).toBeTruthy();
  });
});
