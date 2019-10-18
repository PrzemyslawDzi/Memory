import React, {Component} from "react";
import ReactDOM from "react-dom";

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    clicked(doggo){
        this.props.click(doggo)
    }

    render(){
        return (
            <>
                {console.log(this.props.click)}
                <div className={"card" + (!this.props.close ? ' opened' : '') + (this.props.complete ? ' matched' : '')} onClick={() => this.clicked(this.props.doggo)}>
                    <div className="back">
                        <img src="../images/questionmark.png" alt="question"/>
                    </div>
                    <div className="front">
                        <img src={"../images/" + this.props.doggo + ".png"}/>
                    </div>
                </div>
            </>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doggos: ['jeden','dwa','trzy','cztery','pięć','sześć','siedem','osiem','dziewięć','dziesięć','jedenaście','dwanaście','trzynaście','czternaście','piętnaście'],
            dubleImages: [],
            randomCards: [],
            toPrint: [],
            compare: []
        };
        this.start()
    }

    handleClick(name,index){
        if(this.state.compare.length === 2){
            setTimeout(() => {
                this.check()
            },750)
        }else {
            let doggo = {
                name,
                index
            };
            let toPrint = this.state.toPrint;
            let doggos = this.state.compare;
            toPrint[index].close = false;
            doggos.push(doggo);
            this.setState({
                toPrint: toPrint
            });
            if(this.state.compare.length === 2){
                setTimeout(() => {
                    this.check()
                },750)
            }
        }
    }

    check(){
        let toPrint = this.state.toPrint;
        if((this.state.compare[0].name == this.state.compare[1].name) && (this.state.compare[0].index != this.state.compare[1].index)){
            toPrint[this.state.compare[0].index].complete = true;
            toPrint[this.state.compare[1].index].complete = true
        }else {
            toPrint[this.state.compare[0].index].close = true;
            toPrint[this.state.compare[1].index].close = true
        }
        this.setState({
            toPrint,
            compare: []
        })
    }

    start(){
        let toPrint = [];
        this.state.dubleImages = this.state.doggos.concat(this.state.doggos);
        this.state.randomCards = this.shuffle(this.state.dubleImages);
        this.state.randomCards.map((name) => {
            toPrint.push({
                name,
                close: true,
                complete: false,
                fail: false,
            })
        });
        this.state.toPrint = toPrint
    }

    shuffle(array){
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array
    }

    render(){

        return (
            <>
                <h1>Gra memory card wersja 0.3 miłej zabawy</h1>
                <div className="memory-game">

                    {
                        this.state.toPrint.map((doggo, index) => {
                            return <Card doggo={doggo.name} click={() => {this.handleClick(doggo.name,index)}} close={doggo.close} complete={doggo.complete}/>
                        })
                    }
                    <button onClick={() => window.location.reload()}>Zagrajmy jeszcze raz!</button>
                </div>
            </>
        )
    }
}


ReactDOM.render( <App/>, document.getElementById('app'));