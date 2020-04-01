export interface ContactForm {
  readonly id?: number;
  name: string;
  subject: string;
  email: string;
  phone?: string | null;
  message: string;
}

export interface Subcompany {
  readonly id?: number;
  title: string;
  readonly image?: any;
  jobs: Array<any>;
}

export interface SocialMediaSettings {
  readonly id?: number;
  facebook_url?: string | null;
  twitter_url?: string | null;
  linkedin_url?: string | null;
  readonly site?: number;
}

export interface GlobalSetting {
  readonly id?: number;
  address: any;
  google_map_key?: string | null;
  map_style?: any;
  title?: string | null;
  text?: string | null;
  copyright_text?: string | null;
  readonly site?: number;
}

export interface PageParentMeta {
  readonly type: string;
  readonly detail_url: string;
  readonly html_url: string;
}

export interface PageParent {
  readonly id: number;
  readonly meta: PageParentMeta;
  readonly title: string;
}

export interface Meta {
  readonly type: string;
  readonly detail_url: string;
  readonly html_url: string;
  readonly slug: string;
  readonly first_published_at: string;
  readonly show_in_menus?: boolean;
  readonly seo_title?: string;
  readonly search_description?: string;
  readonly parent?: Meta | null;
}

export interface YoutubeVideoBlock {
  readonly title?: string;
  readonly url: string | null;
}

type PageOrLinkBlock = number | string;

export interface TitleTextCTABlock {
  readonly title: string | null;
  readonly text: string | null;
  readonly call_to_action?: PageOrLinkBlock;
  readonly call_to_action_label?: string;
}

export interface TitleTextOneSideImage {
  readonly title: string | null;
  readonly text: string | null;
  readonly image: number | null;
}

export interface SingleImage {
  readonly image: number | null;
  readonly style?: string;
}

export interface TitleTextColumnChild {
  readonly title: string | null;
  readonly text: string | null;
}

type Contents = SingleImage | TitleTextColumnChild;

export interface TitleSubtitleStreamBlock {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly contents: Contents | null;
}

export interface TitleSubtitleTextOverlayImage {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly text: string | null;
  readonly image: number | null;
  readonly style?: string;
}

export interface TitleSubtitleNewslistBlock {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly contents?: Array<number>;
}

export interface HomePageData {
  readonly id: number;
  readonly title: string;
  readonly meta: Meta;
  readonly header?: Array<TitleTextCTABlock | YoutubeVideoBlock> | null;
  readonly body?: Array<
    | SingleImage
    | TitleSubtitleNewslistBlock
    | TitleSubtitleStreamBlock
    | TitleSubtitleTextOverlayImage
    | TitleTextOneSideImage
  > | null;
}

export interface ImageRenditionField {
  readonly height: number;
  readonly width: number;
  readonly url: string;
}

export interface TitleTextImage {
  readonly title: string | null;
  readonly text: string | null;
  readonly image: number | null;
  readonly style?: string;
}

export interface SlideBlockChild {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly text: string | null;
  readonly date: string | null;
  readonly image: number | null;
}

export interface MemberListChild {
  readonly name: string | null;
  readonly designation: string | null;
  readonly short_description?: string;
  readonly description: string | null;
  readonly avatar: number | null;
  readonly call_to_action_label?: string;
}

export interface ManagementBlock {
  readonly title: string | null;
  readonly member_list?: Array<MemberListChild>;
}

type Content = string;

export interface TabBlock {
  readonly label: string | null;
  readonly short_description: string | null;
  readonly tab_image: number | null;
  readonly style?: string;
  readonly content: Content | null;
}

type Tab = GeneralBaseTabBlock;

export interface AboutTabBlock {
  readonly tab: Tab | null;
}

export interface ReportsChild {
  readonly image: number | null;
  readonly file?: number;
}

export interface ReportBaseTabBlock {
  readonly label: string | null;
  readonly content: Content | null;
}

export interface ReportTabBlock {
  readonly tab: Tab | null;
}

export interface GeneralBaseTabBlock {
  readonly label: string | null;
  readonly content: Content | null;
}

