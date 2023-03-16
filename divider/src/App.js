import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'; 

const articles = [
  {
    id: 1,
    title: 'The customer is very happy',
    content: 'It is important to take care of the patient, to be followed by the doctor, but it is a time of great pain and suffering.'
  },
  {
    id: 2,
    title: 'But in order that you may see whence all',
    content: 'But that you may see from whence all this error is born of those who accuse pleasure and praise pain.'
  },
  {
    id: 3,
    title: 'For no one wants pleasure itself',
    content: 'For no one despises or hates or runs away from pleasure because it is pleasure, but because great pains result to those who do not know how to follow pleasure with reason.'
  }
]; function App() {
  return (
<div 
style={{ display: 'flex',
flexDirection: 'column',
alignItems: 'center',
marginTop:'10rem' }}>
  <h1>List with Divider</h1>
<List>
      {articles.map(article => (
<React.Fragment key={article.id}>
  <ListItem button>
    <ListItemText primary={article.title} secondary={article.content} />
    </ListItem>
    <Divider />
    </React.Fragment>
      ))}</List>
</div>
  );
} export default App;