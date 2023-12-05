import { ShallowWrapper, shallow } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";
import * as Math from "../../Math"
import Mock from "../../Mock";
const feature = loadFeature("./src/__tests__/feature/Mock.feature")

defineFeature(feature, (test) => {
    test("Mock Scenario", ({ given, when, then }) => {
        let wrapperApp: ShallowWrapper
        let instance: Mock

        given("shallow Mock", () => {
            wrapperApp = shallow(<Mock />)
            expect(wrapperApp.exists()).toBeTruthy()
        })
        when("instance Mock", () => {
            instance = wrapperApp.instance() as Mock
            expect(wrapperApp.exists()).toBeTruthy()

        })
        then("test mock", () => {
            expect(Math.add(1, 2)).toBe(3)
            console.log(Math.add(1, 2))
        })
    })
})