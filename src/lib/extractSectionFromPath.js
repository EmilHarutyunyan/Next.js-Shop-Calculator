// Third-party imports
import { get } from "lodash"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const extractSectionFromPath = path => get((path || "").split("/"), 1, "")
