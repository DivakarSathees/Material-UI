// import React from 'react';
// import { List, ListItem, ListItemText, Divider } from '@material-ui/core'; 

// const articles = [
//   {
//     id: 1,
//     title: 'The customer is very happy',
//     content: 'It is important to take care of the patient, to be followed by the doctor, but it is a time of great pain and suffering.'
//   },
//   {
//     id: 2,
//     title: 'But in order that you may see whence all',
//     content: 'But that you may see from whence all this error is born of those who accuse pleasure and praise pain.'
//   },
//   {
//     id: 3,
//     title: 'For no one wants pleasure itself',
//     content: 'For no one despises or hates or runs away from pleasure because it is pleasure, but because great pains result to those who do not know how to follow pleasure with reason.'
//   }
// ]; function App() {
//   return (
// <div 
// style={{ display: 'flex',
// flexDirection: 'column',
// alignItems: 'center',
// marginTop:'10rem' }}>
//   <h1>List with Divider</h1>
// <List>
//       {articles.map(article => (
// <React.Fragment key={article.id}>
//   <ListItem button>
//     <ListItemText primary={article.title} secondary={article.content} />
//     </ListItem>
//     <Divider />
//     </React.Fragment>
//       ))}</List>
// </div>
//   );
// } export default App;

// 

import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'; 

const items = [
  {
    id: 1,
    title: 'The Bible',
    content: 'The Bible is a collection of religious texts that are sacred to Christians, Jews, Samaritans, and Rastafarians.'
  },
  {
    id: 2,
    title: 'The Quran',
    content: 'The Quran is the central religious text of Islam, which Muslims believe to be a revelation from God.'
  },
  {
    id: 3,
    title: 'The Tao Te Ching',
    content: 'The Tao Te Ching is a Chinese classic text that is attributed to the sage Laozi. It is one of the foundational texts of Taoism.'
  },
  {
    id: 4,
    title: 'The Republic',
    content: 'The Republic is a Socratic dialogue, written by Plato around 380 BCE, concerning justice and the order and character of the just city-state and the just man.'
  },
  {
    id: 5,
    title: 'The Communist Manifesto',
    content: 'The Communist Manifesto is a political pamphlet, written by Karl Marx and Friedrich Engels in 1848, that presents an analytical approach to the class struggle and the problems of capitalism.'
  }
];

function App() {
  return (
    <div
    style={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:'2rem' }}
    >
      <h1>Lists of Books</h1>
      <List>
        {items.map(item => (
          <React.Fragment key={item.id}>
            <ListItem button>
              <ListItemText primary={item.title} secondary={item.content} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default App;
