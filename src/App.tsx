import React, { Suspense } from "react";

import MainLayout from "@/layouts/MainLayout";

import Converter from "@/components/Convertor/Converter";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";

import "@/assets/styles/theme.css";

import "@/config/i18n";

const App = () => {
  return (
    <Suspense fallback={<SkeletonLoader height={"100vh"} width={"100vw"} />}>
      <MainLayout>
        <Converter />
      </MainLayout>
    </Suspense>
  );
};

export default App;
