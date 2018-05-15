const moment = jest.fn();
moment.unix = jest.fn();
moment.__isAfter = jest.fn();
moment.__subtract = jest.fn();
moment.__unix = jest.fn();

moment.__subtract.mockReturnValue({
  isAfter: moment.__isAfter,
  subtract: moment.__subtract,
  unix: moment.__unix
});

moment.mockReturnValue({
  isAfter: moment.__isAfter,
  subtract: moment.__subtract,
  unix: moment.__unix
});

export default moment;
