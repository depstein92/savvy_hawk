import * as React from "react";
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../src/components/app';
import Home from '../src/components/Home';
import LeftSideBar from '../src/components/LeftSideBar';
import CalendarLink from '../src/components/CalendarLink';
import checkPropTypes from 'check-prop-types';
import { checkProps, findByTestAttr } from './testHelpers/index';

Enzyme.configure({ adapter: new EnzymeAdapter() });


describe('<CalanderLink />', () => {

  const setup = (props=null, state=null) => {
    const wrapper = shallow(<CalendarLink  {...props} />);
    if(state) return wrapper.setState(state);
    return wrapper;
  }

  test('calander link renders', () => {
    const wrapper = setup();
    const calendarlink = findByTestAttr(wrapper, "calenderlink");
    const calanderLinkContainer = findByTestAttr(wrapper, "calenderlink-container");

    expect(calendarlink).toBeDefined();
    expect(calendarlink.length).toBe(1);
  });

  test('state changes on hover', () => {
    const wrapper = setup();
    const calendarlink = findByTestAttr(wrapper, "calenderlink");
    const calanderLinkContainer = findByTestAttr(wrapper, "calenderlink-container");

    expect(wrapper.state().isPopoverVisible).toEqual(false)
    calendarlink.simulate("mouseover");
    expect(wrapper.state().isPopoverVisible).toEqual(true);

    const popover = findByTestAttr(wrapper, "popover");
    popover.simulate("mouseout");
    expect(wrapper.state().isPopoverVisible).toEqual(false);
  });

  test('popover renders on hover', () => {
    const wrapper = setup();
    const lengthBeforeStateChange = wrapper.html().length;
    
    wrapper.setState({ isPopoverVisible: true });

    expect(lengthBeforeStateChange).toBeLessThan(wrapper.html().length);
  });

});

describe('<LeftSideBar />', () => {

  const setup = (props=null, state=null) => {
    const wrapper = shallow(<LeftSideBar  {...props} />);
    if(state) return wrapper.setState(state);
    return wrapper;
  }

  test('state changes on prop change', () => {
    const wrapper = setup();



  })

});
