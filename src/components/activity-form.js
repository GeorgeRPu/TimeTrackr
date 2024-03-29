import React from 'react';
import PropTypes from 'prop-types';

import { addActivityDoc } from 'db/firebase';

class ActivityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            start: "",
            end: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleStartChange(event) {
        this.setState({start: event.target.value});
    }

    handleEndChange(event) {
        this.setState({end: event.target.value});
    }

    handleSubmit(event) {
        addActivityDoc(this.props.day, this.state.name, this.state.start, this.state.end);
        this.setState({
            name: "",
            start: "",
            end: ""
        });
        event.preventDefault();
    }

    render() {
        const { name, start, end } = this.state;
        return (
            <div className="mb-1">
                <h3 className="text-lg ml-3 font-semibold">Add new item</h3>
                <div className="rounded-lg border-2 border-gray-500 m-2 flex shadow">
                    <form onSubmit={this.handleSubmit}>
                        <div className="grid grid-cols-3">
                            <label className="font-bold ml-1 mt-1">Name:</label>
                            <input className="col-span-2 border-2 border-gray-500 rounded m-1 px-1" type="text" value={name} onChange={this.handleNameChange} />

                            <label className="font-bold ml-1">Start:</label>
                            <input className="col-span-2 border-2 border-gray-500 rounded mb-1 ml-1 mr-1 px-1" type="text" value={start} onChange={this.handleStartChange} />

                            <label className="font-bold ml-1">End:</label>
                            <input className="col-span-2 border-2 border-gray-500 rounded ml-1 mr-1 px-1" type="text" value={end} onChange={this.handleEndChange} />
                        </div>
                        <input className="rounded bg-blue-600 hover:bg-blue-700 text-white m-1 p-1 float-right shadow" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

ActivityForm.propTypes = {
    day: PropTypes.object
}

export default ActivityForm;
