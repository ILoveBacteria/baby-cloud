import React from 'react';


export function Directory(props) {
    let imageSrc = `/static/drive/image/${props.directory.type}.png`;
    let directoryClass = props.isSelected ? 'directory-card directory-selected' : 'directory-card';
    return (
        <div className={directoryClass} onClick={(e) => onClickHandler(e, props)}>
            <img src={imageSrc} className="directory-img" alt="Directory icon"/>
            <div className="directory-name">{props.directory.name}</div>
        </div>
    );
}

function onClickHandler(e, props) {
    if (props.directory.is_directory) {
        props.changePath(props.directory.path);
    } else {
        props.selectFile(props.directory)
    }
}