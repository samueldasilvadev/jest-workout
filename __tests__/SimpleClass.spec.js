import SimpleClass from "../src/Classes/SimpleClass";

describe('Test Simple Class', () => {
  it('teste', () => {
    const s = new SimpleClass('test');
    expect(s.getName()).toBe('test');
  });
});
