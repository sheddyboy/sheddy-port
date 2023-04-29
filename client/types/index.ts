export interface ProjectResponse {
  data: ProjectData[];
  meta: Meta;
}

export interface ProjectData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  link: string;
  github: string;
  slug: string;
  thumbnail: Thumbnail;
  projectImage: Image;
  tags: Tags;
}

export interface Image {
  data: DAT;
}

export interface DAT {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum EXT {
  PNG = ".png",
}

export interface Formats {
  thumbnail: Large;
  small: Large;
  medium: Large;
  large: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  path: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export enum MIME {
  ImagePNG = "image/png",
}

export interface Tags {
  data: TagsDatum[];
}

export interface TagsDatum {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Thumbnail {
  data: DAT;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface TagsResponse {
  data: TagsData[];
  meta: Meta;
}

export interface TagsData {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
