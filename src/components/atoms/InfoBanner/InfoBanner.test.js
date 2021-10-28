import React from "react";
import { cleanup, getByText } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";
import { InfoBanner } from "../index";

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe("InfoBanner test", () => {
  it("Test if contains text", () => {
    const item = shallow(<InfoBanner content={<p>Test</p>} />);

    expect(item.text().includes("Test")).toBe(true);
  });
});
