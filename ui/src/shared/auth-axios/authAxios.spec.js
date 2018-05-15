import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Enzyme, shallow, configure } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import { each, set } from 'lodash';
import authAxios from './authAxios';
import axios from 'axios';

describe('authAxios', () => {

  it('adds a request interceptor to add the JWT Authorization header to outgoing requests', done => {
    const aAxios = authAxios('mock-jwt');
    
    expect(aAxios.__jwtRequestInterceptor({
      url: '/api/test',
      params: { foo: 'bar' }
    })).toEqual({
      url: '/api/test',
      params: { foo: 'bar' },
      headers: { Authorization: 'JWT mock-jwt' }
    });

    expect(aAxios.__jwtRequestInterceptor()).toEqual({
      headers: { Authorization: 'JWT mock-jwt' }
    });

    aAxios.__jwtRequestFailureInterceptor({ error: true }).catch(
      err => {
        expect(err).toEqual({ error: true });
        done();
      });
  });

});
