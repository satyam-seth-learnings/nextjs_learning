- [YouTube Video Link](https://youtu.be/_oNAGdvsFW4?si=Nhlmud7Y6KXYcRab)

- [NEXT JS Official Doc Link](https://nextjs.org/)

- Create NEXT JS app -

    ```bash
    npx create-next-app
    ```

- Overriding `pages/_document.js` -
    ```javascript
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
    ```