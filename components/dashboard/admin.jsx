"use client";
import { contextProvider } from "@/provider/contextProvider";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const Admin = () => {
  const { token } = useContext(contextProvider);
  const route = useRouter();
  useEffect(() => {
    if (!token) {
      route.push("/");
    }
  }, [token]);
  return <div></div>;
};

export default Admin;
