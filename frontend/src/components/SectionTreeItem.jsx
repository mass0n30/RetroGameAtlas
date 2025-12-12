


import { useState } from 'react';
import { Tree, TreeItem, TreeItemContent, Button } from 'react-aria-components';
import styles from '../styles/components/sidebar.module.css';
import { resetFilters } from '../helpers';
import { useEffect } from 'react';


function SectionTreeItem({  category, itemname,itemId, toggleItem,open, setOpen, logo  }) {

  // making new set from parent state for toggled element categories, conditionally checking inline upon changes
  const set = new Set(open);

  const openHandler = (itemId) => {
    const newSet = new Set(open);

    if (newSet.has(itemId)) {
      newSet.delete(itemId);
    } else {
      newSet.add(itemId)
    };

    setOpen(newSet);
  };

  return (
        <TreeItemContent>
          <Button id={styles.categorybtn} onClick={() => {openHandler(itemId), toggleItem(itemId, category)}} style={set.has(itemId) ? { backgroundColor: '#3b82f6', color: '#a7e9ff' } : null} >
          
           <div id={styles.categorybtntxt}>{itemname}</div> 
            </Button>
        </TreeItemContent>
      )
  };

export default SectionTreeItem;
