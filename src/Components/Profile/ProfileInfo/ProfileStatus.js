import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    onChangeStatus = (e) => {
        this.setState(
            {status: e.target.value}
        );

    };

    activeEdit = () => {
        this.setState(
            {editMode: true}
        )
    };

    disActiveEdit = () => {
        this.setState(
            {editMode: false}
        );
        this.props.updatestatus(this.state.status);

    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState(
                {status: this.props.status}
            )
        }
    }

    render() {

        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onChange = {this.onChangeStatus} onBlur={this.disActiveEdit} type="text" value={this.state.status} autoFocus/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activeEdit}> {this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus