import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { Query } from '@apollo/react-components';

function App() {
  return (
    <div className="App">
      This is react app

      <Query query={GET_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return 'Error...';
          if (data) {
            return (
              <>
                <div className="">Database Name: {data.databaseName}</div>
                {data.getFriendsDB.map((friend) => (
                  <div className="">{friend?.firstName}</div>
                ))}
              </>
            )
          }



        }}
      </Query>
    </div>
  );
}

const GET_QUERY = gql`
query App {
  databaseName @client
  getFriendsDB {
    firstName
    lastName
    email
  }
}
`

export default App;
