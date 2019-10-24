import React, {Fragment, useState} from 'react';
import HomeView from './HomeView';
import PBIDetails from './PBIDetails';

import TextField from '@material-ui/core/TextField';
import NewProject from './NewProject';
import AddTask from './AddTask';

function App() {
    return (
        <Fragment>
            <HomeView/>
            <PBIDetails/>
            <NewProject/>
            <AddTask/>
        </Fragment>
    );
}
export default App;