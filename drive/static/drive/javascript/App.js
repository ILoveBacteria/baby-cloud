import React from 'react';
import ReactDOM from 'react-dom';

import {Directory} from "./Directory";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'directory': null}
    }

    async getDirectories() {
        const url = 'http://localhost:8000/drive/api/directory?path=D:/';
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

    componentDidMount() {
        this.getDirectories()
            .then(resolve => this.setState({'directory': resolve.directory}))
            .catch(reject => console.log(reject));
    }

    render() {
        if (this.state.directory === null) {
            return <p>Wait for fetch data...</p>;
        }

        let directoriesComponent = []
        for (const directory of this.state.directory) {
            directoriesComponent.push(<Directory isFile={directory.is_file} name={directory.name} />);
        }
        return (
            <div className='directory-grid'>
                {directoriesComponent}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));