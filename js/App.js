import React, {Component} from "react";
import ReactDOM from "react-dom";
import Dodawanie from "./Dodawanie";




class Game extends React.Component{
    constructor(){
        super();
        this.state = {
            odejmowanie : false,
            dodawanie : false,
            mnożenie : false,
            dzielenie : false
        }
    }
    render() {
        return(
            <>
                {this.state.odejmowanie === false && this.state.dodawanie === false && this.state.mnożenie === false && this.state.dzielenie === false ?
                <div>
                    <button onClick={() => {this.setState({odejmowanie : true})}}>doejmowanie</button>
                    <button onClick={() => {this.setState({dodawanie : true})}}>dodawanie</button>
                    <button onClick={() => {this.setState({mnożenie : true})}}>mnożenie</button>
                    <button onClick={() => {this.setState({dzielenie : true})}}>dzielenie</button>
                </div> : null}
                {this.state.dodawanie === true ? <Dodawanie/> : null}

            </>
        )
    }
}


class App extends React.Component{
    render() {
        return(
            <>
                <Game elo={'no elo'}/>
            </>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));