import React from 'react';

class SearchBar extends React.Component{
   state={term:''};
   onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitting(this.state.term);
   }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={this.state.term} 
                        onChange={e=>this.setState({term:e.target.value})}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;