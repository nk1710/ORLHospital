"use client";

import { useEffect, useState } from "react";

export default function ConsoleStats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/search-console")
      .then((res) => res.json())
      .then((res) => {
        if (res.error) setError(res.error);
        else setData(res);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Search Console Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}