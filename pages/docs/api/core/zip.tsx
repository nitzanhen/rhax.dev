import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports from '../../../../rhax.api';

const ZipPage: NextPage = () => {
  const zip = exports.find(e => e.name === "zip")!;

  return (
    <>
      <Head>
        <title>Rhax docs - zip</title>
      </Head>
      <TopBar />
      <ApiPage module={zip} />
    </>
  );
};

export default ZipPage;