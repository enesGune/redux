import './App.css';
import React, { Component } from 'react';
import {incrementAction,decreaseAction ,incrementTodoAction,decreaseTodoAction,editTodoAction} from "../src/actions/index"
import { connect } from 'react-redux';
class App extends Component {
 state={
   text:"",
   editText:"",
   edit:false
 }

 editText=(id)=>{
    this.setState({
      edit:!this.state.edit
    })
    if (this.state.editText !== ""){
      this.props.dispatch(editTodoAction(id,this.state.editText))
      console.log(this.state.editText);
    }
 }
 cancelEditText=()=>{
  this.setState({
    edit:!this.state.edit
  })
}
 deleteTodo=(id)=>{
  this.props.dispatch(decreaseTodoAction(id))
 }

 hanleSubmit=()=> {
    if (this.state.text !== "") {
    this.props.dispatch(incrementTodoAction(this.state.text));
    console.log(this.state.text);
  } else {
    
  }

 }
  increaseFunc = () => {
    this.props.dispatch(incrementAction(1))
 }
 decreaseFunc = () => {
    this.props.dispatch(decreaseAction(1))
 }
  render() {
    let { value,todo } = this.props;
    return (
      <div className='page-root'>
        <div className='point-root'>
                <div className="point-container">
                    <div className="point-block">
                        <p>{value}</p>

                    </div>
                    <div className="point-button">
                        <button className="increment" onClick={this.increaseFunc}>+</button>
                        <button className="decrease" onClick={this.decreaseFunc}>-</button>
                    </div>
                </div>
                <div className="todo-container">
                    <input type="text" value={this.state.text} name="todo" id="" onChange={(event)=> this.setState({text:event.target.value})} placeholder='Görev Giriniz' />
                    <button className='btn-add' onClick={()=>{this.hanleSubmit()}} >Add</button>
                    <div className="todo-list-block">
                        <ul>
                        {
                          todo && 
                          todo.map((obj,index) => {
                            return(
                              <li key={index}> <input type="checkbox" name="" id="" /> <label htmlFor="">{obj.misson}</label> <button onClick={()=>{this.cancelEditText()}}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="32" height="32" fill="white"/>
                              <path d="M14 18L17 17L23.5858 10.4142C23.851 10.149 24 9.78929 24 9.41421C24 8.63317 23.3668 8 22.5858 8C22.2107 8 21.851 8.149 21.5858 8.41421L15 15L14 18Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M16 9H11C9.89543 9 9 9.89543 9 11V21C9 22.1046 9.89543 23 11 23H21C22.1046 23 23 22.1046 23 21V16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              </button> <button onClick={()=>{this.deleteTodo(obj.id)}} ><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.7479 20.1811L12.095 13H19.905L19.2521 20.1811C19.1585 21.2112 18.2948 22 17.2604 22H14.7396C13.7052 22 12.8415 21.2112 12.7479 20.1811Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <mask id="path-2-inside-1_1859_4285" fill="white">
                              <path d="M22 11L10 11L10 10C10 9.44771 10.4477 9 11 9L21 9C21.5523 9 22 9.44772 22 10L22 11Z"/>
                              </mask>
                              <path d="M22 11L22 13C23.1046 13 24 12.1046 24 11L22 11ZM10 11L8 11C8 11.5304 8.21071 12.0391 8.58579 12.4142C8.96086 12.7893 9.46957 13 10 13L10 11ZM22 9L10 9L10 13L22 13L22 9ZM12 11L12 10L8 10L8 11L12 11ZM11 11L21 11L21 7L11 7L11 11ZM20 10L20 11L24 11L24 10L20 10ZM21 11C20.4477 11 20 10.5523 20 10L24 10C24 8.34315 22.6569 7 21 7L21 11ZM12 10C12 10.5523 11.5523 11 11 11L11 7C9.34315 7 8 8.34314 8 10L12 10Z" fill="black" mask="url(#path-2-inside-1_1859_4285)"/>
                              <mask id="path-4-inside-2_1859_4285" fill="white">
                              <path d="M18 10L14 10L14 9C14 8.44772 14.4477 8 15 8L17 8C17.5523 8 18 8.44772 18 9L18 10Z"/>
                              </mask>
                              <path d="M18 10L18 12C19.1046 12 20 11.1046 20 10L18 10ZM14 10L12 10C12 10.5304 12.2107 11.0391 12.5858 11.4142C12.9609 11.7893 13.4696 12 14 12L14 10ZM18 8L14 8L14 12L18 12L18 8ZM16 10L16 9L12 9L12 10L16 10ZM15 10L17 10L17 6L15 6L15 10ZM16 9L16 10L20 10L20 9L16 9ZM17 10C16.4477 10 16 9.55228 16 9L20 9C20 7.34315 18.6569 6 17 6L17 10ZM16 9C16 9.55228 15.5523 10 15 10L15 6C13.3431 6 12 7.34315 12 9L16 9Z" fill="black" mask="url(#path-4-inside-2_1859_4285)"/>
                              </svg>
                              </button> 
                              
                                <div className={`editBlock ${this.state.edit ? "active" : "" }`}>
                                <input type="text" className='editText' placeholder='Görev Adı Düzenle' onChange={(event)=> this.setState({editText:event.target.value})} />
                                <button onClick={()=>{this.editText(obj.id)}}>Kaydet</button>
                                <button onClick={()=>{this.cancelEditText()}}>Vazgeç</button>
                                </div>
                              </li>

                            )

                          })
                        }
          
                        </ul>
                    </div>
                </div>

            </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.coanterReducer.value,
  todo: state.coanterReducer.todo
});




export default connect(mapStateToProps)  (App);
