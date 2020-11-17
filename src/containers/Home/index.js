import React from 'react';
import './index.css'
import Menu from "../../components/Menu";

export  default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuVisible:false
        }
    }

    render() {
        return (
            <div className='container'>
                <h1>Burger Menu</h1>
                <div className='home'>
                    <div
                        onClick={()=>this.setState({isMenuVisible:!this.state.isMenuVisible})}
                        className={'toggle-btn ' + (this.state.isMenuVisible?'close':"open")}
                    >
                        <div className={"box"}></div>
                        <div className={"cross"}>
                            <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <Menu state={this.state.isMenuVisible}/>
            </div>
        )
    }
}
