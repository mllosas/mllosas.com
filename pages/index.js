import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import Head from "next/head";
import styles from "../public/scss/pages/Index.module.scss";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.indexContent} content`}>
        <h1 className={styles.h1}>Manuel Llosas</h1>
        <p>I'm a Front-end developer who likes building things.</p>
      </div>
    </Fragment>
  );
}
