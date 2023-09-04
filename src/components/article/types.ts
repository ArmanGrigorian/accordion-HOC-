import { Tadvantages } from "../../assets/_DATA.ts";

export type ArticleProps = {
	idx: number;
	info: Tadvantages;
	handleOpen: (idx: number) => void;
};
