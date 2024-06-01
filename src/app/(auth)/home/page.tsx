"use client";

import { getFilms, getPerson } from "@/api/dummy";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["films"],
    queryFn: getFilms,
  });

  const { data: person } = useQuery({
    queryKey: ["person"],
    queryFn: () => getPerson(1),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <div>
      <h1>Star Wars Films</h1>
      <ul>
        {data?.allFilms.films.map((film, index) => (
          <li key={index}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
}
