import Head from "next/head";

const MainContainer = ({children}) => {
    return (
        <>
            <Head>
                <meta keywords="gallery, nextjs"></meta>
                <title>main page</title>
            </Head>
            <main>
                {children}
            </main>
        </>
    );
};

export default MainContainer;