import gql from 'graphql-tag';

export const createStudent = (firstname, lastname, age, dob, std, city) =>gql`
    mutation createStudents($firstname : String!, $lastname : String!, $age:Int!, $dob:Date!, $std:String!, $city:String!){
        createStudent(input: {data: { firstname: ${firstname}, lastname: ${lastname}, age: ${age}, dob: ${dob}, std: ${std},city: ${city}}}){
          student{
            id
            firstname
            lastname
          }
        }
      }
  `;


export const getStudents = () => gql`
    query{
      students{
        id
        fullname
        age
        dob
        std
        city
      }
    }
`;