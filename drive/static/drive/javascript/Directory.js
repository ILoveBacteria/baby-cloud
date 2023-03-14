import React from 'react';

export class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(_) {
        this.props.changePath(this.props.path);
    }

    render() {
        let imageSrc;
        if (this.props.isFile === false) {
            imageSrc = '/static/drive/image/folder.png';
        }

        return (
            <div className="directory-card" onClick={this.onClickHandler}>
                <img src={imageSrc} className="directory-img" alt="Directory icon" />
                <div className="directory-name">{this.props.name}</div>
            </div>
        );
    }
}