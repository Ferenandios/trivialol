export interface TextProps {
  text: string;
}
export interface Person {
  avatar: string;
  name: string;
  about: string;
}
export interface ItemProps {
  item: Person;
}
export interface ILinks {
  link: string;
  social: string;
}
export interface LinkProps {
  link: ILinks;
}
export interface IPlan {
  title: string;
  text: string;
  isActive: boolean;
}
export interface PlanProps {
  item: IPlan;
  index: number;
}
