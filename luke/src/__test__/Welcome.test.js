import React from "react";
import Welcome from "../components/Welcome";
import { shallow } from "enzyme";
describe("Welcome", () => {
  it("init render", () => {
    const wrap = shallow(<Welcome />);
    expect(wrap.find("#Welcome-jump").length).toEqual(1);
  });
  it("click link", () => {
    const wrap = shallow(<Welcome />);
    expect(wrap.find("#Welcome-jump").props().to).toEqual("/app");
  });
});
