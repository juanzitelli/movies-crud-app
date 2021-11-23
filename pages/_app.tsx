import DayjsAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import "../styles/globals.css";
import { DefaultThemeProvider } from "./../themes";
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultThemeProvider>
        <LocalizationProvider dateAdapter={DayjsAdapter}>
          <DefaultLayout>
            <Head>
              <title>Movies app</title>
              <meta
                name="description"
                content={`Next.js + TypeScript client application for the MCGA subject's second mid-term exam. Built by @juanzitelli.`}
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
          </DefaultLayout>
          <CssBaseline />
        </LocalizationProvider>
      </DefaultThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
