import React, { Component } from 'react';
import axios from 'axios';

// 高阶组件必须返回一个组件
export function withUser(InnerComponent) {
    let user = localStorage.getItem('user');
    try {
        user = JSON.parse(user);
        this.setState({ user })
    } catch (err) {

    }
    return function () {
        return <InnerComponent user={user} />
    }
}

export function withTheme(InnerComponent) {
    return class extends Component {
        constructor() {
            super()
            this.state = {
                theme: ''
            }
        }
        async componentDidMount() {
            let { data } = await axios.get('/theme');
            this.setState({
                theme: data.theme
            })
        }
        render() {
            let { theme } = this.state;
            return <InnerComponent theme={theme} />
        }
    }
}