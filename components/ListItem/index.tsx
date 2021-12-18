import React from 'react';
import * as Styles from './styles';

interface ListItemProps {
  title: string;
  date: number;
  categories?: string[];
}

const ListItem: React.FC<ListItemProps> = ({ title, date, categories }) => {
  return (
    <Styles.Wrapper>
      <Styles.Heading>{title}</Styles.Heading>
      <Styles.Description>
        Personally, I still haven’t experienced anything in the art world as stunning as this piece by @_deafbeef. You will be mine, oh yes. You will be mine.
      </Styles.Description>
      <Styles.Meta>
        <Styles.MetaItem>
          {date}
        </Styles.MetaItem>
        {categories &&
          <Styles.MetaItem>
            <Styles.Categories>
              {categories.map((category: string, i: number) => {
                return (
                  <Styles.Category key={i}>{category}</Styles.Category>
                )
              })}
            </Styles.Categories>
          </Styles.MetaItem>
        }
      </Styles.Meta>
    </Styles.Wrapper>
  );
};

export default ListItem;
