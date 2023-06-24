import Head from 'next/head';

const Meta = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
        </Head>
    );
};

export default Meta;
