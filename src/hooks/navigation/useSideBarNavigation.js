// Third-party imports
import { useCallback } from "react"
import { useRouter } from "next/router"

// Global imports
import { siteSections } from "@/constants"

// Local imports
import useSiteSection from "./useSiteSection"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function useSideBarNavigation
 * @category Hooks
 * @subcategory Navigation
 * @description Extracts the current section from the pathname in the URL via the nextJS router.
 */
const useSideBarNavigation = () => {
	const router = useRouter()
	const { siteSection } = useSiteSection()
	const isSectionActive = useCallback(section => section === siteSection, [siteSection])

	const moveSection = useCallback(
		newSiteSection => {
			if (
				Object.keys(siteSections.main).includes(newSiteSection) &&
				siteSection !== newSiteSection
			) {
				router.push({ pathname: `/${newSiteSection}` }, `/${newSiteSection}`)
			}
		},
		[siteSection]
	)

	return { moveSection, isSectionActive }
}

export default useSideBarNavigation
