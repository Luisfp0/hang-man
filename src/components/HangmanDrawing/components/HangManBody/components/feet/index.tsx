import type { FeetProps } from "./types"

export const Feet = ({customPosition}: FeetProps) => {
  return (
    <div style={{ position: "absolute", backgroundColor: "black", width: "70px", height: "10px", ...customPosition }}/>
  )
}