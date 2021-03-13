import React from 'react';
import './tags.css';
import 'whatwg-fetch'
import Checkbox from "./Checkbox";

let OPTIONS = ["Africain", "Américain", "Asiatique", "Espagnol", "Français"];

class Tags extends React.Component {

    constructor(props){
        super();
        console.log(this.props)
        this.handleTags = this.handleTags.bind(this)

        this.state = {
            checkboxes: OPTIONS.reduce(
              (options, option) => ({
                ...options,
                [option]: false
              }),
              {}
            )
          };

    }

    onChange = e => {
        this.setState({[e.target.name] : e.target.checked});
    }

    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.checkboxes).forEach(checkbox => {
            this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [checkbox]: isSelected
            }
            }));
        });
    };
    
    selectAll = () => this.selectAllCheckboxes(true);
    
    deselectAll = () => this.selectAllCheckboxes(false);
    
    handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
        checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
        }
    }));
    };
    
    handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
        .filter(checkbox => this.state.checkboxes[checkbox])
        .forEach(checkbox => {
        console.log(checkbox, "is selected.");
        });
    };
    
    createCheckbox = option => (
    <Checkbox
        label={option}
        isSelected={this.state.checkboxes[option]}
        onCheckboxChange={this.handleCheckboxChange}
        key={option}
    />
    );

    createCheckboxes = () => OPTIONS.map(this.createCheckbox);

    render() {
        return (
            <div className="container">
            <div className="row mt-5">
                <div className="col-sm-12">
                <h1 className="titre">Choisissez des types de plats</h1>
                <form onSubmit={this.handleFormSubmit}>
                    {this.createCheckboxes()}
                    <div className="form-group mt-2">
                    <button
                        type="button"
                        className="btn btn-outline-primary mr-2"
                        onClick={this.handleTags}
                    >
                        Charger plus...
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-primary mr-2"
                        onClick={this.selectAll}
                    >
                        Tout sélectionner
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-primary mr-2"
                        onClick={this.deselectAll}
                    >
                        Tout déselectionner
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Sauvegarder mes choix
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        );
    }

    handleTags(event){
        event.preventDefault();
        console.log('Get tags from database...')
        
        // POST request using fetch with error handling
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ');
        headers.append('Origin','http://localhost:3000');

         let tagJson = {
            tag: this.state.tag,
        }
        
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: headers,
        };
        fetch('http://localhost:4000/api/db/tags/', requestOptions)
            .then(async res => {
                const data = await res.json();
                console.log(data)
                // check for error response
                if (!res.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || res.status;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
}

export default Tags;