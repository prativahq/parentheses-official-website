// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogDocumentDataSlicesSlice = BlogSlice;

/**
 * Content for blog documents
 */
interface BlogDocumentData {
  /**
   * Slice Zone field in *blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice> /**
   * Meta Description field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

type BlogPostDocumentDataSlicesSlice = BlogPostSlice;

/**
 * Content for blog_post documents
 */
interface BlogPostDocumentData {
  /**
   * Slice Zone field in *blog_post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice> /**
   * Meta Description field in *blog_post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *blog_post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *blog_post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * blog_post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

type SubServicesDocumentDataSlicesSlice =
  | FaqSlice
  | StepsSlice
  | FeatureSectionSlice
  | HeroSectionSlice
  | CardSlice;

/**
 * Content for sub_services documents
 */
interface SubServicesDocumentData {
  /**
   * Slice Zone field in *sub_services*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_services.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SubServicesDocumentDataSlicesSlice> /**
   * Meta Description field in *sub_services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: sub_services.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *sub_services*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_services.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *sub_services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: sub_services.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * sub_services document from Prismic
 *
 * - **API ID**: `sub_services`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SubServicesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SubServicesDocumentData>,
    "sub_services",
    Lang
  >;

type ToolsDocumentDataSlicesSlice = ToolsDescriptionSlice;

/**
 * Content for tools documents
 */
interface ToolsDocumentData {
  /**
   * Slice Zone field in *tools*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: tools.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ToolsDocumentDataSlicesSlice> /**
   * Meta Description field in *tools*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: tools.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *tools*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tools.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *tools*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: tools.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * tools document from Prismic
 *
 * - **API ID**: `tools`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ToolsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ToolsDocumentData>, "tools", Lang>;

export type AllDocumentTypes =
  | BlogDocument
  | BlogPostDocument
  | SubServicesDocument
  | ToolsDocument;

/**
 * Primary content in *Blog → Default → Primary*
 */
export interface BlogSliceDefaultPrimary {
  /**
   * Title field in *Blog → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *Blog → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Thumbnail field in *Blog → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.default.primary.thumbnail
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  thumbnail: prismic.ImageField<never>;
}

/**
 * Default variation for Blog Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Blog*
 */
type BlogSliceVariation = BlogSliceDefault;

/**
 * Blog Shared Slice
 *
 * - **API ID**: `blog`
 * - **Description**: Blog
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogSlice = prismic.SharedSlice<"blog", BlogSliceVariation>;

/**
 * Primary content in *BlogPost → Default → Primary*
 */
export interface BlogPostSliceDefaultPrimary {
  /**
   * Title field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Type field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.type
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  type: prismic.KeyTextField;

  /**
   * Thumbnail field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.thumbnail
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  thumbnail: prismic.ImageField<never>;

  /**
   * Objectives_content field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.objectives_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  objectives_content: prismic.KeyTextField;

  /**
   * Solutions_content field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.solutions_content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  solutions_content: prismic.RichTextField;

  /**
   * Results_content field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.results_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  results_content: prismic.KeyTextField;

  /**
   * About_content field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.about_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  about_content: prismic.KeyTextField;

  /**
   * Challenges field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.challenges
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  challenges: prismic.RichTextField;

  /**
   * Product used field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.product_used
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  product_used: prismic.RichTextField;

  /**
   * pop color field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.pop_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  pop_color: prismic.ColorField;

  /**
   * Accent color field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.accent_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  accent_color: prismic.ColorField;

  /**
   * isFeatured field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: blog_post.default.primary.isfeatured
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  isfeatured: prismic.BooleanField;

  /**
   * Publish date field in *BlogPost → Default → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.default.primary.publish_date
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  publish_date: prismic.DateField;
}

/**
 * Default variation for BlogPost Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogPostSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogPostSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BlogPost*
 */
type BlogPostSliceVariation = BlogPostSliceDefault;

/**
 * BlogPost Shared Slice
 *
 * - **API ID**: `blog_post`
 * - **Description**: BlogPost
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogPostSlice = prismic.SharedSlice<
  "blog_post",
  BlogPostSliceVariation
>;

/**
 * Primary content in *Card → Default → Primary*
 */
export interface CardSliceDefaultPrimary {
  /**
   * Title field in *Card → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Card → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * href field in *Card → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Add the path(add "/" in the beginning) of the route of the service from the google sheet
   * - **API ID Path**: card.default.primary.href
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  href: prismic.KeyTextField;
}

/**
 * Default variation for Card Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CardSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Card*
 */
type CardSliceVariation = CardSliceDefault;

/**
 * Card Shared Slice
 *
 * - **API ID**: `card`
 * - **Description**: Card
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSlice = prismic.SharedSlice<"card", CardSliceVariation>;

/**
 * Item in *Faq → Default → Primary → Faq*
 */
export interface FaqSliceDefaultPrimaryFaqItem {
  /**
   * Question field in *Faq → Default → Primary → Faq*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.faq[].question
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  question: prismic.KeyTextField;

  /**
   * Answer field in *Faq → Default → Primary → Faq*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.faq[].answer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  answer: prismic.KeyTextField;
}

/**
 * Primary content in *Faq → Default → Primary*
 */
export interface FaqSliceDefaultPrimary {
  /**
   * Faq field in *Faq → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.faq[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  faq: prismic.GroupField<Simplify<FaqSliceDefaultPrimaryFaqItem>>;
}

/**
 * Default variation for Faq Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FaqSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Faq*
 */
type FaqSliceVariation = FaqSliceDefault;

/**
 * Faq Shared Slice
 *
 * - **API ID**: `faq`
 * - **Description**: Faq
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSlice = prismic.SharedSlice<"faq", FaqSliceVariation>;

/**
 * Item in *FeatureSection → Default → Primary → Feature Card*
 */
export interface FeatureSectionSliceDefaultPrimaryFeatureCardItem {
  /**
   * Title field in *FeatureSection → Default → Primary → Feature Card*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_section.default.primary.feature_card[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Feature icon field in *FeatureSection → Default → Primary → Feature Card*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_section.default.primary.feature_card[].feature_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  feature_icon: prismic.ImageField<never>;
}

/**
 * Primary content in *FeatureSection → Default → Primary*
 */
export interface FeatureSectionSliceDefaultPrimary {
  /**
   * Heading field in *FeatureSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_section.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Color word no field in *FeatureSection → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_section.default.primary.color_word_no
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  color_word_no: prismic.NumberField;

  /**
   * Sub Heading field in *FeatureSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_section.default.primary.sub_heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sub_heading: prismic.KeyTextField;

  /**
   * Feature Card field in *FeatureSection → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_section.default.primary.feature_card[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  feature_card: prismic.GroupField<
    Simplify<FeatureSectionSliceDefaultPrimaryFeatureCardItem>
  >;
}

/**
 * Default variation for FeatureSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeatureSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FeatureSection*
 */
type FeatureSectionSliceVariation = FeatureSectionSliceDefault;

/**
 * FeatureSection Shared Slice
 *
 * - **API ID**: `feature_section`
 * - **Description**: FeatureSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSectionSlice = prismic.SharedSlice<
  "feature_section",
  FeatureSectionSliceVariation
>;

/**
 * Primary content in *HeroSection → Default → Primary*
 */
export interface HeroSectionSliceDefaultPrimary {
  /**
   * Heading field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Sub Heading field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.sub_heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sub_heading: prismic.KeyTextField;

  /**
   * Big Image field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.big_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  big_image: prismic.ImageField<never>;

  /**
   * Small Image field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.small_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  small_image: prismic.ImageField<never>;
}

/**
 * Default variation for HeroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroSection*
 */
type HeroSectionSliceVariation = HeroSectionSliceDefault;

/**
 * HeroSection Shared Slice
 *
 * - **API ID**: `hero_section`
 * - **Description**: HeroSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSlice = prismic.SharedSlice<
  "hero_section",
  HeroSectionSliceVariation
>;

/**
 * Item in *Steps → Default → Primary → Steps*
 */
export interface StepsSliceDefaultPrimaryStepsItem {
  /**
   * ids field in *Steps → Default → Primary → Steps*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.default.primary.steps[].ids
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  ids: prismic.NumberField;

  /**
   * Title field in *Steps → Default → Primary → Steps*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.default.primary.steps[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Sub Title field in *Steps → Default → Primary → Steps*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.default.primary.steps[].sub_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sub_title: prismic.KeyTextField;

  /**
   * Step Image field in *Steps → Default → Primary → Steps*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.default.primary.steps[].step_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  step_image: prismic.ImageField<never>;
}

/**
 * Primary content in *Steps → Default → Primary*
 */
export interface StepsSliceDefaultPrimary {
  /**
   * Steps field in *Steps → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.default.primary.steps[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  steps: prismic.GroupField<Simplify<StepsSliceDefaultPrimaryStepsItem>>;
}

/**
 * Default variation for Steps Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StepsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StepsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Steps*
 */
type StepsSliceVariation = StepsSliceDefault;

/**
 * Steps Shared Slice
 *
 * - **API ID**: `steps`
 * - **Description**: Steps
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StepsSlice = prismic.SharedSlice<"steps", StepsSliceVariation>;

/**
 * Primary content in *SubService → Default → Primary*
 */
export interface SubServiceSliceDefaultPrimary {
  /**
   * Card Title field in *SubService → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_service.default.primary.card_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  card_title: prismic.KeyTextField;

  /**
   * Card Description field in *SubService → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_service.default.primary.card_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  card_description: prismic.KeyTextField;

  /**
   * Hero Title field in *SubService → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_service.default.primary.hero_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_title: prismic.KeyTextField;

  /**
   * Hero Subtitle field in *SubService → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_service.default.primary.hero_subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_subtitle: prismic.KeyTextField;

  /**
   * Hero Big Image field in *SubService → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_service.default.primary.hero_big_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_big_image: prismic.ImageField<never>;

  /**
   * Hero small Image field in *SubService → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_service.default.primary.hero_small_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_small_image: prismic.ImageField<never>;
}

/**
 * Default variation for SubService Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubServiceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SubServiceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SubService*
 */
type SubServiceSliceVariation = SubServiceSliceDefault;

/**
 * SubService Shared Slice
 *
 * - **API ID**: `sub_service`
 * - **Description**: SubService
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubServiceSlice = prismic.SharedSlice<
  "sub_service",
  SubServiceSliceVariation
>;

/**
 * Item in *ToolsDescription → Default → Primary → Usecase*
 */
export interface ToolsDescriptionSliceDefaultPrimaryUsecaseItem {
  /**
   * Case field in *ToolsDescription → Default → Primary → Usecase*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tools_description.default.primary.usecase[].case
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  case: prismic.KeyTextField;

  /**
   * Description field in *ToolsDescription → Default → Primary → Usecase*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tools_description.default.primary.usecase[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Item in *ToolsDescription → Default → Primary → Tags*
 */
export interface ToolsDescriptionSliceDefaultPrimaryTagsItem {
  /**
   * tag field in *ToolsDescription → Default → Primary → Tags*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tools_description.default.primary.tags[].tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag: prismic.KeyTextField;
}

/**
 * Primary content in *ToolsDescription → Default → Primary*
 */
export interface ToolsDescriptionSliceDefaultPrimary {
  /**
   * Name field in *ToolsDescription → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tools_description.default.primary.name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Website field in *ToolsDescription → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: tools_description.default.primary.website
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  website: prismic.LinkField;

  /**
   * Description field in *ToolsDescription → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tools_description.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Usecase field in *ToolsDescription → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: tools_description.default.primary.usecase[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  usecase: prismic.GroupField<
    Simplify<ToolsDescriptionSliceDefaultPrimaryUsecaseItem>
  >;

  /**
   * Tags field in *ToolsDescription → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: tools_description.default.primary.tags[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tags: prismic.GroupField<
    Simplify<ToolsDescriptionSliceDefaultPrimaryTagsItem>
  >;

  /**
   * Icon field in *ToolsDescription → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tools_description.default.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;
}

/**
 * Default variation for ToolsDescription Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ToolsDescriptionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ToolsDescriptionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ToolsDescription*
 */
type ToolsDescriptionSliceVariation = ToolsDescriptionSliceDefault;

/**
 * ToolsDescription Shared Slice
 *
 * - **API ID**: `tools_description`
 * - **Description**: ToolsDescription
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ToolsDescriptionSlice = prismic.SharedSlice<
  "tools_description",
  ToolsDescriptionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataSlicesSlice,
      SubServicesDocument,
      SubServicesDocumentData,
      SubServicesDocumentDataSlicesSlice,
      ToolsDocument,
      ToolsDocumentData,
      ToolsDocumentDataSlicesSlice,
      AllDocumentTypes,
      BlogSlice,
      BlogSliceDefaultPrimary,
      BlogSliceVariation,
      BlogSliceDefault,
      BlogPostSlice,
      BlogPostSliceDefaultPrimary,
      BlogPostSliceVariation,
      BlogPostSliceDefault,
      CardSlice,
      CardSliceDefaultPrimary,
      CardSliceVariation,
      CardSliceDefault,
      FaqSlice,
      FaqSliceDefaultPrimaryFaqItem,
      FaqSliceDefaultPrimary,
      FaqSliceVariation,
      FaqSliceDefault,
      FeatureSectionSlice,
      FeatureSectionSliceDefaultPrimaryFeatureCardItem,
      FeatureSectionSliceDefaultPrimary,
      FeatureSectionSliceVariation,
      FeatureSectionSliceDefault,
      HeroSectionSlice,
      HeroSectionSliceDefaultPrimary,
      HeroSectionSliceVariation,
      HeroSectionSliceDefault,
      StepsSlice,
      StepsSliceDefaultPrimaryStepsItem,
      StepsSliceDefaultPrimary,
      StepsSliceVariation,
      StepsSliceDefault,
      SubServiceSlice,
      SubServiceSliceDefaultPrimary,
      SubServiceSliceVariation,
      SubServiceSliceDefault,
      ToolsDescriptionSlice,
      ToolsDescriptionSliceDefaultPrimaryUsecaseItem,
      ToolsDescriptionSliceDefaultPrimaryTagsItem,
      ToolsDescriptionSliceDefaultPrimary,
      ToolsDescriptionSliceVariation,
      ToolsDescriptionSliceDefault,
    };
  }
}
