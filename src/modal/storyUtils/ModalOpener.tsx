/* eslint-disable react/button-has-type */
import React, { Component } from 'react'

import { FilterBar } from '../../filterBar'
import { Fog } from '../../fog'
import { CarpoolIcon } from '../../icon'
import { ItemCheckbox } from '../../itemCheckbox'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { SubHeader } from '../../subHeader/SubHeader'
import { TheVoice } from '../../theVoice'
import { Modal, ModalBody, ModalFooter, ModalProps } from '../index'

export class ModalOpener extends Component<ModalProps> {
  state = {
    modalOpen: false,
    modalOpen2: false,
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  openModal2 = () => {
    this.setState({ modalOpen2: true })
  }

  closeModal2 = () => {
    this.setState({ modalOpen2: false })
  }

  render() {
    return (
      <Section>
        <button onClick={this.openModal}>Open modal 1</button>
        <button onClick={this.openModal2}>Open modal using Layout components</button>
        <Modal {...this.props} onClose={this.closeModal} isOpen={this.state.modalOpen}>
          <div>
            <h1 id="label1">Modal 1</h1>
            <p id="description1">This is the description of my modal</p>
            <img src="http://placekitten.com/g/216/144" width="216" height="144" alt="A kitten" />
          </div>
        </Modal>

        <Modal
          {...this.props}
          onClose={this.closeModal2}
          isOpen={this.state.modalOpen2}
          noHorizontalSpacing
          layoutModeEnabled
        >
          <ModalBody>
            <Fog isLoading={this.props.isLoading}>
              <TheVoice>Filters</TheVoice>
              <Section>
                <SubHeader>Amenities & Services</SubHeader>
              </Section>
              <Section noHorizontalSpacing>
                <ItemCheckbox name="ladies" labelTitle="Ladies only" />
                <ItemCheckbox name="automatic" labelTitle="Automatic Approval" />
                <ItemCheckbox name="wifi" labelTitle="Wifi" />
                <ItemCheckbox name="air" labelTitle="Air conditioning" />
                <ItemCheckbox name="reclining" labelTitle="Reclining seats" />
                <ItemCheckbox name="personal" labelTitle="Personal power outlets" />
                <ItemCheckbox name="ladies" labelTitle="Ladies only" />
                <ItemCheckbox name="automatic" labelTitle="Automatic Approval" />
                <ItemCheckbox name="wifi" labelTitle="Wifi" />
                <ItemCheckbox name="air" labelTitle="Air conditioning" />
                <ItemCheckbox name="reclining" labelTitle="Reclining seats" />
                <ItemCheckbox name="personal" labelTitle="Personal power outlets" />
              </Section>
            </Fog>
          </ModalBody>
          <ModalFooter>
            <FilterBar
              ctaText="See rides"
              supplyInfo={[
                {
                  icon: CarpoolIcon,
                  iconTitle: 'Carpooling',
                  liquidity: 20,
                  ariaLabel: 'Carpool available',
                },
              ]}
              onClick={() => {}}
            />
          </ModalFooter>
        </Modal>
      </Section>
    )
  }
}
