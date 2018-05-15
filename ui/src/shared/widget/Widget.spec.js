import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './Widget';
import renderer from 'react-test-renderer';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('../../services/local-storage/LocalStorageService');

configure({ adapter: new Adapter() });
describe('Widget', () => {  

    it('Should render correctly', () => {
      const component = renderer.create(<Widget widget-id="mock-widget"/>);
      expect(component.toJSON()).toMatchSnapshot();

      const instance = component.getInstance()
      expect(instance.state).toMatchSnapshot('initial state');     
    });

    it('always renders a Heading', () => {
      const instance = Widget.Heading({ children:[] });
      expect(instance.state).toMatchSnapshot('initial state');     
    });

    it('always renders a Footer', () => {
      const instance = Widget.Footer({ children:[] });
      expect(instance.state).toMatchSnapshot('initial state');     
    });

    it('always renders a Body', () => {
      const instance = Widget.Body({ children:[] });
      expect(instance.state).toMatchSnapshot('initial state');     
    });
});