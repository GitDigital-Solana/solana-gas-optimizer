import { Analyzer } from '../src/solana/analyzer';

describe('Analyzer', () => {
  it('should detect anchor try_borrow_data pattern', () => {
    const diff = `+ let data = account.try_borrow_data()?;`;
    const analyzer = new Analyzer(diff);
    const findings = analyzer.analyze();
    expect(findings.some(f => f.message.includes('Repeated account borrow'))).toBe(true);
  });

  it('should return empty for clean diff', () => {
    const diff = `+ let x = 1 + 2;`;
    const analyzer = new Analyzer(diff);
    expect(analyzer.analyze()).toHaveLength(0);
  });
});