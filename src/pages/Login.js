import React, { Component } from 'react'
import './Login.css';
import logo from '../twitter.svg';

export default class Login extends Component {
  
  state = {
    username : '',
  };
  
  handleInputChange = e =>{
      this.setState({username: e.target.value});
  };
  handleSubmit = e =>{
      e.preventDefault();
      const {username} = this.state;
      if(!username.length){
        return;
      }else{
        localStorage.setItem('@storage:username',username);
      }

      this.props.history.push('/timeline');
  };
  render() {
    return (
        <div className="login-wrapper">
          <img src={logo} alt="twitter"></img>

          <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Nome de Usuario" value={this.state.username}
              onChange={this.handleInputChange}/>
              <button type="submit">Entrar</button>
          </form>

        </div>  
    );
  }


}