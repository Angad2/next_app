import React from 'react';
import {Table} from 'antd'

const columns = [
    {
      title: 'Full Name',
      // width: 60,
      dataIndex: 'fullname',
      key: 'fullname',
      align: 'center',
      sorter: (a, b) => a.fullname.localeCompare(b.fullname),
    },
    {
      title: 'Age',
      // width: 50,
      dataIndex: 'age',
      key: 'age',
      align: 'center',
      sorter: (a, b) => a.age - b.age,
    },
    { 
        title: 'Dob', 
        // width: 50,
        dataIndex: 'dob', 
        key: 'dob' ,
        align: 'center',
        sorter: (a, b) => a.dob.length - b.dob.length,

    },
    { 
        title: 'Class', 
        // width: 50,
        dataIndex: 'std', 
        key: 'std' ,
        align: 'center',
    },
    { 
        title: 'City', 
        // width: 50,
        dataIndex: 'city', 
        key: 'city' ,
        align: 'center',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      // width: 50,
      align: 'center',
      render: () => (
          <div>
              <a>Edit</a>
              <span style={{margin:'5px'}}>|</span>
              <a>Delete</a>
            </div>
      ),
    },
  ];

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
      dob : '02/10/2020',
      class : 'X',
      city : 'Deoghar'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
      dob : '23/10/2020',
      class : 'X',
      city : 'Deoghar'
    },
    {
        key: '3',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
        dob : '12/10/2020',
        class : 'X',
        city : 'Deoghar'
      },
      {
        key: '4',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
        dob : '02/10/2020',
        class : 'X',
        city : 'Deoghar'
      },
      {
        key: '5',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
        dob : '02/10/2020',
        class : 'X',
        city : 'Deoghar'
      },
      {
        key: '6',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
        dob : '02/10/2020',
        class : 'X',
        city : 'Deoghar'
      },
      {
        key: '7',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
        dob : '02/10/2020',
        class : 'X',
        city : 'Deoghar'
      },
      {
        key: '8',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
        dob : '02/10/2020',
        class : 'X',
        city : 'Deoghar'
      },
      {
          key: '9',
          name: 'John Brown',
          age: 32,
          address: 'New York Park',
          dob : '02/10/2020',
          class : 'X',
          city : 'Deoghar'
        },
        {
          key: '10',
          name: 'Jim Green',
          age: 40,
          address: 'London Park',
          dob : '02/10/2020',
          class : 'X',
          city : 'Deoghar'
        },
        {
          key: '11',
          name: 'John Brown',
          age: 32,
          address: 'New York Park',
          dob : '02/10/2020',
          class : 'X',
          city : 'Deoghar'
        },
        {
          key: '12',
          name: 'Jim Green',
          age: 40,
          address: 'London Park',
          dob : '02/10/2020',
          class : 'X',
          city : 'Deoghar'
        },
  ];

const StudentsTable = ({studentsInfo}) => {
    return (
        <Table
            columns={columns}
            dataSource={studentsInfo}
            scroll={{ x: 1300 }}
            rowKey={"id"}
        />
    )
}
export default StudentsTable;