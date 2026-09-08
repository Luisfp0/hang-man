import type { ArmProps } from "./types"

export const Arm = ({ customPosition }: ArmProps) => {
  return (
    <div style={{ position: "absolute", backgroundColor: "black", width: "70px", height: "10px", ...customPosition }}>
    </div>
  )
}