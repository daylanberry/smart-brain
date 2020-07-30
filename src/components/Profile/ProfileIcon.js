import React from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


class ProfileIcon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownOpen: false
    }

  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  signout = () => {
    fetch('http://localhost:3000/signout', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.sessionStorage.getItem('token')
      }
    })
    .then(resp => resp.json())
    .then(() => window.sessionStorage.removeItem('token'))
    .then(() => this.props.onRouteChange('signout'))
    .catch(err => console.log(err))

  }

  render() {
    return (
      <div className='pa4 tc' style={{marginRight: '70px'}}>
        <ButtonDropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggle
            tag='span'
            data-toggle='dropdown'
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="br-100 ba h3 w3 dib" alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu
            style={{backgroundColor: 'blue'}}
            right
            className='b--transparent shadow-5'
            style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
          >
            <DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
            <DropdownItem onClick={this.signout}>Signout</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

      </div>
    )
  }
}

export default ProfileIcon