import * as React from "react";
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Notifications from '../src/components/Notifications';
import checkPropTypes from 'check-prop-types';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'props',
    component.name
  )
   expect(propError).toBe(undefined);
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

const setup = (props, state=null) => {
   const wrapper = shallow(<Notifications {...props} />).dive();
   if(state) return wrapper.setState(state);
   return wrapper;
}

describe('Component renders successfully', () => {
  test('state changes as expected', () => {
    const wrapper = setup();
    const openNotifComponent = findByTestAttr(wrapper, "open-notifcations");
    const closeNotifComponent = findByTestAttr(wrapper, "close-notifications");

    expect(wrapper.state().openNotif).toBe(false);
    expect(wrapper.state().closeNotif).toBe(false);


  });

});
