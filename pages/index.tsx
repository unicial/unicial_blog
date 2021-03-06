import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import TopTab from "../components/TopTab/TopTab";
import AllAricles from "../components/Layout/AllArticles";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import SocialLinkBlock from "../components/SocialLinkBlock/SocialLinkBlock";
import Footer from "../components/Footer/Footer";
import { getAllArticle } from "../lib";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { fetchAllData } from "../store/AllArticles";
import { fetchAnnouncementData } from "../store/Announcement";
import Alert from "../components/Base/Alert";

const Home: NextPage = () => {
  const [allArticle, setAllArticle] = useState<any | null>();
  const [announcement, setAnnouncement] = useState<any | null>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllArticle().then((e: any) => {
      setAllArticle(e.all);
      setAnnouncement(e.announcement);
    });
    dispatch(fetchAllData(allArticle));
    dispatch(fetchAnnouncementData(announcement));
  }, [allArticle?.length, announcement?.length]);
  // allArticle?.length, announcement?.length;
  return (
    <div className={styles.container}>
      <Head>
        <title>Unicial Blog</title>
        <meta
          name="description"
          content="Unicial Blog is one for unicial users. You can post your article with contentful. So you have to sign up Contentful."
        />
        <meta
          name="keywords"
          content="ucc, ucc ico, ucc crowdsale, crowdsale, ucc preico, unicial ico, unicial crowdsale, unicial, unicial cash token, metaverse, znx, unicial cash, zilionixx, blockchain, web3, unicial blog, contentful"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="icon" href="/logo.svg" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <TopTab />
      <AllAricles />

      <NewsLetter />
      <SocialLinkBlock />
      <Footer />
      <Alert />
    </div>
  );
};

export default Home;
