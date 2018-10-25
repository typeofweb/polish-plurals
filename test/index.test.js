import { expect } from 'chai';

import { polishPlurals } from '../index'

describe('polish plurals', () => {
  it('should handle singular', () => {
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 1)).to.eql('komentarz');
  });

  it('should handle plural nominativ', () => {
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 2)).to.eql('komentarze');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 3)).to.eql('komentarze');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 4)).to.eql('komentarze');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 22)).to.eql('komentarze');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 23)).to.eql('komentarze');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 24)).to.eql('komentarze');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 32)).to.eql('komentarze');
  });

  it('should handle plural genitive', () => {
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 5)).to.eql('komentarzy');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 6)).to.eql('komentarzy');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 7)).to.eql('komentarzy');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 8)).to.eql('komentarzy');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 9)).to.eql('komentarzy');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 10)).to.eql('komentarzy');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', 0)).to.eql('komentarzy');
  });

  it('should handle negative numbers', () => {
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -1)).to.eql('komentarz');

    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -2)).to.eql('komentarze');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -3)).to.eql('komentarze');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -4)).to.eql('komentarze');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -22)).to.eql('komentarze');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -23)).to.eql('komentarze');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -24)).to.eql('komentarze');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -32)).to.eql('komentarze');

    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -5)).to.eql('komentarzy');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -6)).to.eql('komentarzy');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -7)).to.eql('komentarzy');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -8)).to.eql('komentarzy');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -9)).to.eql('komentarzy');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -10)).to.eql('komentarzy');
    expect(polishPlurals('komentarz', 'komentarze', 'komentarzy', -0)).to.eql('komentarzy');
  });
  
  it('should allow binding', () => {
    const commentsLabel = polishPlurals.bind(null, 'komentarz', 'komentarze', 'komentarzy');
    expect(commentsLabel(1)).to.eql('komentarz');
    expect(commentsLabel(3)).to.eql('komentarze');
    expect(commentsLabel(5)).to.eql('komentarzy');
    expect(commentsLabel(-1)).to.eql('komentarz');
    expect(commentsLabel(-3)).to.eql('komentarze');
    expect(commentsLabel(-5)).to.eql('komentarzy');
  });

  it('should allow partial aplication', () => {
    const partialCommentsLabel = polishPlurals('komentarz', 'komentarze', 'komentarzy');

    expect(partialCommentsLabel(1)).to.eql(polishPlurals('komentarz', 'komentarze', 'komentarzy', 1));
  });
});
