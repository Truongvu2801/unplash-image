import React from 'react'
import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react'

import CardsPage from '../../views/ListCards/CardsPage';
import FormInput from '../../components/FormInput';


const data = [{
    user: {
      profile_image: {
        small: "https://images.unsplash.com/profile-1600096866391-b09a1a53451aimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
      }
    }
}]
describe('Cards Page', function () {
  let axios
  beforeEach(function () {
    axios = {
      get: jest.fn()
    }
    axios.get.mockResolvedValueOnce({
      data: data
    })
    return ( <CardsPage />)
  })
  const setup = () => {
    const utils = render( < FormInput /> )
    const input = utils.getByLabelText('form-input')
    return {
      input,
      ...utils,
    }
  }
  it('It should not allow letters to be inputted', () => {
    const {
      input
    } = setup()
    expect(input.value).toBe('') // empty before
    fireEvent.change(input, {
      target: {
        value: 'Good Day'
      }
    })
    expect(input.value).toBe('Good Day') // after
  })
  it('It should render list cards', async () => {
    axios.get.mockResolvedValueOnce({
      data: data
    })

    await waitFor(function () {
      // const card = screen.getByRole('')
      // expect(card).toBeInTheDocument()
    })
  })
})