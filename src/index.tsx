import React, { FC, ComponentProps } from 'react';
import { string } from 'prop-types';
import './index.css';

interface Accordion {
  title?: String,
}

const MyTemplate:FC<Accordion > = (props: ComponentProps<any>) => {
  const { title } = props;
  return (<h1>{title}</h1>);
};

MyTemplate.propTypes = {
  title: string,
};

MyTemplate.defaultProps = {
  title: 'Hello Template!!!',
};

export default MyTemplate;
