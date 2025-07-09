export type GuideLink = {
  href: string;
  text: string;
  selected?: boolean;
  links?: GuideLink[];
};

export type Guide = {
  title: string;
  description: string;
  links: GuideLink[];
};
