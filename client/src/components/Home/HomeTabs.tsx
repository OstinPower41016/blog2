import * as React from "react";
import styled from "styled-components";

import { getArticlesAuthor } from "../../api/articles";
import Tabs from "../Tabs";
import ArticlePreview from "../ArticlePreview";
import { useAppSelector } from "../../hooks/redux";

interface IHomeTabsProps {}

const HomeTabs: React.FunctionComponent<IHomeTabsProps> = (props) => {
  const [articles, setArticles] = React.useState<any[]>();

  const refreshStatus = useAppSelector((state) => state.article.refresh);

  React.useEffect(() => {
    getArticlesAuthor().then((res) => {
      setArticles(res.articles);
    });
  }, [refreshStatus]);

  return (
    <TabsWrapper>
      <Tabs tabs={["Your Feed", "Global Feed"]}>
        <div className="text-center">
          <p>No articles are here... yet.</p>
        </div>
        <div>
          {Boolean(articles) &&
            articles!.map((article) => {
              const preparedDate = new Date(article.updatedAt).toDateString().split(" ").slice(1);
              const [month, day, year] = preparedDate;

              return (
                <ArticlePreview
                  key={article.title + Math.random()}
                  slug={article.slug}
                  favorited={article.favorited}
                  avatarImg={article.author.image}
                  username={article.author.username}
                  updatedAt={`${month} ${day} ${year}`}
                  favoritesCount={article.favoritesCount}
                  title={article.title}
                  description={article.description}
                  tagList={article.tagList}
                />
              );
            })}
        </div>
      </Tabs>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  flex: 0 0 70%;
`;

export default HomeTabs;
