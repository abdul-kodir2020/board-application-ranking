export default function BoardPage({
    params,
    searchParams,
  }: {
    params: { boardId: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }){
    return(
        <>
            <div>BoardPage</div>
            <p>{params.boardId}</p>
            {JSON.stringify(searchParams)}
        </>
    )
}