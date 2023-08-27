import React from 'react'

import { render, screen } from '@testing-library/react'

import { AutoCompleteExample } from '../autoComplete/AutoCompleteExample'
import { SearchForm, SearchFormDisplay } from '../searchForm'
import { PriceSimulator } from './PriceSimulator'

const component = (
  <PriceSimulator
    title="Become a BlaBlaCar driver and save money by sharing your travel fees"
    illustration={
      <img
        src="https://cdn.blablacar.com/kairos/assets/build/images/astronaut-79c2cfcb1a66f7c9afc1bbc50f0037fd.svg"
        alt=""
      />
    }
    terms={
      <span>
        Receive a €25 fuel voucher with BlaBlaCar and €15 fuel voucher with BlaBlaCar daily after
        your first trip as a driver with at least a passenger on BlaBlaCar and BlaBlaCar Daily (
        <a href="https://www.blablacar.fr">terms</a>)
      </span>
    }
  >
    <SearchForm
      onSubmit={() => {}}
      initialFrom="Paris"
      initialTo="Toulouse"
      disabledFrom={false}
      disabledTo={false}
      autocompleteFromPlaceholder="Leaving From"
      autocompleteToPlaceholder="Going to"
      renderAutocompleteFrom={props => <AutoCompleteExample {...props} embeddedInSearchForm />}
      renderAutocompleteTo={props => <AutoCompleteExample {...props} embeddedInSearchForm />}
      datepickerProps={{
        defaultValue: new Date().toISOString(),
        format: value => new Date(value).toLocaleDateString(),
      }}
      stepperProps={{
        defaultValue: 1,
        min: 1,
        max: 8,
        title: 'Choose your number of seats',
        increaseLabel: 'Increase the number of seats by 1',
        decreaseLabel: 'Decrease the number of seats by 1',
        format: value => `${value} seat(s)`,
        confirmLabel: 'Submit',
      }}
      submitButtonText="Publish a ride"
      display={SearchFormDisplay.SMALL}
      showDateField={false}
    />
  </PriceSimulator>
)

describe('PriceSimulator', () => {
  it('should render the PriceSimulator', () => {
    render(component)
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Become a BlaBlaCar driver and save money by sharing your travel fees',
    )
  })
})
