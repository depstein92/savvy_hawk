import * as React from "react";
import Enzyme, { shallow, mount } from 'enzyme';

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'props',
    component.name
  )
   expect(propError).toBe(undefined);
}

 export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}
