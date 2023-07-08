import React from 'react';


export function Toolbar(props) {
    let arrowButtonClass = props.backwardEnable ? 'arrow-button toolbar-button' :
        'arrow-button toolbar-button toolbar-button-disable';
    let downloadButtonClass = 'toolbar-button toolbar-button-disable';
    let selectedFilePath = '';
    let deselectButton = false;
    if (props.selectedFile) {
        downloadButtonClass = 'toolbar-button';
        selectedFilePath = `./api/file?path=${props.selectedFile.path}`;
        deselectButton = true;
    }

    return (
        <div>
            <img src="/static/drive/image/arrow-left.svg" className={arrowButtonClass}
                 onClick={(e) => onClickBackward(e, props.backwardEnable, props.backward)}/>
            <img src="/static/drive/image/arrow-right.svg" className="arrow-button toolbar-button"/>
            <a href={selectedFilePath} target="_blank" download>
                <img src="/static/drive/image/cloud-arrow-down.svg" className={downloadButtonClass}/>
            </a>
            {deselectButton && <span className="toolbar-button" onClick={props.deselectFile}>Deselect</span>}
            <span className="toolbar-button" data-bs-toggle="modal" data-bs-target="#uploadModal">Upload file</span>
        </div>
    );
}

function onClickBackward(e, enable, backward) {
    if (enable) {
        backward();
    }
}