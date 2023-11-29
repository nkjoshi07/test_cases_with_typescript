import { ShallowWrapper, shallow } from "enzyme"
import { defineFeature, loadFeature } from "jest-cucumber"
import Blog from "../../Blog"
const feature = loadFeature('./src/__tests__/feature/Blog.feature')


defineFeature(feature, (test) => {
  test("Blog Scenario", ({ given, when, then }) => {
    let wrapperApp: ShallowWrapper;
    let instance: Blog;
    given("Blog given load", () => {
      wrapperApp = shallow(<Blog />)
      expect(wrapperApp.exists()).toBeTruthy()
    })
    when("Blog when load", () => {
      instance = wrapperApp.instance() as Blog
      expect(wrapperApp.exists()).toBeTruthy()
    })
    then("cover app", () => {
      console.log("kj", instance.state.number)
      expect(instance.state.number).toBe(0)
      wrapperApp.find(".add").simulate("click")
      expect(instance.state.number).toBe(1)
      wrapperApp.find(".minus").simulate("click")
      expect(instance.state.number).toBe(0)
    })

  })
})