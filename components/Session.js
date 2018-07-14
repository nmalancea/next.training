import { Fragment } from 'react';
import Link from 'next/link';
import Rating from './Rating';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import './Session.css';

const Notes = dynamic({
  modules: () => {
    const components = {
      css1: import('codemirror/lib/codemirror.css'),
      css2: import('./Notes/Notes.css'),
      Notes: import('./Notes'),
    };

    return components;
  },
  render: (props, { Notes, css1, css2 }) => {
    return (
      <Fragment>
        <Head>
          <style>{`
          ${css1.toString()}

            ${css2.toString()}
          `}</style>
        </Head>
        <Notes {...props} />
      </Fragment>
    );
  },
  loading: () => <p>Loading notes…</p>,
  ssr: false,
});

const Speaker = ({ speaker, twitter }) =>
  speaker ? (
    <p className="Speaker">
      {speaker} / <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
    </p>
  ) : null;

export default ({
  title,
  description,
  slug,
  rating = false,
  more = false,
  ...props
}) => {
  const More = more ? (
    <Fragment>
      <Notes url={`/session/${slug}`} />
      <Rating value={rating} />
    </Fragment>
  ) : null;

  return (
    <div className="Session">
      <h2 className="___Speaker">
        <Link
          as={`/session/${slug}?rating=4`}
          href={`/session?slug=${slug}&rating=4`}
        >
          <a>{title}</a>
        </Link>
      </h2>
      <p>{description}</p>
      {process.env.SHOW_SPEAKER && <Speaker {...props} />}
      {More}
    </div>
  );
};
