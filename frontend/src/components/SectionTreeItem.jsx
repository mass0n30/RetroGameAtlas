


import { useState } from 'react';
import { Tree, TreeItem, TreeItemContent, Button } from 'react-aria-components';
import styles from '../styles/components/sidebar.module.css';
import { resetFilters } from '../helpers';
import { useEffect } from 'react';


function SectionTreeItem({  category, itemname,itemId, toggleItem, open, setOpen }) {

  const [isOpen, setIsOpen] = useState(false);

  const openHandler = (itemId) => {
    const newSet = new Set(open);
    isOpen ? setIsOpen(false) : setIsOpen(true);

    if (newSet.has(itemId)) {
      newSet.delete(itemId);
    } else {
      newSet.add(itemId);
      setOpen(newSet);
    };
  };

  return (
        <TreeItemContent>
          <Button onClick={() => {openHandler(itemId), toggleItem(itemId, category)}} style={isOpen ? { backgroundColor: '#007bff', color: 'white' } : {}} >{itemname}</Button>
        </TreeItemContent>
      )
  };

export default SectionTreeItem;
