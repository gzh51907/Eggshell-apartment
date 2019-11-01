import React,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox} from 'antd';
import '../css/login.scss'
import axios from 'axios';
class Reg extends Component{
    state = {
        username: '',
        password:'',
        confirmPassword:'',
        userCheckBox:true,
        passCheckBox:true,
        confirmCheckBox:true
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
      usertOnBlur = ()=>{
        this.setState({
          userCheckBox:false
        })
      }
      passOnBlur = ()=>{
        this.setState({
          passCheckBox:false
        })
      }
      confirmChange= (e) => {
        this.setState({
            confirmPassword: e.target.value,
        })
      }
      confirmOnBlur = ()=>{
        this.setState({
            confirmCheckBox:false
        })
      }
     async regAdd(){
         let {username,password,confirmPassword} = this.state;
        let {data} = await axios.get('http://127.0.0.1:1906/user/check',{
            params:{username} 
        });
        // if(){

        // }
        if(username && password && confirmPassword && password==confirmPassword){
            let data = await axios.post('http://127.0.0.1:1906/user/reg',{
                 username,
                 password
            })
            this.goto('/login');
        }else if(password!=confirmPassword){
            alert("密码不一致")
        }else{
            alert("用户名或密码不能为空");
        }

        
        
      }
    render(){
        
        return(
            <div className="login">
                <div className="header">
                    <img src={require("../assets/login/public-20190604-FqadAEqKBd1Hpv6e9Sput0lV8Ppg.jpg")}/>
                    <div className="tohome" onClick={this.goto.bind(this,'/home')}>
                        <Icon type="home" className="icon"/>
                    </div>
                </div>
                <div className="form">
                    <Form className="login-form">
                        {
                           this.state.userCheckBox || this.state.username!='' ?
                           <Form.Item hasFeedback validateStatus="success" >
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={this.userChange.bind(this)} onBlur={this.usertOnBlur }
                                placeholder="请输入用户名"/>
                            </Form.Item>
                            : 
                            <Form.Item hasFeedback validateStatus="error" help="用户名不能为空">
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={this.userChange.bind(this)} onBlur={this.usertOnBlur }
                                placeholder="请输入用户名"/>
                            </Form.Item>
                        }
                        {
                           this.state.passCheckBox || this.state.password!='' ?
                           <Form.Item hasFeedback validateStatus="success" >
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={this.passChange.bind(this)} onBlur={this.passOnBlur }
                                placeholder="请输入密码" type="password"/>
                            </Form.Item>
                            : 
                            <Form.Item hasFeedback validateStatus="error" help="密码不能为空">
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={this.passChange.bind(this)} onBlur={this.passOnBlur }
                                placeholder="请输入密码"/>
                            </Form.Item>
                        }
                        {
                            this.state.confirmCheckBox ||this.state.confirmPassword === this.state.password ?
                            <Form.Item hasFeedback validateStatus="success">
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password" onChange={this.confirmChange.bind(this)}
                                placeholder="请确认密码" onBlur={this.confirmOnBlur }/>
                            </Form.Item>
                            :
                            <Form.Item hasFeedback validateStatus="error" help="密码不一致">
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password" onChange={this.confirmChange.bind(this)}
                                placeholder="请确认密码" onBlur={this.confirmOnBlur }/>
                            </Form.Item>
                        }
                        
                        <Button type="primary" htmlType="submit" className="login-form-button" 
                        onClick={this.regAdd.bind(this)}>
                            注册
                        </Button>
                    </Form>
                    {/* <Form>
                        <Form.Item  hasFeedback validateStatus="">
                            <Input placeholder="I'm the content"  />
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            validateStatus="error"
                            help="Should be combination of numbers & alphabets">
                            <Input placeholder="unavailable choice" id="error2" />
                        </Form.Item>
                    </Form> */}
                </div>
                <div className="tiao">
                    已有账号，去
                    <span onClick={this.goto.bind(this,'/login')}>登录</span>
                </div>
                <div className="login-clause">
                    注册即代表你同意
                    <a href="/zhuanti/user-clause">《用户使用条款》</a>
                    <a target="_blank" href="/zhuanti/user-privacy">《隐私保护政策》</a>
                </div>
            </div>
        )
    }
}

export default Reg;