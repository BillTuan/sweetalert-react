'use strict';

jest.dontMock('../outsideTargetHandlerFactory');

var outsideTargetHandlerFactory = require('../outsideTargetHandlerFactory').default;
var isDOMEquals = require('../isDOMEquals').default;

describe('outsideTargetHandlerFactory', function () {
  var targetNode = void 0;
  var eventHandler = void 0;
  var handler = void 0;

  beforeEach(function () {
    targetNode = document.createElement('div');
    eventHandler = jest.genMockFunction();
    handler = outsideTargetHandlerFactory(targetNode, eventHandler);
  });

  it('handler should call stopPropagation', function () {
    var event = {};
    event.target = { parentNode: null };
    event.stopPropagation = jest.genMockFunction();
    handler(event);
    expect(event.stopPropagation).toBeCalled();
  });

  it('eventHandler should be called when no parentNode', function () {
    var event = {};
    event.target = { parentNode: null };
    event.stopPropagation = function () {};
    handler(event);
    expect(eventHandler).toBeCalled();
  });

  it('eventHandler should not be called when isDOMEquals return true', function () {
    isDOMEquals.mockReturnValue(true);
    var event = {};
    event.target = { parentNode: document.createElement('div') };
    event.stopPropagation = function () {};
    handler(event);
    expect(eventHandler.mock.calls.length).toEqual(0);
  });

  it('eventHandler should not be called when isDOMEquals return false', function () {
    isDOMEquals.mockReturnValueOnce(false);
    var event = {};
    event.target = { parentNode: document.createElement('div') };
    event.stopPropagation = function () {};
    handler(event);
    expect(eventHandler).toBeCalled();
  });
});