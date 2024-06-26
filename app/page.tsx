import { BoardCard } from "~/src/components/board/BoardCard";
import { prisma } from "~/src/db/prisma";

export default async function Home() {
  const boards = await prisma.board.findMany()
  
  return (
    <div>
      <ul>
        {boards.map( (board) => (
          <BoardCard key={board.id} board={board} />
        ))}
      </ul>
    </div>
  );
}
