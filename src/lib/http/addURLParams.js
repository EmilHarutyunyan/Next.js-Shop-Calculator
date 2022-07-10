// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const parseParams = params =>
	params.map(param => `${param.name}=${param.value}`).join("&")

// TO-DO: refactor so that params are merged first in an object then parsed to strings
const addURLParams = ({ url, params = [] }) => {
	const renderedParams = params.filter(param => param.shouldRender)
	return renderedParams.length > 0 ? `${url}?${parseParams(renderedParams)}` : url
}

export default addURLParams
