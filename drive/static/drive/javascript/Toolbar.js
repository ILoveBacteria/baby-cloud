import React from 'react';

export class Toolbar extends React.Component {
    render() {
        return (
            <div>
                <img src="/static/drive/image/arrow-left.svg" className="arrow-button toolbar-button" />
                <img src="/static/drive/image/arrow-right.svg" className="arrow-button toolbar-button" />
            </div>
        );
    }
}