import useHideShow from "@/hooks/useHideShow"
import React, { useEffect, useState } from "react"
// Styles
import {
	ImgWrap,
	SelectBody,
	SelectHeader,
	SelectTitle,
	SelectWrap,
	SelectItem,
	SelectCustom,
} from "./SelectMaterial.styles"

function SelectMaterial({ materialData, handleText, materialThis }) {
	const [selectValue, setSelectValue] = useState(materialThis)
	// const [mainValue, setMainValue] = useState({
	// 	_id: materialData[0]._id,
	// 	name: materialData[0].name,
	// })
	const [active, setActive] = useState(false)
	const [headerRef, childrenRef, setShowLinks, setCustomHight] = useHideShow()

	useEffect(() => {
		setCustomHight(400)
	}, [])
	return (
		<SelectWrap>
			<select
				className="form-select"
				defaultValue="Acetate"
				style={{ display: "none" }}
			>
				{selectValue ? (
					<option value={selectValue.name}>{selectValue.name}</option>
				) : (
					null
					
				)}
			</select>
			<SelectCustom
				className={`select-custom ${active ? "is-active" : ""}`}
				onClick={() => setActive(!active)}
			>
				<SelectHeader onClick={() => setShowLinks(show => !show)}>
					<ImgWrap>
						{selectValue ? (
							<img
								src={`/static/svg/material/fabric.svg`}
								alt={selectValue.name}
							/>
						) : (
							null
						)}
					</ImgWrap>
					<SelectTitle>
						{selectValue ? <>{selectValue.name}</> : <>{mainValue.name}</>}
					</SelectTitle>
				</SelectHeader>
				<SelectBody
					ref={headerRef}
					style={{ height: "400px !important", overflow: "auto" }}
				>
					<div ref={childrenRef}>
						{materialData &&
							materialData.map(item => {
								const { _id, name } = item
								const oldName = selectValue?.name || ''

								
								{/* if (name === mainValue.name) return */}
								return (
									<SelectItem
										key={_id}
										onClick={() => {
											setShowLinks(show => !show)
											setSelectValue({ _id, name })
											handleText(oldName, { name, _id })
											// setMainValue({ _id, name })
										}}
									>
										<ImgWrap>
											<img
												src={`/static/svg/material/fabric.svg`}
												alt={name}
											/>
										</ImgWrap>
										<p>{name}</p>
									</SelectItem>
								)
							})}
					</div>
				</SelectBody>
			</SelectCustom>
		</SelectWrap>
	)
}

export default SelectMaterial
