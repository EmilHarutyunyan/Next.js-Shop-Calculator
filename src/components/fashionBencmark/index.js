import React from 'react'
import { FashionWrap } from './FashionBenchmark.styles';

function FashionBenchmark() {
	
  return (
		<FashionWrap>
			<div>
				<div className="item-product">
					<div className="item">
						<img src={"/static/svg/product/cloths_shirt.svg"} alt="shirt" />
						<p>Your item</p>
					</div>
					<div className="score">
						<p>Score</p>
						<p>28</p>
					</div>
				</div>
			</div>
			<div className='line'>
				<div className="line-1">
					<div className="line-1-text">
						<img src={"/static/svg/Line-Orange.svg"} alt="" />
						<span>Fast Fashion Benchmark</span>
					</div>
				</div>
				<div className="line-2">
					<div className="line-2-text">
						<img src={"/static/svg/Line-Green.svg"} alt="" />
						<span>Slow fashion Benchmark</span>
					</div>
				</div>
			</div>
		</FashionWrap>
  )
}

export default FashionBenchmark