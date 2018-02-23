import React from 'react';
import PropTypes from 'prop-types';
import ListSubheader from 'material-ui/List/ListSubheader'
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
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

  // Mock JSON
  var mockJson = {
    "dates": [
      {
        "string": "Jan 04, 2018",
        "people": [
          {
            "pidm": "00000",
            "prefFirstName": "Mike",
            "firstName": "Michael",
            "lastName": "Scott"
          },
          {
            "pidm": "11111",
            "prefFirstName": "Andy",
            "firstName": "Anderson",
            "lastName": "Bernard"
          }
        ]
      },
      {
        "string": "Jan 02, 2018",
        "people": [
          {
            "pidm": "22222",
            "prefFirstName": "Pam",
            "firstName": "Pamela",
            "lastName": "Beesly"
          }
        ]
      },
      {
        "string": "Jan 01, 2018",
        "people": [
          {
            "pidm": "33333",
            "prefFirstName": "Jim",
            "firstName": "James",
            "lastName": "Halpert"
          }
        ]
      }
    ]
  }

  function renderPerson(person) {
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={person.prefFirstName}
          secondary={person.firstName + " " + person.lastName}
        />
      </ListItem>
    )
  }

  return (
    <List className={classes.root} subheader={<li />}>
      <li className={classes.listSection}>
        {mockJson.dates.map((date, index) => (
          <ul className={classes.ul}>
            <ListSubheader>{date.string}</ListSubheader>
            {date.people.map((person, index) => renderPerson(person))}
          </ul>
        ))}
      </li>
    </List>
  );
}

PrefNames.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrefNames);
