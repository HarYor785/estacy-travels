import { PortableText } from '@portabletext/react';
import { imageUrl } from 'app/utils/sanityImage';

const PortableTextBox = ({ value }) => {
  return (
    <PortableText
      value={value}
      components={{
        types: {
          image: ({ value }) => (
            <img
              src={imageUrl(value?.asset)}
              alt={value.alt || ' '}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          ),
        },
        marks: {
          link: ({ children, value }) => {
            const rel = !value.href.startsWith('/')
              ? 'noopener noreferrer'
              : undefined;
            return (
              <a href={value.href} rel={rel}>
                {children}
              </a>
            );
          },
        },
      }}
    />
  );
};

export default PortableTextBox;
