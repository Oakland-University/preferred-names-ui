import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 5,
  },
});

let cellId = 0;
function createData(studentId, prefNameOld, prefNameNew, date) {
  cellId += 1;
  return { cellId, studentId, prefNameOld, prefNameNew, date };
}

const data = [
  createData('123', 'Michael', 'Mike', '01-01-2018'),
  createData('456', 'Anderson', 'Andy', '01-01-2018'),
  createData('789', 'James', 'Jim', '01-01-2018'),
  createData('012', 'Pamela', 'Pam', '01-01-2018'),
]

function NamesTable(props) {
  const { classes } = props;

  return (
    <Table>
      <caption>Modified Preferred Names</caption>
      <TableHead>
        <TableRow>
          <TableCell style={{color: 'black'}}>Student ID</TableCell>
          <TableCell style={{color: 'black'}}>Old Preferred Name</TableCell>
          <TableCell style={{color: 'black'}}>New Preferred Name</TableCell>
          <TableCell style={{color: 'black'}}>Date Modified</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(n => {
          return (
            <TableRow key={n.cellId}>
              <TableCell>{n.studentId}</TableCell>
              <TableCell>{n.prefNameOld}</TableCell>
              <TableCell><strong>{n.prefNameNew}</strong></TableCell>
              <TableCell>{n.date}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

NamesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};


class PrefNames extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <NamesTable />
      </div>
    );
  }
}

PrefNames.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(PrefNames));
