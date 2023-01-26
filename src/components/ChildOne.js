import React from 'react'

class ChildOne extends React.Component {
    constructor(props) {
        super(props) 
            this.state ={
                Child: 'Testing1'
        }
        console.log('ChildOne Constructor')
    }

    componentDidMount =() => {
        console.log('ChildOne ComponentDidMount')
    }

    render() {
        console.log('ChildOne Render')
        return(
            <div>
                This is a childOne COmponent
            </div>
        )
    }

}

export default ChildOne