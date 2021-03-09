import React from 'react';
import './tags.css';


class Tags extends React.Component {

    state = {
        french: false,
        italian: false,
        american: false,
        asian: false,
        african: false,
        spanish: false,
        vegetarian: false,
        glutenFree: false,
        healthy: false,
        junkfood: false,
    }

    onChange = e => {
        this.setState({[e.target.name] : e.target.checked});
    }

    render(){
        const {french, italien, american, asian, african, spanish, vegetarian, glutenFree, healthy, junkfood} = this.state;    
        return(
            <form className="tags__form">
                <h1 className="titre">Choisissez des types de plats</h1>
                <label>
                    Français
                    <input type="checkbox"
                           checked={french}
                           name="french"
                           onChange={this.onChange}/>
                </label>
                <label>
                    Italien
                    <input type="checkbox"
                           checked={italien}
                           name="italien"
                           onChange={this.onChange}/>
                </label>
                <label>
                    Américain
                    <input type="checkbox"
                           checked={american}
                           name="american"
                           onChange={this.onChange}/>
                </label>
                <label>
                    Asiatique
                    <input type="checkbox"
                           checked={asian}
                           name="asian"
                           onChange={this.onChange}/>
                </label>
                <label>
                    Africain
                    <input type="checkbox"
                           checked={african}
                           name="african"
                           onChange={this.onChange}/>
                </label>
                <label>
                    Espagnol
                    <input type="checkbox"
                           checked={spanish}
                           name="spanish"
                           onChange={this.onChange}/>
                </label>
                <label>
                    Végétarien
                    <input type="checkbox"
                           checked={vegetarian}
                           name="vegetarian"
                           onChange={this.onChange}/>
                </label>
                <label>
                    Sans gluten
                    <input type="checkbox"
                           checked={glutenFree}
                           name="glutenFree"
                           onChange={this.onChange}/>
                </label>
                <label>
                    Healthy
                    <input type="checkbox"
                           checked={healthy}
                           name="healthy"
                           onChange={this.onChange}/>
                </label>
                <label>
                    JunkFood
                    <input type="checkbox"
                           checked={junkfood}
                           name="junkfood"
                           onChange={this.onChange}/>
                </label>
                <input type="submit" value="Valider"/>
            </form>
        )
    }
}

export default Tags;