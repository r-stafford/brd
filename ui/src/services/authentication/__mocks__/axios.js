import { set, each } from 'lodash';

const axiosMock = jest.fn();

each([
  'request',
  'get',
  'delete',
  'head',
  'options',
  'put',
  'post',
  'patch',
  'create'
], method => set(axiosMock, method, jest.fn()));

axiosMock.create.mockReturnValue(axiosMock);
set(axiosMock, 'interceptors.request.use', jest.fn());
set(axiosMock, 'interceptors.response.use', jest.fn());

export default axiosMock;
