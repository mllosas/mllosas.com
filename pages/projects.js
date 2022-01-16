import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import styles from "../public/scss/pages/Projects.module.scss";

const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Projects(props) {
  const [records, setRecords] = useState(props.recordsData);
  const [lastModifiedDateRecords, setLastModifiedDateRecords] = useState(
    props.lastTimeTableModifiedString
  );

  const DATA_URL =
    "https://api.airtable.com/v0/" +
    AIRTABLE_BASE_ID +
    "/Portfolio?maxRecords=5&view=List&api_key=" +
    AIRTABLE_API_KEY;

  const { data, error } = useSWR(DATA_URL, fetcher);

  useEffect(() => {
    if (data) {
      const recordsData = data.records;
      const lastTimeTableModifiedRecords = recordsData.map(
        (record) => new Date(record.fields["Last Time Modified"])
      );

      const lastTimeTableModified = new Date(
        Math.max.apply(null, lastTimeTableModifiedRecords)
      );

      const lastTimeTableModifiedDateString =
        lastTimeTableModified.toLocaleDateString("en-US", {
          timeZone: "UTC",
        });

      setRecords(recordsData);
      setLastModifiedDateRecords(lastTimeTableModifiedDateString);
    }
  }, [data]);

  if (error) {
    return <p>No data yet</p>;
  }

  if (!data && !records) {
    return <p>Loading...</p>;
  }

  return (
    <div className={`${styles.projectsContent} content`}>
      <p>Links to most recent projects I've worked on:</p>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            <a target="_blank" href={record.fields["URL"]}>
              {record.fields["Name"]}
            </a>
          </li>
        ))}
      </ul>
      <p>Last Updated On: {lastModifiedDateRecords}</p>
    </div>
  );
}

export async function getStaticProps() {
  const DATA_URL =
    "https://api.airtable.com/v0/" +
    AIRTABLE_BASE_ID +
    "/Portfolio?maxRecords=5&view=List&api_key=" +
    AIRTABLE_API_KEY;

  const response = await fetch(DATA_URL);
  const data = await response.json();

  const recordsData = data.records;

  const lastTimeTableModifiedRecords = recordsData.map(
    (record) => new Date(record.fields["Last Time Modified"])
  );

  console.log(lastTimeTableModifiedRecords);
  console.log(Array.isArray(lastTimeTableModifiedRecords));

  const lastTimeTableModified = new Date(
    Math.max.apply(null, lastTimeTableModifiedRecords)
  );

  console.log(lastTimeTableModified);

  const lastTimeTableModifiedDateString =
    lastTimeTableModified.toLocaleDateString("en-US", { timeZone: "UTC" });

  const lastTimeTableModifiedString =
    lastTimeTableModifiedDateString.toString();

  return { props: { recordsData, lastTimeTableModifiedString } };
}
