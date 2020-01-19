import ApolloClient from "apollo-boost";
import { setContext } from "apollo-link-context";

const authClient = token => {
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",

    request: operation => {
      //const token = localStorage.getItem("token");
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ""
        }
      });
    }
  });
  return client;
};

export default authClient;
