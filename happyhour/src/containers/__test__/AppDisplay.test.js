import React from "react";

import { render, mount, shallow } from "enzyme";
import AppDisplay from "../AppDisplay";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
const data = [
  {
    data: {
      cards: [
        {
          title: "App title 1",
          published: true,
          user: "Netfront",
          rating: 3.2
        },
        {
          title: "App title 2",
          published: true,
          user: "Netfront",
          rating: 4.8
        },
        {
          title: "App title 3",
          published: false,
          user: "Netfront",
          rating: 4.0
        }
      ]
    }
  }
];
describe("AppDisplay", () => {
  it("init render", async () => {
    const wrap = shallow(<AppDisplay />);
    expect(wrap.find("#Apps-display-container").length).toEqual(1);
  });
  it("after get data from api", done => {
    const mock = new MockAdapter(axios);
    mock.onGet("data.json").reply(200, data);
    const component = mount(<AppDisplay />);
    setImmediate(() => {
      component.update();
      expect(component.find(".AppCards").length).toEqual(3);
      expect(component.find("#AppCards-star").length).toEqual(15);
      expect(
        component
          .find(".AppCards-pub")
          .at(0)
          .text()
      ).toEqual("Published");
      expect(
        component
          .find(".AppCards-pub")
          .at(2)
          .text()
      ).toEqual("Unpublished");

      done();
    });
  });
});
