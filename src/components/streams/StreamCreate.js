import React from 'react';
import {Field,reduxForm}  from 'redux-form';

class StreamCreate extends React.Component{
    renderInput({input,label}){
            return (
            <div className="field">
                <label>{label}</label>
                <input {...input}/>
            </div>
            )
    }
    onSubmit(formValue){
        console.log(formValue)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}  className="ui form">
                    <Field name="title" component={this.renderInput} label="Enter Title:"/>
                    <Field name="description" component={this.renderInput} label="Enter Description:"/>
                    <button className="ui button primary">Submiit</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({form: 'createStream'})(StreamCreate);