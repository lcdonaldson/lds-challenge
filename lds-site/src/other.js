'use strict';

const e = React.createElement;

const myDivStyle = {
    backgroundColor: 'Yellow',
    height: 20,
    width: 20,
}

class Other extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    render() {
        return (
            <div style={myDivStyle}>
                <p>this too</p>
            </div>
        );
    }
}
const domContainer = document.querySelector('#other');
ReactDOM.render(e(Other), domContainer);