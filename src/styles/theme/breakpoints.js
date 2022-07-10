// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const breakpointsInIntegers = [650, 991, 1300, 1600]

export const breakpointsInPixels = breakpointsInIntegers.map(
	dimension => `${dimension}px`
)

const breakpoints = breakpointsInPixels

breakpoints.xs = "350px"
breakpoints.sm = breakpointsInPixels[0]
breakpoints.md = breakpointsInPixels[1]
breakpoints.lg = breakpointsInPixels[2]
breakpoints.xl = breakpointsInPixels[3]

// You could be tempted to write
//
// const breakpoints = {
// 	...breakpointsInPixels,
// 	xs: "350px",
// 	sm: breakpointsInPixels[0],
// 	md: breakpointsInPixels[1],
// 	lg: breakpointsInPixels[2],
// 	xl: breakpointsInPixels[3],
// }
//
// but breakpoints needs to be an array for styled-system internals, so keep it that way!

export default breakpoints
