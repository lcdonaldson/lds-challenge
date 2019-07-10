//  since this is not a real react project the styles wont really work here
//  but im trying to put basically the same code that exists in the code pen.
//  another quick note. the styles work in the codepen as className="exampleClass"
//  but in react native you have to use something like style={styles.exampleClass}
//  I can only assume its the same or close. But since I solved it in the codepen
//  I thought I would just leave it this way for this file.

import { styles } from "./styles";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 }
        this.inc = this.inc.bind(this);
    }

    inc = () => {
        this.setState({
            value: this.state.value + 1
        });
    };

    dec = () => {
        this.setState({
            value: this.state.value - 1
        });
    };

    reset = () => {
        this.setState({
            value: 0
        })
    }

    render() {
        return (
            <div className="container containerSkin" >
                <button className="btnLayout btnSkin dec" onClick={this.dec} > - </button> 
                <div className="counterWrapper" >
                    <p className="counterTextLayout" > {this.state.value} </p> 
                </div> 
                <button className="btnLayout btnSkin inc" onClick={this.inc} > + </button> 
                <button className="btnLayout btnSkin reset" onClick={this.reset} > Reset </button> 
            </div>
        );
    }
}

ReactDOM.render( <Counter/> , document.getElementById("app"));