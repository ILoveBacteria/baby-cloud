import React from 'react';

export class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.backwardOnClick = this.backwardOnClick.bind(this);
    }

    backwardOnClick() {
        if (this.props.backwardEnable) {
            this.props.backward();
        }
    }

    render() {
        let arrowButtonClass = this.props.backwardEnable ? 'arrow-button toolbar-button' :
            'arrow-button toolbar-button toolbar-button-disable';

        return (
            <div>
                <img src="/static/drive/image/arrow-left.svg" className={arrowButtonClass}
                     onClick={this.backwardOnClick}/>
                <img src="/static/drive/image/arrow-right.svg" className="arrow-button toolbar-button"/>
            </div>
        );
    }
}