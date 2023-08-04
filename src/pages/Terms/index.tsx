import Head from "next/head";
import Navbar from "@/Components/Navbar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import styles from "../../styles/Terms.module.scss";

export const getStaticProps: GetStaticProps<{
  total: number;
}> = async (context) => {
  const response = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACKENDURL}/total-highlights`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("response: ", response.data);

  return {
    props: {
      total: response.data,
    },
  };
};

const Terms = ({ total }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/Resources/SEOIMAGE_SMALL.jpg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Terms and conditions of KTON, the all in one highlight manager 📖📝"
        />
        <meta property="og:url" content="https://kton.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Highlight Manager" />
        <meta
          property="og:description"
          content="Terms and conditions of KTON, the all in one highlight manager 📖📝"
        />
        <meta property="og:image" content="/Resources/SEOIMAGE_SMALL.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="kton.xyz" />
        <meta property="twitter:url" content="https://kton.xyz/" />
        <meta name="twitter:title" content="Kindle Manager" />
        <meta
          name="twitter:description"
          content="Terms and conditions of KTON, the all in one highlight manager 📖📝"
        />
        <meta name="twitter:image" content="/Resources/SEOIMAGE.jpg" />

        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/img/book-icon.png"
        />

        <title>KTON Terms</title>
        <meta name="twitter:image" content="/Resources/book-icon.jpg" />
      </Head>

      <Navbar total={total.toLocaleString()} />
      <div className={styles.termsPage}>
        <div className={styles.termsPage_Width}>
          <h1>Terms of Service</h1>
          <p>
            These terms govern your access to and use of the KTON. Please read
            them carefully before using the service.
          </p>
          <h1>Using Our Service</h1>
          <p>
            By accessing the KTON website, you agree to be bound by these terms.
            They may be modified over time, with revisions indicated by the
            &quot;Last updated&quot; date.
          </p>
          <p>
            Your imported notes data remains under your full ownership and
            control. We make no claim of ownership over your personal content.
          </p>
          <p>
            The service is provided &quot;as is&quot; with no guarantees. We are
            not liable for any loss of notes data or issues relating to use.
          </p>
          <p>
            We reserve the right to terminate accounts, restrict activity, or
            modify service availability without notice. Accounts may be
            deactivated after prolonged inactivity.
          </p>

          <h1>Content Restrictions</h1>
          <p className="py-3 text-md font-extralight md:text-lg text-gray-300">
            You take responsibility for the legality and appropriateness of any
            imported note content. Prohibited content includes: copyrighted
            material, illegal content, and sexually explicit material.
          </p>
          <p className="py-3 text-md font-extralight md:text-lg text-gray-300">
            We reserve the right to delete or deny access to prohibited content
            without refund. Repeated violations may lead to account termination.
          </p>

          <h1>Payments & Billing</h1>
          <p className="py-3 text-md font-extralight md:text-lg text-gray-300">
            Paid subscriptions will be billed monthly or annually based on your
            selected plan. No refunds are provided for partial periods.
          </p>
          <p>
            We reserve the right to change pricing at any time. Existing
            subscribers will receive notice. Renewals after a change will be
            charged at the new rates.
          </p>

          <h1>Cancelling</h1>

          <p>
            You may cancel your paid subscription at any time from your account
            settings. Service will remain available until the end of the current
            billing period.
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
