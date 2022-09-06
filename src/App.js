import './App.css';
import {useState} from 'react';

function App() {
  const [students, setStudents] = useState([
    {id: 1, firstName: 'Jason', lastName: 'Li', classYear: '2018'},
    {id: 2, firstName: 'Leo', lastName: 'Smith', classYear: '2015'},
    {id: 3, firstName: 'James', lastName: 'Johnson', classYear: '2016'}
  ]);

  return (
    <div className='app'>
      {students.map((student) => (
        <div className='student' key={student.id}>
          <h2>{student.firstName} {student.lastName}</h2>
          <p><b>Class Year: </b>{student.classYear}</p>
        </div>
      )
    )}
    </div>
  )
}

export default App;
