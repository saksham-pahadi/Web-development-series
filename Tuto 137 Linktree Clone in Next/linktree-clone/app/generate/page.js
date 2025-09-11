import { Suspense } from "react";
import GenerateClient from "./generateclient";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading product...</p>}>
      <GenerateClient />
    </Suspense>
  );
}


