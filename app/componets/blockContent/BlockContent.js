// 'use client'

import BlockContent from '@sanity/block-content-to-react';
import { imageUrl } from 'app/utils/sanityImage';

const serializers = {
  types: {
    image: ({ node }) => (
      <img
        src={imageUrl(node?.asset)}
        alt={node.alt || ' '}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    ),
  },
  marks: {
    link: ({ mark, children }) => {
      const rel = !mark.href.startsWith('/')
        ? 'noopener noreferrer'
        : undefined;
      return (
        <a href={mark.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
  block: {
    h1: (props) => <h1 className="text-2xl font-bold mb-4">{props.children}</h1>,
    h2: (props) => <h2 className="text-xl font-semibold mb-4">{props.children}</h2>,
    h3: (props) => <h3 className="text-lg font-semibold mb-4">{props.children}</h3>,
    blockquote: (props) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">{props.children}</blockquote>,
    normal: (props) => <p className="mb-4">{props.children}</p>,
    ul: (props) => <ul className="list-disc pl-6 mb-4">{props.children}</ul>,
    ol: (props) => <ol className="list-decimal pl-6 mb-4">{props.children}</ol>,
    listItem: (props) => <li className="mb-2">{props.children}</li>,
  },
};

const BlockContentBox = ({ value }) => (
  <BlockContent
    blocks={value}
    serializers={serializers}
  />
);

export default BlockContentBox;
