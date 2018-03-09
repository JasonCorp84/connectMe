import React, { Component } from 'react';
import { 
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown, 
    Input, 
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
     } from 'reactstrap';



class Navigation extends Component {

    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
          dropdownOpen: false,
        };
    }

    toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    render() {
        return(
            <div className="navigation navigation--mobile">

                <InputGroup>
                    <Input placeholder='&#128269; search' />
                    {/* <InputGroupAddon addonType="append"><Button color="secondary"><a href="#">sing in/</a><a href="#">Join</a></Button></InputGroupAddon> */}
                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>
            &#5010;&#5010;&#5010;
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header><a href="#">Log In</a></DropdownItem>
              <DropdownItem header><a href="#">Register</a></DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
                </InputGroup>
            </div>
    )
    }
}

export default Navigation;