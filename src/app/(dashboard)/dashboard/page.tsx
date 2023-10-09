import { FC } from "react";
import type { Metadata } from "next";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";

// components
import ApiDashboard from "@/components/ApiDashboard";
import RequestApiKey from "@/components/RequestApiKey";

export const metadata: Metadata = {
  title: "Similarity API | Dashboard",
  description: "Free & open-source text similarity API",
};

const Page = async () => {
  // code
  // const user = await getServerSession(authOptions);

  const user = {
    id: "1",
    name: "Usama Rehman Yousaf",
    email: "decryptme938@gmail.com",
    picture: "https://picsum.photos/seed/picsum/200/300",
  };
  // if not user then return
  if (!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user?.id, enabled: true },
  });

  // return
  return (
    <div className="max-w-7xl mx-auto mt-16">
      {apiKey ? <ApiDashboard /> : <RequestApiKey />}
    </div>
  );
};

export default Page;
