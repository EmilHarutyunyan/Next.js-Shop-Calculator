import React from "react"
import {
	ListItem,
	Flag,
	CountryName,
	StyledButton,
	StyledDiv,
} from "./CountryItem.styles"
// import DeleteContainer from "../Delete/DeleteContainer";

const CountryItem = ({
	country: { name, code, flag },
	continent,
	handleClick,
	listType,
}) => {
	const Tag = listType === "searchResult" ? StyledButton : StyledDiv

	function TagContent() {
		return (
			<>
				<Flag src={flag} alt={`flag of ${name}`} />
				<CountryName>{name}</CountryName>
				{/* {listType === "tabel" ? <DeleteContainer action="delete" /> : null} */}
			</>
		)
	}

	return (
		<ListItem listType={listType}>
			<Tag
				data-id={code}
				data-name={name}
				data-continent={continent}
				onClick={handleClick}
			>
				<TagContent />
			</Tag>
		</ListItem>
	)
}

export default React.memo(CountryItem)
