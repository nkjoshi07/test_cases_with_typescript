import { ShallowWrapper, shallow } from "enzyme"
import App from "../../App"
import { defineFeature, loadFeature } from "jest-cucumber"
const feature = loadFeature('./src/__tests__/feature/App.feature')


defineFeature(feature, (test) => {
  test("App Scenario", ({ given, when, then }) => {
    let wrapperApp: ShallowWrapper;
    let instance: App;
    given("App given load", () => {
      wrapperApp = shallow(<App />)
      expect(wrapperApp.exists()).toBeTruthy()
    })
    when("App when load", () => {
      instance = wrapperApp.instance() as App
      expect(wrapperApp.exists()).toBeTruthy()
    })
    then("cover handleClickFunc", () => {
      expect(instance.state.isOpen).toBe(false)
    })

  })
})