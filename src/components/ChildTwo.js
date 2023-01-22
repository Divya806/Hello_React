import React from 'react';

class ChildTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Child2: "Testing2"
        }
        console.log('ChildTwo Constructor')
    }

    componentDidMount =() => {
        console.log('ChildTwo ComponentDidMount')
    }

    render() {
        console.log('ChildTwo Render')
        return( <div>This is a ChildTwoComponent</div>)      
    }
}

export default ChildTwo