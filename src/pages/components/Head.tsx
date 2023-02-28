import Head from "next/head";

type Props = {
  title?: string;
};

const MetaHead = ({ title }: Props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="Next.js TypeScript" />

      <title>{title}</title>
    </Head>
  );
};

MetaHead.defaultProps = {
  title: "Emelito",
};
