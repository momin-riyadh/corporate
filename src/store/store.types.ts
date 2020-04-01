import {
  HomePageData,
  BasicPageData,
  ContactPageData,
  JobDetailsPageData,
  JobIndexPageData,
  NewsDetailPageData,
  NewsIndexPageData
} from "./cms.types";
export interface RootState {
  version: string;
}

export type PageData =
  | HomePageData
  | BasicPageData
  | ContactPageData
  | JobDetailsPageData
  | JobIndexPageData
  | NewsDetailPageData
  | NewsIndexPageData;

// The state for pageData module
export interface PageDataState {
  page: PageData | null;
  error: boolean;
}
