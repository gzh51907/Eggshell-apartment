import React,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox} from 'antd';
import '../css/login.scss'
import axios from 'axios';
class Login extends Component{
    state = {
        username: '',
        password:''
    }
    goto(path){
        let {history} = this.props;
        
        history.push(path);
    }
    userChange = (e) => {
        this.setState({
            username: e.target.value,
        })
      }
     passChange = (e) => {
        this.setState({
            password: e.target.value,
        })
      }
    
    async userCheck(){
        let {username,password} = this.state;
            let {data} = await axios.get('http://127.0.0.1:1906/user/login',{
                 params:{username,password}
            })
            if(data.code==1 && data.msg=='success'){
                window.history.back();  
            }else{
                alert('用户名或密码错误')
            }
    }
    
    render(){
        return(
            <div className="login">
                <div className="header">
                    <img src={require("../assets/login/public-20180305-FiHjPnBXLjvIL4WE8oN9coIjEj-h.png")}/>
                    <div className="tohome" onClick={this.goto.bind(this,'/home')}>
                        <Icon type="home" className="icon"/>
                    </div>
                </div>
                <div className="form">
                    <Form className="login-form">
                        <Form.Item>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入用户名" onChange={this.userChange.bind(this)}/>
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password" onChange={this.passChange.bind(this)}
                             placeholder="请输入密码"/>
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" 
                        onClick={this.userCheck.bind(this)}>
                            登录
                        </Button>
                    </Form>
                </div>
                <div className="tiao">
                    <span onClick={this.goto.bind(this,'/reg')}>未注册</span>
                </div>
                <div className="login-clause">
                    登录即代表你同意
                    <a href="/zhuanti/user-clause">《用户使用条款》</a>
                    <a target="_blank" href="/zhuanti/user-privacy">《隐私保护政策》</a>
                </div>
                {/* <button onClick={this.duanxinyz.bind(this)}>获取验证码</button> */}
            </div>
        )
    }
}

export default Login;