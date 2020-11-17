import React from 'react';
import './index.css'
import DATA from '../../data'
export  default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data: DATA,
            activeItem:null,
            mouseCoord:{
                x:0,
                y:0
            }
        }
    }

    updateItem(item){
        this.setState({activeItem:""},()=>{
            this.setState({activeItem:item})
        })
    }

    onMouseMove(e){
        let rect = this.menu.getBoundingClientRect();
        this.setState({mouseCoord:{x:e.pageX - rect.left,y:e.pageY -rect.top}})
    }

    getStatusClass(title){
        let {activeItem} = this.state
        if(activeItem !=null){
            if(activeItem.menuTitle === title){
                return 'active'
            }else {
                return 'inactive'
            }
        }
        return ''
    }

    renderDescription(activeItem){
        if(activeItem !=null && activeItem.menuDescription !==undefined){
            return (
                <ul>
                    {
                        activeItem.menuDescription.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            )
        }
        return  null
    }

    render() {
        const {data,activeItem,mouseCoord} = this.state;
        return (
                <div
                    ref={el=>this.menu = el}
                    onMouseMove={this.onMouseMove.bind(this)}
                    className={'menu '+ (this.props.state?'show':'hide') }
                >
                    <div className="menu-list">
                        <ul>
                            {
                                data.map(item=>(
                                    <li
                                        onMouseEnter={()=>this.updateItem(item)}
                                        onMouseLeave={()=>this.updateItem(null)}
                                        key={item.menuNumber}>
                                        <a
                                            className={this.getStatusClass(item.menuTitle)}
                                            href='#'>{item.menuTitle}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="menu-description">
                        {this.renderDescription(activeItem)}
                    </div>
                    {
                        activeItem!=null?(
                            <div className={"menu-number"}>
                                <div
                                    className="number"
                                    key={activeItem.menuNumber}
                                >
                                    {activeItem.menuNumber}
                                </div>
                            </div>

                        ):(
                            <div className={"menu-number inactive"}>
                                <div
                                    className="number"
                                >
                                    05
                                </div>
                            </div>
                        )
                    }
                    {
                        activeItem!=null?(
                            <img className={"cursor-image"} style={{left:mouseCoord.x,top:mouseCoord.y}} src={activeItem.image}/>
                        ):(null)
                    }

                </div>
        )
    }
}
