// Third-party imports
import { useRouter } from "next/router"

// Global imports
import { extractSectionFromPath } from "@/lib"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function useSiteSection
 * @category Hooks
 * @subcategory Navigation
 * @description Extracts the current section from the pathname in the URL via the nextJS router.
 */
const useSiteSection = () => {
	const { pathname } = useRouter()

	return { siteSection: extractSectionFromPath(pathname) || "" }
}

export default useSiteSection
