import React from 'react';
import {Card} from 'mili-ui';
import "mili-ui/style.css"

function App() {
  return (
    <div>
      <Card img={{
        src: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        alt: 'Blue Orage'
      }} 
      title={'Random img'}>Hele</ Card>
    </div>
  );
}

export default App;
