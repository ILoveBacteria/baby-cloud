import React from 'react';
import {Directory} from "./Directory";


export function DirectoryGrid(props) {
    return (
        <div className="directory-grid">
            {generateDirectories(props)}
        </div>
    )
}

function generateDirectories(props) {
    let directoryComponents = [];
    for (const directory of props.directories) {
        let isSelected = props.selectedFile === directory;
        let component = <Directory directory={directory} changePath={props.changePath}
                                   selectFile={props.selectFile} isSelected={isSelected}/>
        directoryComponents.push(component);
    }
    return directoryComponents;
}