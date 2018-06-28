
import React, {
  Component
} from 'react';

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   searchInput: ''
    // };
  }

  // handleChange = (e) => {
  //   this.setState({
  //     searchInput: e.target.value
  //   });
  // }

  render() {
    return ( 
      <form className = "search" >
        <input type = "text"
          name = "search"
          placeholder = "search for area"
          onChange = { (event) =>{
            // this.handleChange()
            this.props.showSearchResults(event.target.value);
          }}
        /> </form>);

  }
}