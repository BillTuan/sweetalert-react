'use strict';

jest.dontMock('../isDOMEquals');

var isDOMEquals = require('../isDOMEquals').default;

describe('isDOMEquals', function () {
  it('should be true if dom equals', function () {
    var div = document.createElement('div');
    expect(isDOMEquals(div, div)).toEqual(true);
  });

  it('should be false if dom does not equal', function () {
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    expect(isDOMEquals(div1, div2)).toEqual(false);
  });
});