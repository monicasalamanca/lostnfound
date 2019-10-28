import Head from 'next/head';

// Create stateless components becasue data won't be handle in here
const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <link href="https://fonts.googleapis.com/css?family=Big+Shoulders+Text|Montserrat&display=swap" rel="stylesheet" />
    <title>Lost and Found</title>
  </Head>
);

export default Meta;