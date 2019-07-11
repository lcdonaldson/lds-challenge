'use strict';

const e = React.createElement;

const dialPadStyle = {
    width: 24,
    marginLeft: 5
}

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={dialPadStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
            </div>
        );
    }
}
const domContainer = document.querySelector('#react_search_container');
ReactDOM.render(e(SearchContainer), domContainer);