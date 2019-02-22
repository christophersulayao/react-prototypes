//
// Import React
// import React from 'react';
// import Table from './table';
//
// // Create a functional component called App that
// export default () => {
//     //  returns a <h1> containing "My first React functional component"
//     return (
//         <h1>
//             My first React functional component
//         </h1>
//     )
// }

// Import React
import React from 'react';
import Table from './table';

// Create a functional component called App that
export default () => {
    //  returns a <h1> containing "My first React functional component"
    return (
        // Remove the <h1> element that is being returned from the component
        //Add a new <div> with a class of container to the return statement
        <div className="container">
            {/*Inside the <div> add a new <h1> that says "Student Grade Table"*/}
            <h1>
                Student Grade Table
            </h1>
            {/*//Below the <h1> add the <Table> component*/}
            <Table/>
        </div>

    )
}
import React from 'react';
// import Table from './table';
//
// export default () => {
//        const students = [
//               {
//                      name: 'Naruto Uzumaki',
//                      course: 'Ninjutsu',
//                      grade: 100
//               },
//               {
//                      name: 'Sasuke Uchiha',
//                      course: 'Emo',
//                      grade: 80
//               },
//               {
//                      name: 'Topher Uchiha',
//                      course: 'Sushi',
//                      grade: 99
//               }
//        ];
//        return (
//            <div className="container ">
//                   <h1>Student Grade Table</h1>
//                   <Table data={students}/>
//            </div>
//        )
// }

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





























//
