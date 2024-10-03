
import * as React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';

const initialGoals = [
  { id: 1, name: 'Complete React project', completed: false },
  { id: 2, name: 'Exercise for 30 minutes', completed: false },
  { id: 3, name: 'Read 10 pages of a book', completed: true },
  { id: 4, name: 'Meditate for 10 minutes', completed: false },
];

function DashboardGoals() {
  const [goals, setGoals] = React.useState(initialGoals);

  const handleToggle = (id) => () => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {goals.map((goal) => {
        const labelId = `checkbox-list-label-${goal.id}`;

        return (
          <ListItem
            key={goal.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(goal.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={goal.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={goal.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default DashboardGoals;
