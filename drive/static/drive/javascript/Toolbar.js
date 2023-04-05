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
        let downloadButtonClass = 'toolbar-button toolbar-button-disable';
        let selectedFilePath = '';
        if (this.props.selectedFile) {
            downloadButtonClass = 'toolbar-button';
            selectedFilePath = `./api/file?path=${this.props.selectedFile.path}`;
        }

        return (
            <div>
                <img src="/static/drive/image/arrow-left.svg" className={arrowButtonClass}
                     onClick={this.backwardOnClick}/>
                <img src="/static/drive/image/arrow-right.svg" className="arrow-button toolbar-button"/>
                <a href={selectedFilePath} target="_blank" download>
                    <img src="/static/drive/image/cloud-arrow-down.svg" className={downloadButtonClass}/>
                </a>
            </div>
        );
    }
}