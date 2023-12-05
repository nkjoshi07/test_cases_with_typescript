import { ReactWrapper, ShallowWrapper, mount, shallow } from "enzyme"
import App from "../../App"
import { defineFeature, loadFeature } from "jest-cucumber"
import { act } from "react-dom/test-utils"
const feature = loadFeature('./src/__tests__/feature/App.feature')


defineFeature(feature, (test) => {
  test("App Scenario", ({ given, when, then }) => {
    let wrapperApp: ShallowWrapper;
    let instance: App;
    let onSubmitMock: any
    // beforeEach(() => {
    //   wrapperApp = mount(<App />);
    // });

    const mockData = {
      email: "test@example.com",
      password: "testpassword"
    }

    given("App given load", () => {
      wrapperApp = shallow(<App />)
      onSubmitMock = jest.fn();
      expect(wrapperApp.exists()).toBeTruthy()
    })
    when("App when load", () => {
      instance = wrapperApp.instance() as App
      expect(wrapperApp.exists()).toBeTruthy()
    })
    then("cover handleClickFunc", () => {
      expect(instance.state.isOpen).toBe(false)
    })
    then("check initialvalues", () => {
      wrapperApp.find('#input-email').simulate("change", { target: { value: "test@example.com" } })
      const email = wrapperApp.find('#input-email').simulate("change", { target: { value: "test@example.com" } }).prop("value")
      wrapperApp.find('#input-password').simulate("change", { target: { value: "testpassword" } })
      wrapperApp.find('[type="submit"]').simulate("submit")
      console.log("email", email)
      const formikTest = wrapperApp.findWhere((node) => (node.prop('data-testid') === 'formikTest'))

      expect(formikTest.exists()).toBeTruthy();
      // instance.handleClick({ email: '123@gmail.com', password: '123' })
      // const values = instance.handleClick(mockData)
    })

    then("check emailInput", () => {
      const emailInput = wrapperApp.find('#input-email');
      emailInput.simulate('change', { target: { name: 'email', value: 'test@example.com' } });
      const emailValue = wrapperApp.find('#input-email').prop('value')
      console.log("emailValue", emailValue)
      wrapperApp.update();
    })

    then("check initialValues", () => {
      // const initialValues = instance.state.initialvalues
      // console.log("initialValues", initialValues)
      wrapperApp.find('[type="submit"]').simulate("submit")
      instance.handleClick(mockData)
    })
  })
})