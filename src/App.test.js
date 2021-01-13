import React from 'react'

import { mount } from 'enzyme'

import App from './App'
import UserContextProvider from './contexts/UserContextProvider'

describe("Test context", () => {

  it("renders 'Please log in' with initial state", () => {
    const wrapper = mount(
      <UserContextProvider><App/></UserContextProvider>
    )
    expect(wrapper.find("button").text()).toContain("Please log in")
  })

  it("renders 'Welcome' when user clicks on Log in button", () => {
    const wrapper = mount(
      <UserContextProvider><App/></UserContextProvider>
    )
    wrapper.find("button").simulate("click")
    expect(wrapper.find("div div").text()).toContain("Welcome")
  })

  it("renders 'Please log in' when users clicks on log out button", () => {
    const wrapper = mount(
      <UserContextProvider><App/></UserContextProvider>
    )
    wrapper.find("button").simulate("click")
    wrapper.find("button").simulate("click")
    expect(wrapper.find("button").text()).toContain("Please log in")
  })

})