export interface GeneralTabBlock {
  readonly tab: Tab | null;
}

export interface BrandLogoList {
  readonly brands?: Array<any>;
}

export interface TitleSubtitleRichtextCTA {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly text: string | null;
  readonly image: number | null;
  readonly align?: string;
  readonly call_to_action?: PageOrLinkBlock;
  readonly call_to_action_label?: string;
}

export interface TitleTextBannerImage {
  readonly title: string | null;
  readonly text: string | null;
  readonly image: number | null;
}

export interface RichTextImageBlock {
  readonly image: number | null;
  readonly align?: string;
  readonly text: string | null;
}

export interface BasicPageData {
  readonly id: number;
  readonly title: string;
  readonly meta: Meta;
  readonly text?: any | null;
  readonly banner_image?: ImageRenditionField | null;
  readonly banner_image_tab?: ImageRenditionField | null;
  readonly banner_image_mobile?: ImageRenditionField | null;
  readonly body?: Array<
    | AboutTabBlock
    | BrandLogoList
    | GeneralTabBlock
    | ReportTabBlock
    | RichTextImageBlock
    | SingleImage
    | TitleSubtitleRichtextCTA
    | TitleTextBannerImage
  > | null;
}

export interface NewslistBlock {
  readonly contents?: Array<number>;
}

export interface NewsIndexPageData {
  readonly id: number;
  readonly title: string;
  readonly meta: Meta;
  readonly text?: any | null;
  readonly banner_image?: ImageRenditionField | null;
  readonly banner_image_tab?: ImageRenditionField | null;
  readonly banner_image_mobile?: ImageRenditionField | null;
  readonly body?: Array<NewslistBlock> | null;
}

export interface NewsDetailPageData {
  readonly id: number;
  readonly title: string;
  readonly meta: Meta;
  readonly short_description?: any | null;
  readonly banner_image?: ImageRenditionField | null;
  readonly banner_image_tab?: ImageRenditionField | null;
  readonly banner_image_mobile?: ImageRenditionField | null;
  readonly created_at?: any | null;
}

export interface ContactPageData {
  readonly id: number;
  readonly title: string;
  readonly meta: Meta;
  readonly text?: any | null;
  readonly banner_image?: ImageRenditionField | null;
  readonly banner_image_tab?: ImageRenditionField | null;
  readonly banner_image_mobile?: ImageRenditionField | null;
  readonly body?: Array<string> | null;
}

export interface RedirectionPageData {
  readonly id: number;
  readonly title: string;
  readonly meta: Meta;
  readonly redirection_page?: number | null;
  readonly redirection_url?: any | null;
  readonly anchor?: any | null;
}

export interface TitleTextBlock {
  readonly title: string | null;
  readonly text_align?: string;
  readonly text: string | null;
}

export interface JobCategoryListBlock {
  readonly categories?: Array<number>;
}

export interface MultipleRowImage {
  readonly images?: Array<any>;
}

export interface JobIndexPageData {
  readonly id: number;
  readonly title: string;
  readonly meta: Meta;
  readonly text?: any | null;
  readonly banner_image?: ImageRenditionField | null;
  readonly banner_image_tab?: ImageRenditionField | null;
  readonly banner_image_mobile?: ImageRenditionField | null;
  readonly body?: Array<
    JobCategoryListBlock | MultipleRowImage | TitleTextBlock | string
  > | null;
}

export interface JobListBlock {
  readonly jobs?: Array<number>;
}

export interface JobCategory {
  readonly id: number;
  readonly title: string;
  readonly meta: Meta;
  readonly body?: Array<JobListBlock> | null;
}

export interface CTABlock {
  readonly call_to_action?: PageOrLinkBlock;
  readonly call_to_action_label?: string;
}

export interface JobDetailsPageData {
  readonly id: number;
  readonly title: string;
  readonly meta: Meta;
  readonly number_of_vacancy?: any | null;
  readonly featured?: any | null;
  readonly location?: any | null;
  readonly description?: any | null;
  readonly body?: Array<CTABlock> | null;
}
