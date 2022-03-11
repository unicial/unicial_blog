import Head from "next/head";
import Header from '../Header/Header'
import TopTab from '../TopTab/TopTab'
import NewsLetter from '../NewsLetter/NewsLetter'
import SocialLinkBlock from '../SocialLinkBlock/SocialLinkBlock'
import Footer from '../Footer/Footer'

const Layout = ({ children, title, description }) => {
    return (
        <>
            <Head>
                <title>Unicial Blog</title>
                <meta name="description" content="Generated by create next app" />
                <meta
                    property="og:title"
                    content={title ? title : "Blog"}
                    key="og:title"
                />
                {/* <meta property="og:url" content={url ? url : pageUrl} key="og:url" /> */}
                {/* <meta
                    property="og:image"
                    content={ogImage ? ogImage : ogImg}
                    key="og:image"
                /> */}
                <meta
                    property="og:description"
                    content={
                        description
                            ? description
                            : "This is a statically generated blog example using Next.js and Contentful."
                    }
                    key="og:description"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                    crossOrigin="anonymous"
                />
            </Head>
            <Header />
            <TopTab />
            <main>{children}</main>
            <NewsLetter />
            <SocialLinkBlock />
            <Footer />
        </>
    )
}
export default Layout;