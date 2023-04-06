import React from 'react';
import ReactDOM from 'react-dom';

import {Toolbar} from './Toolbar';
import {DirectoryGrid} from "./DirectoryGrid";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {directories: null, currentPath: null, exploreStack: [], selectedFile: null};
    }

    fetchDirectories = async (path) => {
        const url = `/drive/api/directory?path=${path}`;
        let response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
        throw new Error('The response code is not ok');
    }

    setAndFetchDirectories = (path) => {
        this.fetchDirectories(path)
            .then(resolve => this.setState({
                directories: resolve.directory,
                currentPath: path,
                selectedFile: null
            }))
            .catch(reject => console.log(reject));
    }

    changePath = (newPath) => {
        this.state.exploreStack.push(this.state.currentPath);
        this.setAndFetchDirectories(newPath);
    }

    backward = () => {
        let previousPath = this.state.exploreStack.pop();
        this.setAndFetchDirectories(previousPath);
    }

    selectFile = (fileObject) => {
        this.setState({selectedFile: fileObject});
    }

    deselectFile = () => {
        this.setState({selectedFile: null});
    }

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
                    <DirectoryGrid directories={this.state.directories} selectedFile={this.state.selectedFile}
                                   changePath={this.changePath} selectFile={this.selectFile}/>
                </main>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));