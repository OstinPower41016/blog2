import * as React from "react";

import NewArticleForm from "../components/NewArticle/NewArticleForm";

interface INewArticleProps {}

const NewArticle: React.FunctionComponent<INewArticleProps> = (props) => {
  return (
    <div className="container">
      <NewArticleForm />
    </div>
  );
};

export default NewArticle;
