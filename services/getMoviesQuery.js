import gql from 'graphql-tag';

export const getMoviesQuery = () =>gql`
query{
    movies{
      id
      title
      created
      poster{
        id
        url
      }
    }
  }
`;