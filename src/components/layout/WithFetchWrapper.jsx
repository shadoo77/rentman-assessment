import React from "react";
import { isEmpty } from "../../services/utils";
// Components
import ErrorPage from "./ErrorPage";
import Spinner from "./Spinner";

export default props => {
  const { isLoading, hasFailed, errorMessage, data } = props.state;

  return (
    <>
      {isLoading && !hasFailed ? (
        <Spinner />
      ) : !isLoading && hasFailed ? (
        <ErrorPage errorMessage={errorMessage} />
      ) : !hasFailed && !isLoading && isEmpty(data) ? (
        <ErrorPage errorMessage="No movie found!" />
      ) : (
        props.children
      )}
    </>
  );
};
