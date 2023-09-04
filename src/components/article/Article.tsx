import { FC, ReactElement, ReactNode } from "react";
import "./Article.scss";
import { ArticleProps } from "./types.ts";
import {
	FaRegUserCircle,
	FaRegCheckCircle,
	FaMugHot,
	FaHandHoldingHeart,
	FaVideo,
	FaHeadset,
	FaRegHourglass,
	FaBriefcase,
	FaRegBuilding,
	FaChevronDown,
} from "react-icons/fa";
import withAccordion from "../../HOC/withAccordion/withAccordion.tsx";

const Article: FC<ArticleProps> = ({ idx, info, handleOpen }): ReactElement => {
	const { id, preTitle, title, description, isOpen } = info;

	function setIcon(): ReactNode {
		switch (id) {
			case "1":
				return <FaRegUserCircle />;
			case "2":
				return <FaRegCheckCircle />;
			case "3":
				return <FaMugHot />;
			case "4":
				return <FaHandHoldingHeart />;
			case "5":
				return <FaVideo />;
			case "6":
				return <FaHeadset />;
			case "7":
				return <FaRegHourglass />;
			case "8":
				return <FaBriefcase />;
			case "9":
				return <FaRegBuilding />;
			default:
				break;
		}
	}

	return (
		<article className={"article" + (isOpen ? "IsOpen" : "")} id={id}>
			<div className={"extendable" + (isOpen ? "IsOpen" : "")}>
				<div>
					{setIcon()}
					<h3>
						<strong>{preTitle}</strong> {title}
					</h3>
				</div>
				<button
					type="button"
					name="extendButton"
					className={"extendButton" + (isOpen ? "IsOpen" : "")}
					onClick={() => handleOpen(idx)}>
					<FaChevronDown />
				</button>
			</div>

			<p className={"description" + (isOpen ? "IsOpen" : "")}>{description}</p>
		</article>
	);
};

const AccordionArticle = withAccordion(Article);
export default AccordionArticle;
