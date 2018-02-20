import React from 'react';
import PropTypes from 'prop-types';
import ListSubheader from 'material-ui/List/ListSubheader'
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import PersonIcon from 'material-ui-icons/Person';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 480
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

function PrefNames(props) {
  const { classes } = props;

  let item = 0;
  function addPerson(Id, oldName, newName, dateChanged) {
    item += 1;
    return { item, Id, oldName, newName, dateChanged };
  }

  const people = [
    addPerson('123', 'Michael', 'Mike', 'Jan 1, 2018'),
    addPerson('456', 'Anderson', 'Andy', 'Jan 2, 2018'),
    addPerson('789', 'James', 'Jim', 'Jan 2, 2018'),
    addPerson('012', 'Pamela', 'Pam', 'Jan 4, 2018'),
  ]

  var dates = [];

  function addDateHeader(newDate) {
    if (!dates.includes(newDate)) {
      dates.push(newDate);
    }
  }

  for (var i = 0; i < people.length; i++) {
    addDateHeader(people[i].dateChanged);
  }

  function PersonListItems(props) {
    return (
      people.map(person => (
        <ListItem key={person}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={person.newName}
            secondary={"Previously " + person.oldName} />
          <ListItemSecondaryAction>
            <IconButton aria-label="View personal info">
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))
    )
  }

  return (
    <List className={classes.root} subheader={<li />}>
      {dates.map(sectionId => (
        <li key={sectionId} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{sectionId}</ListSubheader>
            <PersonListItems />
          </ul>
        </li>
      ))}
    </List>
  );
}

PrefNames.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrefNames);