import React from 'react';
import Footer from './Footer';
import Input from './Input';

const ItemList = <T,>({
  addItem,
  list,
  renderItem,
  footerLeft,
  footerRight,
}: {
  addItem: (text: string) => void;
  list: T[];
  renderItem: (item: T) => React.ReactElement;
  footerLeft: React.ReactElement;
  footerRight: React.ReactElement;
}) => {
  return (
    <>
      <Input onSubmit={addItem} />
      <div className="todo-list">
        {list.length > 0 && list.map(renderItem)}
        <Footer footerLeft={footerLeft} footerRight={footerRight} />
      </div>
    </>
  );
};

export default ItemList;
