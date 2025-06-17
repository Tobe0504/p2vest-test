import Homepage from "@/containers/Homepage/Homepage";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback="Loader...">
      <MainLayout>
        <Homepage />
      </MainLayout>
    </Suspense>
  );
}
