-- CreateTable
CREATE TABLE "public"."_UserCompletedGames" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserCompletedGames_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserCompletedGames_B_index" ON "public"."_UserCompletedGames"("B");

-- AddForeignKey
ALTER TABLE "public"."_UserCompletedGames" ADD CONSTRAINT "_UserCompletedGames_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserCompletedGames" ADD CONSTRAINT "_UserCompletedGames_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
