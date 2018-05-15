import React from 'react';
import ReactDOM from 'react-dom';
import AuthenticationService from './AuthenticationService';
import renderer from 'react-test-renderer';
import { Enzyme, shallow, configure } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

jest.mock('axios');
jest.mock('moment');
jest.useFakeTimers();

describe('AuthenticationService', () => {

  it('Allows you to authenticate', () => {
    var authService = new AuthenticationService();
    expect(authService).toBeDefine();
  });

});
