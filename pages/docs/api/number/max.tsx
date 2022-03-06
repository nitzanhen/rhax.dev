import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const maxItem = exports.find(e => e.name === "maxItem");

  return {
    props: {
      maxItem
    }
  };
}

const MaxItemPage: NextPage<{ maxItem: Module }> = ({ maxItem }) => {

  return (
    <>
      <Head>
        <title>Rhax docs - maxItem</title>
      </Head>
      <TopBar />
      <ApiPage module={maxItem} />
    </>
  );
};

export default MaxItemPage;