import React from 'react';
import {TemplateProps} from '@flayyer/flayyer-types';
import {Validator, Static} from '@flayyer/variables';

import '../styles/tailwind.css';

import {BaseTemplate} from '../components/template';
import {schema as schemaBase} from '../schema';

/**
 * Export to enable variables UI on Flayyer.com
 */
export const schema = schemaBase;

type Variables = Static<typeof schema>;
const validator = new Validator(schema);

// Make sure to 'export default' a React component
export default function ArticleTemplate({
  width = 1200,
  height = 630,
  locale = 'en',
  variables
}: TemplateProps<Variables>) {
  const {data} = validator.parse(variables);

  return (
    <BaseTemplate
      {...data}
      width={width}
      height={height}
      locale={locale}
      scheme="auto"
    />
  );
}
