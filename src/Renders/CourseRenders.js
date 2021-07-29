import { Cources } from './Cources';
import { CourseInfo } from '../Component/CourseInfo';
import { Button } from 'react-bootstrap';
export const CourcesRenders =(item) => {
     console.log(CourcesRenders);
     return (
         <div>
             <table>
                 <tr> {
                     CourcesRenders.Data.map((item) => (
                         <td>
                             {/* <Course CourseName={item.CourseName}instituteName={item.instituteName}contact={item.contact}City={item.City}/> */}
                        </td>
                     ))}
                 </tr>
             </table>
         </div>
     )
}
