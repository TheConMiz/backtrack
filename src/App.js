import React, {Fragment, useState} from 'react';
import HomeView from './HomeView';
import PBIDetails from './PBIDetails';

import TextField from '@material-ui/core/TextField';
import NewProject from './NewProject';
import AddTask from './AddTask';
import ProjectBoard from './ProjectBoard';

function App() {
    return (
        <Fragment>
           
            <ProjectBoard/>
        </Fragment>
    );
}
export default App;