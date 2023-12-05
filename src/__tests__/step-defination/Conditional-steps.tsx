import { ShallowWrapper, shallow } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";
import ConditionalRendering from "../../ConditionalRendering";

const feature = loadFeature('./src/__tests__/feature/Conditional_Rendering.feature')

defineFeature(feature, (test) => {
    test("ConditionalRendering Scenario", ({ given, when, then }) => {
        let ShallowWrapperApp: ShallowWrapper;
        let instance: ConditionalRendering
        given("cover all ConditionalRendering Component", () => {
            ShallowWrapperApp = shallow(<ConditionalRendering />)
            expect(ShallowWrapperApp.exists()).toBeTruthy()
        })
        when("instance all ConditionalRendering Component", () => {
            instance = ShallowWrapperApp.instance() as ConditionalRendering
            expect(ShallowWrapperApp.exists()).toBeTruthy()
        })
        then("Check ConditionalRendering Component", () => {
            expect(instance.state.role).toBe("admin")
        })
        then("Check Conditional Rendering", () => {
            const state = instance.state.role
        })
        then("Check Functionality", () => {
            ShallowWrapperApp.find("#button").simulate("click")
            expect(instance.state.role).toBe("employee")
            ShallowWrapperApp.find("#button").simulate("click")
            expect(instance.state.role).toBe("admin")
        })
    })
})