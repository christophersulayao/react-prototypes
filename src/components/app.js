import React from 'react';
import Table from './table';

export default () => {
       const students = [
              {
                     name: 'Naruto Uzumaki',
                     course: 'Ninjutsu',
                     grade: 100
              },
              {
                     name: 'Sasuke Uchiha',
                     course: 'Emo',
                     grade: 80
              },
              {
                     name: 'Topher Uchiha',
                     course: 'Sushi',
                     grade: 99
              }
       ];
       return (
           <div className="container ">
                  <h1>Student Grade Table</h1>
                  <Table data={students}/>
           </div>
       )
}

// import React from 'react';
//
// function App(){
//        return (
//            <div className="container">
//                   <h1> Student Grade Table </h1>
//                   <Table/>
//            </div>
//        )
//
// }
// export default App;
