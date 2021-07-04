import * as React from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";

import FormWrapper from "../layouts/FormWrapper";
import Input from "../UI/Input";
import Button from "../UI/Button";
import TextArea from "../UI/TextArea";
import { useValuesForm } from "../../hooks/use/ValuesForm";
import { createArticle, IFormValues } from "../../api/articles";
import { checkInputsOnEmpty } from "../utils/Form";

interface INewArticleFormProps {}

const NewArticleForm: React.FunctionComponent<INewArticleFormProps> = (props) => {
  const [values, onInputHandler, onSubmitHandler] = useValuesForm<IFormValues>(
    { title: "", description: "", body: "", tagList: [] },
    createArticle,
  );
  const [tag, setTag] = React.useState<string>("");

  const isDisabled = checkInputsOnEmpty({
    title: values.title,
    description: values.description,
    body: values.body,
  });

  const onTagsKeyHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onInputHandler(null, "tagList", tag);
      setTag("");
    }
  };

  const onTagRemoveHandler = (tag: string) => {
    onInputHandler(null, "tagList", tag, true);
  };

  return (
    <FormWrapper>
      <Input
        placeholder="Article Title"
        value={values.title}
        onInput={(e) => onInputHandler(e, "title")}
      />
      <Input
        placeholder="What's this article about ?"
        value={values.description}
        fz="1rem"
        onInput={(e) => onInputHandler(e, "description")}
      />
      <TextArea
        placeholder="Write your article (in markdown)"
        value={values.body}
        fz="1rem"
        onInput={(e) => onInputHandler(e, "body")}
      />
      <Input
        placeholder="Enter tags"
        value={tag}
        fz="1rem"
        onKeyPress={(e) => onTagsKeyHandler(e)}
        onInput={(e) => setTag(e.target.value)}
      />
      {Boolean(values.tagList.length) && (
        <TagsWrapper className="flex">
          {values.tagList.map((tag) => {
            return (
              <Tag key={tag + Math.random()} className="rounded flex items-center ">
                <GrFormClose className="mr-1" onClick={() => onTagRemoveHandler(tag)} />
                {tag}
              </Tag>
            );
          })}
        </TagsWrapper>
      )}
      <Button className="self-end" disabled={isDisabled} onClick={onSubmitHandler}>
        Publish Article
      </Button>
    </FormWrapper>
  );
};

const TagsWrapper = styled.div`
  > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Tag = styled.div`
  font-size: 0.8rem;
  padding: 0.1rem 0 0.1rem;
  color: white;
  background-color: #818a91;
  padding: 2px 0.5rem;
  cursor: pointer;
  & > svg > path {
    stroke: white;
  }
  & > svg {
    font-size: 1rem;
  }
`;

export default NewArticleForm;
