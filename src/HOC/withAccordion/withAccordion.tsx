import { FC, ReactElement, useState } from "react";
import "./withAccordion.scss";
import { Tadvantages, advantages } from "../../assets/_DATA.ts";

interface ComponentProps {
	idx: number;
	info: Tadvantages;
	handleOpen: (idx: number) => void;
}

const withAccordion = (Component: FC<ComponentProps>): (() => ReactElement) => {
	return () => {
		const [info, setInfo] = useState<Tadvantages[]>(advantages);

		function handleOpen(idx: number) {
			setInfo(
				info.map((val, i) => {
					i === idx ? (val.isOpen = !val.isOpen) : (val.isOpen = false);
					return val;
				}),
			);
		}

		return (
			<div className="withAccordion">
				{info?.map((val, i) => {
					return <Component key={i} idx={i} info={val} handleOpen={handleOpen} />;
				})}
			</div>
		);
	};
};

export default withAccordion;
