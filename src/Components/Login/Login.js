import React from "react";
import p from "../Music/Music.module.css"
import {Field, reduxForm} from "redux-form";
import {LoginThunk} from "../../redux/LoginReducer";
import {Element, Input} from "../formControl/FormControl";
import {maxLengthCreator, requiredField} from "../../Utilities/validate";
import {login} from "../../redux/AuthReducer";
import {connect} from "react-redux";
import style from "../formControl/formControl.module.css"
import {Redirect} from "react-router-dom";

let maxLength20 = maxLengthCreator(20);


export const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name="email" component={Element} validate={[requiredField, maxLength20] } placeholder="Login"  />
                </div>
                <div>
                    <Field type = "password" name="password" component={Element} validate={[requiredField, maxLength20]} placeholder="Password"/>
                </div>

                <div>
                    <Field type = "checkbox" name="rememberMe" component= "input" />Remember me
                </div>

                {props.captchaUrl && <div>
                                        <img src = {props.captchaUrl}/>
                                        <Field name="captcha" component="input" validate={[requiredField]} placeholder="Symbols from image"  />
                                     </div>
                }

                {props.error && <div className = {style.formSummaryError} >
                    {props.error}
                </div> }

                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </div>
        </form>
    )
};


const LoginReduxForm = reduxForm({form: "Login"})(LoginForm);

const Login = (props) => {
    const onSubmit =(formData) => {
        return (props.login(formData.email, formData.password, formData.rememberMe,formData.captcha)
        )
    };
    if (props.isAuth) {return <Redirect to= "/profile"/>}
        return (
            <div className={p.content}>
            <img src="/shapka.jpg" width="1000" heigth="40"/>
            <h1>LOGIN</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
            </div>
            )

};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      login: (email,password,rememberMe,captcha) => {
          dispatch(login(email,password,rememberMe,captcha))
      }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);