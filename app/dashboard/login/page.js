import Login from "@/components/login";

import React from "react";

export default async function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   const headers = context.req.headers;

//   return {
//     props: {
//       headers,
//     },
//   };
// };
