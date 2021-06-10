import React, { useState } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import Markdown from 'react-markdown';
import { Entry } from '../../context/initialState';
import EntryItem from '../EntryItem';
import styles from './index.module.scss';

export interface EntriesGroupProps {
  list: Entry[];
  title?: string;
}

const EntriesGroup: React.FC<EntriesGroupProps> = ({ list = [], title }) => {
  const [selected, setSelected] = useState('');

  const clickHandler = (id) => {
    if (id === selected) return setSelected('');
    setSelected(id);
  };

  return (
    <div>
      {title ? <h4 className={styles.entryTitle}>{title}</h4> : null}
      <ul className={styles.listGroup}>
        {list
          .filter((i) => !i.isHidden)
          .map((entry) => (
            <EntryItem
              key={entry.company}
              entry={entry}
              isSelected={selected === entry.company}
              onClick={clickHandler}
            />
          ))}
      </ul>
    </div>
  );
};

export default EntriesGroup;
