'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* eslint no-console: 0 */
jest.dontMock('../SweetAlert');
jest.dontMock('warning');

var React = require('react');

var _require = require('enzyme'),
    mount = _require.mount;

var sweetalert = require('sweetalert');

describe('SweetAlert', function () {
  var SweetAlert = void 0;
  beforeEach(function () {
    SweetAlert = require('../SweetAlert').default; // eslint-disable-line global-require
  });

  describe('propTypes', function () {
    it('should return error when imageSize invalid', function () {
      expect(SweetAlert.propTypes.imageSize({ imageSize: '8080' }, 'imageSize')).toEqual(jasmine.any(Error));
    });

    it('should not return error when imageSize valid', function () {
      expect(SweetAlert.propTypes.imageSize({ imageSize: '80x80' }, 'imageSize')).not.toEqual(jasmine.any(Error));
    });

    it('should warning when title is not passed down to props', function () {
      spyOn(console, 'error');
      mount(React.createElement(SweetAlert, null));
      expect(console.error).toHaveBeenCalledWith('Warning: Failed propType: ' + 'Required prop `title` was not specified in `SweetAlert`.');
    });
  });

  describe('warning REMOVED_KEYS', function () {
    beforeEach(function () {
      spyOn(console, 'error');
    });

    it('should warning when REMOVED_KEYS:timer is passed down to props', function () {
      mount(React.createElement(SweetAlert, { title: 't', timer: 60 }));
      expect(console.error).toHaveBeenCalledWith('Warning: `timer` has been removed from sweetalert-react, ' + 'pass `show` props and use event hook instead.');
    });

    it('should warning when REMOVED_KEYS:timer is passed down to props', function () {
      mount(React.createElement(SweetAlert, { title: 't', timer: 60 }));
      expect(console.error).toHaveBeenCalledWith('Warning: `timer` has been removed from sweetalert-react, ' + 'pass `show` props and use event hook instead.');
    });

    it('should warning when REMOVED_KEYS:closeOnConfirm is passed down to props', function () {
      mount(React.createElement(SweetAlert, { title: 't', closeOnConfirm: true }));
      expect(console.error).toHaveBeenCalledWith('Warning: `closeOnConfirm` has been removed from sweetalert-react, ' + 'pass `show` props and use event hook instead.');
    });

    it('should warning when REMOVED_KEYS:closeOnCancel is passed down to props', function () {
      mount(React.createElement(SweetAlert, { title: 't', closeOnCancel: true }));
      expect(console.error).toHaveBeenCalledWith('Warning: `closeOnCancel` has been removed from sweetalert-react, ' + 'pass `show` props and use event hook instead.');
    });

    it('should warning when REMOVED_KEYS:allowOutsideClick is passed down to props', function () {
      mount(React.createElement(SweetAlert, { title: 't', allowOutsideClick: true }));
      expect(console.error).toHaveBeenCalledWith('Warning: `allowOutsideClick` has been removed from sweetalert-react, ' + 'pass `show` props and use event hook instead.');
    });

    it('should warning when REMOVED_KEYS:allowEscapeKey is passed down to props', function () {
      mount(React.createElement(SweetAlert, { title: 't', allowEscapeKey: true }));
      expect(console.error).toHaveBeenCalledWith('Warning: `allowEscapeKey` has been removed from sweetalert-react, ' + 'pass `show` props and use event hook instead.');
    });
  });

  describe('should show prop works', function () {
    xit('description', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var container;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              container = document.createElement('div');

              container.id = 'root';
              document.body.appendChild(container);
              mount(React.createElement(SweetAlert, { title: 't', show: true }), document.getElementById('root'));
              expect(sweetalert).toBeCalled();

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })));
  });

  xit('should `onConfirm` works', function () {
    var callback = jest.genMockFunction();
    runs(function () {
      var container = document.createElement('div');
      container.id = 'root';
      document.body.appendChild(container);
      mount(React.createElement(SweetAlert, { title: 't', show: true, onConfirm: callback }), document.getElementById('root'));
    });

    waitsFor(function () {
      return document.querySelector('.sweetalert .confirm');
    }, 'The Value should be incremented', 5000);

    runs(function () {
      document.querySelector('.sweetalert .confirm').click();
      expect(function () {}).toBeCalled();
    });
  });

  describe('Cancel', function () {
    // body...
  });

  describe('Outside click', function () {
    // body...
  });

  describe('ESC', function () {
    // body...
  });
});