import React from "react";
import { cleanup } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";
import { Item } from "../index";
import { shallowToJson } from "enzyme-to-json";

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe("Item test", () => {
  it("Test hover effect", () => {
    const mockCallBack = jest.fn();

    const item = shallow(
      <Item
        selected={false}
        id={0}
        setSelected={mockCallBack}
        content={"Test"}
      />
    );
    expect(shallowToJson(item)).toMatchSnapshot();

    item.prop("onMouseEnter")();
    expect(shallowToJson(item)).toMatchSnapshot();

    item.prop("onMouseLeave")();
    expect(shallowToJson(item)).toMatchSnapshot();
  });
});
