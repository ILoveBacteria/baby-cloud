import React from 'react';

export class Directory extends React.Component {
    render() {
        let imageSrc;
        if (this.props.isFile === false) {
            imageSrc = '/static/drive/image/folder.png';
        }

        return (
            <div className="directory-card">
                <img src={imageSrc} className="directory-img" alt="Directory icon" />
                <div className="directory-name">{this.props.name}</div>
            </div>
        );
    }
}