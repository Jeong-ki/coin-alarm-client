"use client";

import { getFindUsers } from "@/api/dummy";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: getFindUsers,
  });
  console.log(data);

  return <div>test</div>;
}
