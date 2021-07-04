import * as React from "react";
import { FcLike } from "react-icons/fc";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Avatar from "./UI/Avatar";
import { setFavoriteArticle, deleteFavoriteArticle } from "../api/articles";
import { setStatusRefreshApi } from "../store/article/articleSlice";

interface IArticlePreviewProps {
  avatarImg: string;
  username: string;
  updatedAt: string;
  favoritesCount: string;
  title: string;
  description: string;
  tagList: string[];
  slug: string;
  favorited: boolean;
}

interface IButtonLike {
  favorited: boolean;
}

const ArticlePreview: React.FunctionComponent<IArticlePreviewProps> = (props) => {
  const dispatch = useDispatch();

  const onButtonFavoritedHandler = async () => {
    if (props.favorited) {
      await deleteFavoriteArticle(props.slug);
    } else {
      await setFavoriteArticle(props.slug);
    }
    dispatch(setStatusRefreshApi());
  };

  return (
    <ArticleWrapper className=" py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Avatar src={props.avatarImg} className="mr-1" />
          <div>
            <UserName>{props.username}</UserName>
            <Date>{props.updatedAt}</Date>
          </div>
        </div>
        <ButtonLike
          className="flex items-baseline"
          favorited={props.favorited}
          onClick={onButtonFavoritedHandler}
        >
          <FcLike className="mr-1" />
          <p>{props.favoritesCount}</p>
        </ButtonLike>
      </div>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <div className="flex justify-between">
        <ReadMore>Read more...</ReadMore>
        {props.tagList.map((tag) => {
          return (
            <Tag to="" key={tag + Math.random()}>
              {" "}
            </Tag>
          );
        })}
      </div>
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const UserName = styled.p`
  color: var(--green-color);
`;
const Date = styled.p`
  color: #bbb;
  font-size: 0.8rem;
`;
const ButtonLike = styled.button`
  color: ${(props: IButtonLike) => (props.favorited ? "white" : "var(--green-color)")};
  background-color: ${(props: IButtonLike) =>
    props.favorited ? "var(--green-color)" : "transparent"};
  padding: .25rem .5rem;
  font-size: .875rem;
  border-radius: .2rem;
  border: 1px solid var(--green-color);
  & > svg > path {
    fill: ${(props: IButtonLike) => (props.favorited ? "white" : "var(--green-color)")};
  }
}
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
`;
const Description = styled.p`
  font-weight: 300;
  color: #999;
`;

const ReadMore = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: #bbb;
`;
const Tag = styled(Link)`
  font-weight: 300;
  font-size: 0.8rem;
  border: 1px solid #ddd;
  color: #aaa;
`;

export default ArticlePreview;
