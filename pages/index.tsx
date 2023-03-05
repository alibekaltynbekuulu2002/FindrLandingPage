import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Feautures from "@/components/FeaturesApplication";
import FeaturesVendor from "@/components/FeaturesVendor";
import Partners from "@/components/Partners";
import Screenshots from "@/components/Screenshots";
import Feedbacks from "@/components/Feedbacks";
import FeedbackForm from "@/components/FeedbackForm";
import Faq from "@/components/Faq";
import Contacts from "@/components/Contacts";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Findr - Marketplace Platform</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <Banner />
        <Feautures />
        <FeaturesVendor />
        <Partners />
        <Screenshots />
        <Feedbacks />
        <FeedbackForm />
        <Faq />
        <Contacts />
        <FooterBanner />
      </main>
      <Footer />
    </>
  );
}
