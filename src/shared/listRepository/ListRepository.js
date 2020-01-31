import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LIST_REPO_QUERY = gql`
  {
    viewer {
      login
      repositories(first: 100) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          name
          owner {
            login
          }
        }
      }
    }
  }
`;

const ListRepository = () => {
  const { loading, error, data } = useQuery(LIST_REPO_QUERY, {
    fetchPolicy: "no-cache"
  });

  console.log(loading, error, data);
  let repositories = !loading ? data.viewer.repositories : {};
  return (
    <>
      {!loading && (
        <div>
          <span>{repositories.totalCount}</span>
          <ul>
            {repositories.nodes &&
              repositories.nodes.map(repo => (
                <li key={repo.id}>{repo.name}</li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ListRepository;



//const FindSolitudeRepository = () => {
  ////const [repositories, setRepositories] = useState({});
  //const { loading, error, data, fetchMore } = useQuery(LIST_REPO_QUERY, {
    //fetchPolicy: "no-cache"
  //});

  //let repositories = !loading ? data.viewer.repositories : {};
  ////setRepositories(repositories);
  //console.log(repositories);
  //return (
    //<div
      //onClick={() => {
        //console.log("Clicked");
        //fetchMore({
          //variables: {
            //cursor: repositories.pageInfo.endCursor
          //},
          //updateQuery: (previousResult, { fetchMoreResult }) => {
            ////const pageInfo = fetchMoreResult.viewer.repositories.pageInfo;
            //const newRepositories = fetchMoreResult.viewer.repositories.nodes;

            //return repositories.length
              //? {
                  //__typename: previousResult.viewer.repositories.__typename,
                  //repositories: [
                    //...previousResult.viewer.repositories,
                    //...newRepositories
                  //]
                //}
              //: previousResult;
          //}
        //});
      //}}
    //>
      //{!loading && (
        //<div>
          //<ul>
            //{repositories.nodes &&
              //repositories.nodes.map(repo => (
                //<li key={repo.id}>{repo.name}</li>
              //))}
          //</ul>
        //</div>
      //)}
    //</div>
  //);
//};

//export default FindSolitudeRepository;
