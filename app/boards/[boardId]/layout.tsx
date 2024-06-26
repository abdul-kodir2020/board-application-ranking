import { Children, PropsWithChildren } from "react"

export default function LayoutBoard({
    params,
    children,
  }: PropsWithChildren<{
    params: { boardId: string }
  }>){
    return(
        <div>
            Boards ({params.boardId})
            {children}
        </div>
    )
}