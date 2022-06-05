import React, { Component } from "react";


class HomePageComponent extends Component {




    render() {

        return (
            <div className='point-root'>
                <div className="point-container">
                    <div className="point-block">
                        <p>0</p>

                    </div>
                    <div className="point-button">
                        <span className="incremant"></span>
                        <span className="desc"></span>
                    </div>
                </div>
                <div className="todo-container">
                    <input type="text" name="todo" id="" placeholder='Görev Giriniz' />
                    <div className="todo-list-block">
                        <ul>
                            <li>Test Görev 1</li>
                            <li>Test Görev 1</li>
                            <li>Test Görev 1</li>
                            <li>Test Görev 1</li>
                            <li>Test Görev 1</li>
                        </ul>
                    </div>
                </div>

            </div>

        );
    }
}

export default HomePageComponent;
