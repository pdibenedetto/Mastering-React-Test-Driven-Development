import React from 'react'
import ReactDOM from 'react-dom'
import {Appointment} from '../src/Appointment'
import {describe, expect, it} from "@jest/globals";

describe('Appointment', () => {
  it('renders the customer first name', () => {
    const customer = {firstName: 'Ashley'}
    const component = <Appointment customer={customer} />
    const container = document.createElement('div')
    document.body.appendChild(container)

    ReactDOM.render(component, container)
    expect(document.body.textContent).toMatch('Ashley')
  })
})
