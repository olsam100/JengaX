import React from 'react';
import PortableText from './portableText';
import { buildImageObj } from '../utils/helpers';
import { imageUrlFor } from '../utils/image-url';

function BlogPost(props) {
  const { _rawBody, title, mainImage } = props;
  return (
    <article>
      {mainImage && mainImage.asset && (
        <div className={mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt=""
          />
        </div>
      )}
      <div>
        <div>
          <h1>{title}</h1>
          {_rawBody && <PortableText blocks={_rawBody} />}
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
