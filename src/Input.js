import React from 'react';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            num: 0,
            isDigit: true,
            isSymbol: true,
            isCapital: true,
            isDone: false,
            pwdGen: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.generatePassword = this.generatePassword.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let generatedPwd;
        console.log('In handle submit function');
        if (isNaN(this.state.num)) {
            alert('Invalid entry for character count!');
            this.state.isDone = false;
        } else {
            if (this.state.num <= 0) {
                alert('Invalid Character Count!');
                this.state.isDone = false;
            } else {
                this.setState({ isDone: true });
            }
        }
        if (this.state.isDone == true)
            generatedPwd = this.generatePassword();
        console.log('Gener' + generatedPwd);
        return generatedPwd;
        //event.preventDefault();     
    }

    generatePassword() {
        console.log('New Password');
        console.log('characters', this.state.num);
        console.log('capital', this.state.isCapital);
        console.log('digit', this.state.isDigit);
        console.log('symbol', this.state.isSymbol);
        let newPassword = '';
        const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
        const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const digits = '1234567890';
        const symbols = '!@#$%^&*()-_=+,.?/~';
        let inclusive = smallLetters;
        if (this.state.isCapital) {
            inclusive += capitalLetters;
        }

        if (this.state.isDigit) {
            inclusive += digits;
        }
        if (this.state.isSymbol) {
            inclusive += symbols;
        }

        let i = 0
        while (i < this.state.num) {
            newPassword += inclusive[Math.floor(Math.random() * inclusive.length)];
            i++;
        }

        console.log(newPassword);
        this.se



    }

    copyToClipboard(str) {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }



    render() {
        let newP = '';
        return ( <
            div className = "main" >
            <
            h1 className = "heading" > Password Generator < /h1>  <
            p className = "intro" > A password generating application to help you create randomised strong passwords.Select your requirements and enter the character count below to generate a new password. < /p> <
            form onSubmit = { this.handleSubmit }
            method = "post"
            className = "form" >
            <
            label >
            Character Count < br / >
            <
            input type = "text"
            name = "num"
            value = { this.state.num }
            onChange = { this.handleChange }
            placeholder = "Character Code" / >
            <
            /label>

            <
            br / >

            <
            label className = "container" >
            <
            input type = "checkbox"
            name = "isDigit"
            checked = { this.state.isDigit }
            onChange = { this.handleChange }
            className = "digits-checkbox" / >

            <
            span className = "checkmark" > Digits < /span> <
            /label>

            <
            br / >

            <
            label className = "container" >
            <
            input type = "checkbox"
            name = "isSymbol"
            checked = { this.state.isSymbol }
            onChange = { this.handleChange }
            />

            <
            span className = "checkmark" > Symbols < /span> <
            /label>

            <
            br / >

            <
            label className = "container" >
            <
            input type = "checkbox"
            name = "isCapital"
            checked = { this.state.isCapital }
            onChange = { this.handleChange }
            />

            <
            span className = "checkmark" > Upper Case < /span> <
            /label> 

            <
            br / >

            <
            input type = "submit"
            value = "Submit"
            className = "submit"
            onClick = { newP = this.handleSubmit }
            /> 

            <
            /form> <
            h1 className = "generatingPassword" > Generated Password < /h1> <br/ >

            <
            h1 className = "NewPassword"
            id = "aftersubmit"
            style = {
                { "visibility": "hidden" } } > { newP } < /h1> <
            button id = "aftersubmit1"
            style = {
                { "visibility": "hidden" } }
            onClick = { this.copyToClipboard(newP) } > Copy < /button>

            <
            div className = "footer" > Image Designed by Freepik < /div> <
            /div>
        )
    }
}

export default App;