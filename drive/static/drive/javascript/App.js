import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';

import {Toolbar} from './Toolbar';
import {DirectoryGrid} from "./DirectoryGrid";
import {UploadModal} from "./UploadModal";


/**
 * Main component of the application.
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {directories: null, currentPath: null, exploreStack: [], selectedFile: null};
    }

    /**
     * Fetch directories from the server.
     * @param path - path to the directory
     * @returns {Promise<any>} - promise with json data
     */
    fetchDirectories = async (path) => {
        const url = `/drive/api/directory?path=${path}`;
        let response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
        throw new Error('The response code is not ok');
    }

    /**
     * Set directories and current path.
     * @param path - path to the directory
     */
    setAndFetchDirectories = (path) => {
        this.fetchDirectories(path)
            .then(resolve => this.setState({
                directories: resolve.directory,
                currentPath: path,
                selectedFile: null
            }))
            .catch(reject => console.log(reject));
    }

    /**
     * Change path and fetch directories.
     * @param newPath - new path to the directory
     */
    changePath = (newPath) => {
        this.state.exploreStack.push(this.state.currentPath);
        this.setAndFetchDirectories(newPath);
    }

    /**
     * Change path to the previous directory if the backward button clicked.
     */
    backward = () => {
        let previousPath = this.state.exploreStack.pop();
        this.setAndFetchDirectories(previousPath);
    }

    /**
     * Select file if clicked on a file.
     * @param fileObject - file object
     */
    selectFile = (fileObject) => {
        this.setState({selectedFile: fileObject});
    }

    /**
     * Deselect file if the deselect button clicked.
     */
    deselectFile = () => {
        this.setState({selectedFile: null});
    }

    /**
     * Fetch directories from the server when the component mounted.
     */
    componentDidMount() {
        this.setAndFetchDirectories('D:/');
    }

    render() {
        if (this.state.directories === null) {
            return <p>Wait for fetch data...</p>;
        }

        return (
            <div>
                <header>
                    <Toolbar backward={this.backward} backwardEnable={this.state.exploreStack.length > 0}
                             selectedFile={this.state.selectedFile} deselectFile={this.deselectFile}/>
                </header>
                <main>
                    <UploadModal path={this.state.currentPath} csrf_token={Cookies.get('csrftoken')}/>
                    <DirectoryGrid directories={this.state.directories} selectedFile={this.state.selectedFile}
                                   changePath={this.changePath} selectFile={this.selectFile}/>
                </main>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));