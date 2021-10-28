import React from "react";
import { cleanup } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";

import Button from "./Button";

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe("Button test", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const button = shallow(
      <Button
        handleOnClick={mockCallBack}
        type={"button"}
        kindOf={"main"}
        title={"Button"}
      />
    );
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
