import React from 'react';
import ReactDOM from 'react-dom';

import {Directory} from "./Directory";
import {Toolbar} from './Toolbar';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'directory': null, 'path': 'D:/'}
        this.changePath = this.changePath.bind(this);
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
        this.getDirectories(newPath)
            .then(resolve => this.setState({'directory': resolve.directory, 'path': newPath}))
            .catch(reject => console.log(reject));
    }

    componentDidMount() {
        this.getDirectories(this.state.path)
            .then(resolve => this.setState({'directory': resolve.directory}))
            .catch(reject => console.log(reject));
    }

    render() {
        if (this.state.directory === null) {
            return <p>Wait for fetch data...</p>;
        }

        let directoriesComponent = []
        for (const directory of this.state.directory) {
            directoriesComponent.push(<Directory directory={directory} changePath={this.changePath}/>);
        }
        return (
            <div>
                <header>
                    <Toolbar/>
                </header>
                <main className='directory-grid'>
                    {directoriesComponent}
                </main>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));