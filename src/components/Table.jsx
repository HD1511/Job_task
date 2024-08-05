import React from 'react';

function Table(props) {

  return (
    <div>
        <table>
        <thead>
          <tr>
            <th className='text-center p-2'>Id</th>
            <th className='text-center p-2'>Name</th>
            <th className='text-center p-2'>Age</th>
            <th className='text-center p-2'>Role</th>
            <th className='text-center p-2'>Hire Date</th>
            <th className='text-center p-2'>Is Active</th>
            <th className='text-center p-2'>Salary</th>
            <th className='text-center p-2'>Department</th>
            <th className='text-center p-2'>Projects Completed</th>
            <th className='text-center p-2'>Last Login</th>
            <th className='text-center p-2'>Access Level</th>
          </tr>
        </thead>
        <tbody>
          {
            props?.data?.map((item, index) => (
              <tr key={index}>
                <td className='text-center p-2'>{item.id}</td>
                <td className='text-center p-2'>{item.name}</td>
                <td className='text-center p-2'>{item.age}</td>
                <td className='text-center p-2'>{item.role}</td>
                <td className='text-center p-2'>{item.hireDate}</td>
                <td className='text-center p-2'>{item.isActive.toString()}</td>
                <td className='text-center p-2'>{item.salary}</td>
                <td className='text-center p-2'>{item.department}</td>
                <td className='text-center p-2'>{item.projectsCompleted}</td>
                <td className='text-center p-2'>{item.lastLogin}</td>
                <td className='text-center p-2'>{item.accessLevel}</td>
              </tr>
            ))
          }
          {/* <tr>
            <td>Akram</td>
            <td>21</td>
            <td>Male</td>
            <td>2019MEB1235</td>
          </tr>
          <tr>
            <td>Jason</td>
            <td>22</td>
            <td>Male</td>
            <td>2018CSB1234</td>
          </tr>
          <tr>
          <td>Dave</td>
            <td>20</td>
            <td>Female</td>
            <td>2019eeb1242</td>
          </tr>
          <tr>
            <td>Tom</td>
            <td>20</td>
            <td>Male</td>
            <td>2019mmb1235</td>
          </tr>
          <tr>
            <td>Stark</td>
            <td>20</td>
            <td>Male</td>
            <td>2019meb1290</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
