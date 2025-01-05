"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Confirmation = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/dashboard");
  }, 2000); //

  return (
    <div>
      <h1>Data Submitted Successfully</h1>
      <p>Redirecting to Dashboard...</p>
    </div>
  );
};

export default Confirmation;
