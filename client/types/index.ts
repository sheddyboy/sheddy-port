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
  thumbnailUrl: string;
  projectImageUrl: string;
  tags: Tags;
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
