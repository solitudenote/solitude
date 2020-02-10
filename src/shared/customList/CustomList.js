import React from "react";
import { List, Typography } from "antd";

const CustomList = ({
  dataSource,
  bordered = false,
  split = false,
  listItemKeyValueKey,
  listItemKeyId,
  listItemStyles = {},
  onListItemClick
}) => {
  return (
    <List
      bordered={bordered}
      split={split}
      dataSource={dataSource}
      renderItem={item => (
        <List.Item
          key={item["listItemKeyId"]}
          onClick={() => onListItemClick()}
          style={listItemStyles}
        >
          {item.name}
        </List.Item>
      )}
    />
  );
};

export default CustomList;
