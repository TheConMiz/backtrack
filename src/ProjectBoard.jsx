import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { GridList, Container } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';





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
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Fragment>
            <div>
            <h1>Scrum Board</h1>
            <Container>
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
            </Container>
            </div>
        </Fragment>
    );
}
export default ProjectBoard;