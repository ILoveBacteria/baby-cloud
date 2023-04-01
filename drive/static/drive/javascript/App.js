import React from 'react';
import ReactDOM from 'react-dom';

import {Directory} from "./Directory";
import {Toolbar} from './Toolbar';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {directory: null, currentPath: null, exploreStack: [], selectedFile: null};
        this.changePath = this.changePath.bind(this);
        this.backward = this.backward.bind(this);
        this.selectFile = this.selectFile.bind(this);
    }

    async getDirectories(path) {
        const url = `http://localhost:8000/drive/api/directory?path=${path}`;
        const init = {
            headers: new Headers({
                'Accept': 'application/json',
                'Origin': 'http://localhost:8000',
            })
        }
        let response = await fetch(url, init);
        if (response.ok) {
            return await response.json();
        }
        throw new Error('The response code is not ok');
    }

    changePath(newPath) {
        this.state.exploreStack.push(this.state.currentPath);
        this.getDirectories(newPath)
            .then(resolve => this.setState({
                directory: resolve.directory,
                currentPath: newPath,
                selectedFile: null
            }))
            .catch(reject => console.log(reject));
    }

    backward() {
        let previousPath = this.state.exploreStack.pop();
        this.getDirectories(previousPath)
            .then(resolve => this.setState({
                directory: resolve.directory,
                currentPath: previousPath,
                selectedFile: null
            }))
            .catch(reject => console.log(reject));
    }

    selectFile(directory) {
        this.setState({selectedFile: directory});
    }

    componentDidMount() {
        this.getDirectories('D:/')
            .then(resolve => this.setState({directory: resolve.directory, currentPath: 'D:/'}))
            .catch(reject => console.log(reject));
    }

    render() {
        if (this.state.directory === null) {
            return <p>Wait for fetch data...</p>;
        }

        let directoriesComponent = []
        for (const directory of this.state.directory) {
            directoriesComponent.push(<Directory directory={directory} changePath={this.changePath}
                                                 selectFile={this.selectFile}/>);
        }
        return (
            <div>
                <header>
                    <Toolbar backward={this.backward} backwardEnable={this.state.exploreStack.length > 0}
                             selectedFile={this.state.selectedFile}/>
                </header>
                <main className='directory-grid'>
                    {directoriesComponent}
                </main>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));