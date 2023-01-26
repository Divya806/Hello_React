import React from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

class ParentClass extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                str: "hello World"
            }
            console.log('Parent Constructor')
    }

    componentDidMount =() => {
        console.log('Parent ComponentDidMount')
    }

    render() {
        console.log('Parent Render')
        return(
            <div>This is a parent class Component {this.state.str}
            <ChildOne name={this.props.Child} />
            <ChildTwo />
            </div>
        )
    }
}

export default ParentClass