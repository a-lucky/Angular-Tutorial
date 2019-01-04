import { NestableExpandCollapseDirective } from './nestable-expand-collapse.directive';

describe('NestableExpandCollapseDirective', () => {
  it('should create an instance', () => {
    const directive = new NestableExpandCollapseDirective(null);
    expect(directive).toBeTruthy();
  });
});
