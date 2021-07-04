import * as React from "react";

import { getArticlesAuthor } from "../../api/articles";
import Tabs from "../Tabs";
import ArticlePreview from "../ArticlePreview";
import { useAppSelector } from "../../hooks/redux";

interface IProfileTabProps {}

const ProfileTab: React.FunctionComponent<IProfileTabProps> = (props) => {
  const [articles, setArticles] = React.useState<any[]>();
  const favoritedArticles = Boolean(articles?.length)
    ? articles?.filter((article) => article.favorited)
    : [];
  const refreshStatus = useAppSelector((state) => state.article.refresh);

  React.useEffect(() => {
    getArticlesAuthor().then((res) => {
      setArticles(res.articles);
    });
  }, [refreshStatus]);

  return (
    <>
      <Tabs tabs={["My Posts", "Favorited Posts"]}>
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
        <div>
          {Boolean(favoritedArticles) &&
            favoritedArticles!.map((article) => {
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
    </>
  );
};

export default ProfileTab;
