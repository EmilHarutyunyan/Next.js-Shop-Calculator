// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const onClientSide =
	!!process.browser &&
	typeof window !== "undefined" &&
	typeof window.document !== "undefined" &&
	typeof window.document.createElement !== "undefined"

export const processTypes = {
	CLIENT: "client",
	SERVER: "server",
}

export const processType = onClientSide ? processTypes.CLIENT : processTypes.SERVER
