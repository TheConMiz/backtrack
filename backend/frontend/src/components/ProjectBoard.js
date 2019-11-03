import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Card } from '@material-ui/core';


const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


function ProjectBoard() {
    const classes = useStyles();

    return (
        <Fragment>
            <h1>Scrum Board</h1>

                <Grid direction="row" justify="center">
                    <Card>
                    <h2>To Do </h2>
                    </Card>
                    <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell><Card>PBI 1</Card></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Task #1</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>Task #2</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                    <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell><Card>PBI 2</Card></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Task #1</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>Task #2</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>

                </Grid>

                <Grid>
                    <Card>
                        <h2>In Progress</h2>
                    </Card>
                    <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell><Card>PBI 1</Card></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Task #1</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>Task #2</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>

                </Grid>
                <Grid>
                    <Card>
                        <h2>Under Review</h2>
                        <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell><Card>PBI 1</Card></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Task #1</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>Task #2</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>

                    </Card>
                </Grid>
                <Grid>
                    <Card>
                       <h2>Completed</h2>
                    </Card>
                    <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell><Card>PBI 1</Card></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Task #1</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>Task #2</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>

                </Grid>

        </Fragment>
    );
}
export default ProjectBoard;