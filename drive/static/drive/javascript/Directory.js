import React from 'react';

export class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(_) {
        if (this.props.directory.is_directory) {
            this.props.changePath(this.props.directory.path);
        } else {
            this.props.selectFile(this.props.directory)
        }
    }

    render() {
        let imageSrc = `/static/drive/image/${this.props.directory.type}.png`;
        let directoryClass = this.props.selected ? 'directory-card directory-selected' : 'directory-card';
        return (
            <div className={directoryClass} onClick={this.onClickHandler}>
                <img src={imageSrc} className="directory-img" alt="Directory icon" />
                <div className="directory-name">{this.props.directory.name}</div>
            </div>
        );
    }
}