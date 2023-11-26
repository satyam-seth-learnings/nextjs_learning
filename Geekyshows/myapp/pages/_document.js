import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
       return (
        <Html>
                <Head>
                    <body className='Sonam'>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        );
    }
}

export default MyDocument;