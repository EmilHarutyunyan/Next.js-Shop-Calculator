import React,{useEffect,useState} from 'react'
import axios from "axios"
import { API_URL } from '@/config';
import { useSelector } from "react-redux"
import { Info } from './MaterialInfo.styles';

function MaterialInfo() {
	const calc = useSelector(({ calculator }) => calculator)
	
	const [materials, setMaterials] = useState(calc.materialDistribution)

	useEffect(() => {
		async function fetchData() {
			const data = await axios.get(`${API_URL}material`)
			const materialData = data.data
			const tempData = []
			
			materials.map((item) => {
				const thatItem = item
				materialData.map(elem => {
					const { _id, name } = elem
					if (thatItem._id === _id) {
						tempData.push({ name, ...thatItem })
						return
					}
				})
			})

			setMaterials(tempData)
		}
		fetchData()
	}, [])
  return (
	<>
		{materials && materials.map(item => {
			const { name, propation } = item
			const tokos = propation * 100
			
			return (
				<Info>
					<span>{tokos}%</span>
					<span>{name}</span>
				</Info>
			)
		})}
	</>
  )
}

export default MaterialInfo