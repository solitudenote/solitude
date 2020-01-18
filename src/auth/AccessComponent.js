import React from "react";

const AccessComponent = () => {
  const CLIENT_ID = "b4b9cca2169de74f183e";
  //const REDIRECT_URI = "https://mrprofessor.io/solitude/";
  const REDIRECT_URI = "http://localhost:3000/";
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
    >
      Github
    </a>
  );
};

export default AccessComponent;
