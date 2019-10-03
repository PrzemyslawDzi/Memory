import React, {Component} from "react";
import ReactDOM from "react-dom";




class Dodawanie extends React.Component{
    constructor(){
        super();
        this.state = {
            active : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            isTurned : false,
            matchCard : 0
        }
    }


    render() {
        return(
            <>
                {console.log(this.state.matchCard)}
                <section className={'memory-game'}>
                    <div data-match={1} className={this.state.active[0] === 0 ? 'memory-card' : 'memory-card turned'} onClick={(event) => {this.state.active[0] === 0 ?
                        this.setState({active : [1,...this.state.active.slice(1,20)]}):
                        this.setState({active : [0,...this.state.active.slice(1,20)]}) ;
                        !this.state.isTurned ?  this.setState({isTurned : true}):
                            setTimeout(() => {this.setState({active : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}); console.log(this)},1000) ;
                            this.state.matchCard === 0 ? setTimeout(() => {this.setState({matchCard : 1})},1000) : console.log('nic nie zrobiłem')
                    }}>



                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />

                    </div>
                    <div className={this.state.active[1] === 0 ? 'memory-card' : 'memory-card turned'} onClick={(event) => {this.state.matchCard === 1 ? event.nativeEvent.stopImmediatePropagation() : console.log('niematch') ;this.state.active[1] === 0 ?
                        this.setState({active : [this.state.active[0],1,...this.state.active.slice(2,20)]}):
                        this.setState({active : [this.state.active[0],0,...this.state.active.slice(2,20)]}) ; !this.state.isTurned ?
                        this.setState({isTurned : true}) : console.log('jedna już obrucona')  }} >



                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[2] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[2] === 0 ?  this.setState({active : [...this.state.active.slice(0,2),1,...this.state.active.slice(3,20)]}): this.setState({active : [...this.state.active.slice(0,2),0,...this.state.active.slice(3,20)]})}} >
                        <h1 className={'front'}>jakieś inne coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[3] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[3] === 0 ?  this.setState({active : [...this.state.active.slice(0,3),1,...this.state.active.slice(4,20)]}): this.setState({active : [...this.state.active.slice(0,3),0,...this.state.active.slice(4,20)]})}} >
                        <h1 className={'front'}>jakieś  inne coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[4] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[4] === 0 ?  this.setState({active : [...this.state.active.slice(0,4),1,...this.state.active.slice(5,20)]}): this.setState({active : [...this.state.active.slice(0,4),0,...this.state.active.slice(5,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[5] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[5] === 0 ?  this.setState({active : [...this.state.active.slice(0,5),1,...this.state.active.slice(6,20)]}): this.setState({active : [...this.state.active.slice(0,5),0,...this.state.active.slice(6,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[6] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[6] === 0 ?  this.setState({active : [...this.state.active.slice(0,6),1,...this.state.active.slice(7,20)]}): this.setState({active : [...this.state.active.slice(0,6),0,...this.state.active.slice(7,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[7] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[7] === 0 ?  this.setState({active : [...this.state.active.slice(0,7),1,...this.state.active.slice(8,20)]}): this.setState({active : [...this.state.active.slice(0,7),0,...this.state.active.slice(8,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[8] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[8] === 0 ?  this.setState({active : [...this.state.active.slice(0,8),1,...this.state.active.slice(9,20)]}): this.setState({active : [...this.state.active.slice(0,8),0,...this.state.active.slice(9,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[9] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[9] === 0 ?  this.setState({active : [...this.state.active.slice(0,9),1,...this.state.active.slice(10,20)]}): this.setState({active : [...this.state.active.slice(0,9),0,...this.state.active.slice(10,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[10] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[10] === 0 ?  this.setState({active : [...this.state.active.slice(0,10),1,...this.state.active.slice(11,20)]}): this.setState({active : [...this.state.active.slice(0,10),0,...this.state.active.slice(11,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[11] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[11] === 0 ?  this.setState({active : [...this.state.active.slice(0,11),1,...this.state.active.slice(12,20)]}): this.setState({active : [...this.state.active.slice(0,11),0,...this.state.active.slice(12,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[12] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[12] === 0 ?  this.setState({active : [...this.state.active.slice(0,12),1,...this.state.active.slice(13,20)]}): this.setState({active : [...this.state.active.slice(0,12),0,...this.state.active.slice(13,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[13] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[13] === 0 ?  this.setState({active : [...this.state.active.slice(0,13),1,...this.state.active.slice(14,20)]}): this.setState({active : [...this.state.active.slice(0,13),0,...this.state.active.slice(14,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[14] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[14] === 0 ?  this.setState({active : [...this.state.active.slice(0,14),1,...this.state.active.slice(15,20)]}): this.setState({active : [...this.state.active.slice(0,14),0,...this.state.active.slice(15,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[15] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[15] === 0 ?  this.setState({active : [...this.state.active.slice(0,15),1,...this.state.active.slice(16,20)]}): this.setState({active : [...this.state.active.slice(0,15),0,...this.state.active.slice(16,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[16] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[16] === 0 ?  this.setState({active : [...this.state.active.slice(0,16),1,...this.state.active.slice(17,20)]}): this.setState({active : [...this.state.active.slice(0,16),0,...this.state.active.slice(17,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[17] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[17] === 0 ?  this.setState({active : [...this.state.active.slice(0,17),1,...this.state.active.slice(18,20)]}): this.setState({active : [...this.state.active.slice(0,17),0,...this.state.active.slice(18,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[18] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[18] === 0 ?  this.setState({active : [...this.state.active.slice(0,18),1,...this.state.active.slice(19,20)]}): this.setState({active : [...this.state.active.slice(0,18),0,...this.state.active.slice(19,20)]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                    <div className={this.state.active[19] === 0 ? 'memory-card' : 'memory-card turned'} onClick={() => {this.state.active[19] === 0 ?  this.setState({active : [...this.state.active.slice(0,19),1]}): this.setState({active : [...this.state.active.slice(0,19),0]})}} >
                        <h1 className={'front'}>jakieś coś</h1>
                        <img className={'back'} src="../images/questionmark.png" alt="questionmark" />
                    </div>
                </section>
            </>
        )
    }
}



export default Dodawanie