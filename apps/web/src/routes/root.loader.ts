import { LoaderFunctionArgs } from "react-router-dom";

export async function rootLoader(_: LoaderFunctionArgs) {
  return Promise.resolve();
}
