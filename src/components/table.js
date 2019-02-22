// Import React at the top of the file


// Create a functional component that returns a table

export default () => {
    return (
        // Add the class table to the <table> element
        <table className="table">
            {/*The table should have a <thead> section that has three headers*/}
            {/*Name*/}
            {/*Course*/}
            {/*Grade*/}
            {/*Add the class thead-inverse to the <thead> element*/}
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>

            {/*In the <tbody> add three rows of student data based on the headers*/}
            <tbody>

            </tbody>
        </table>
    );
}





















// import React from 'react';
//
// export default () => {
//     return (
//         <table className="table ">
//             <thead className="thead-inverse">
//             <tr>
//                 <th>Name</th>
//                 <th>Course</th>
//                 <th>Grade</th>
//             </tr>
//             </thead>
//             <tbody>
//             <tr>
//                 <td>Chris Sulayao</td>
//                 <td>Growing a beard</td>
//                 <td>0</td>
//             </tr>
//             <tr>
//                 <td>Danika Quinteros</td>
//                 <td>Helpful Helper</td>
//                 <td>100</td>
//             </tr>
//             <tr>
//                 <td>Alejandro Carillo</td>
//                 <td>Pimpin</td>
//                 <td>70</td>
//             </tr>
//             </tbody>
//         </table>
//     )
// }
// // function Table (){
// //     return(
// //         <table className="table">
// //             <thead className="thead-inverse">
// //                 <tr>
// //                     <th>Name</th>
// //                     <th>Course</th>
// //                     <th>Grade</th>
// //                 </tr>
// //             </thead>
// //
// //             <tbody>
// //                 <tr>
// //                     <th>Name</th>
// //                     <th>Course</th>
// //                     <th>Grade</th>
// //                 </tr>
// //             </tbody>
// //         </table>
// //
// //     );
// // }
// // export default Table;
