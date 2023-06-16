import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Accordion from '.'


test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Accordion>Load Greeting</Accordion>)

  
})
