export type TabItem = {
  title: string;
  pathName: string;
};

export type ProjectType = {
  name: string;
  description: string;
  stack: string[];
  url: string;
};

export type TagType = {
  label: string;
  color: string;
};

export type Post ={
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  number: string;
  slug:string;
};
