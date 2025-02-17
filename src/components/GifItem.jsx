
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export const GifItem = ({ title, url, id }) => {

  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt={ title } src={ url } />}
      >
        <Meta title={ title } />
    </Card>
  )
}