-- CreateTable
CREATE TABLE "public"."Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Game" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "summary" TEXT,
    "storyline" TEXT,
    "firstReleaseDate" TIMESTAMP(3),
    "coverUrl" TEXT,
    "rating" DOUBLE PRECISION,
    "aggregatedRating" DOUBLE PRECISION,
    "totalRating" DOUBLE PRECISION,
    "totalRatingCount" INTEGER,
    "url" TEXT,
    "igdbId" INTEGER NOT NULL,
    "originalPlatform" TEXT,
    "ageRatingId" INTEGER,
    "developerId" INTEGER,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GameRating" (
    "id" INTEGER NOT NULL,
    "rating" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "GameRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Platform" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT,
    "generation" INTEGER,
    "slug" TEXT NOT NULL,
    "platformLogo" TEXT,
    "releaseOrder" INTEGER,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Developers" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "logoUrl" TEXT,
    "country" TEXT,

    CONSTRAINT "Developers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "slug" TEXT,
    "igdbId" INTEGER NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Cover" (
    "id" SERIAL NOT NULL,
    "imageId" TEXT,
    "url" TEXT,
    "igdbId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,
    "height" INTEGER,
    "width" INTEGER,

    CONSTRAINT "Cover_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Screenshot" (
    "id" SERIAL NOT NULL,
    "imageId" TEXT,
    "url" TEXT,
    "gameId" INTEGER NOT NULL,
    "height" INTEGER,
    "width" INTEGER,
    "igdbId" INTEGER NOT NULL,

    CONSTRAINT "Screenshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_GameGenres" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_GameGenres_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_GamePlatforms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_GamePlatforms_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_UserSavedGames" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserSavedGames_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "public"."Session"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "public"."UserProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Game_slug_key" ON "public"."Game"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Game_igdbId_key" ON "public"."Game"("igdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_name_key" ON "public"."Platform"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_releaseOrder_key" ON "public"."Platform"("releaseOrder");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_igdbId_key" ON "public"."Genre"("igdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Cover_igdbId_key" ON "public"."Cover"("igdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Screenshot_igdbId_key" ON "public"."Screenshot"("igdbId");

-- CreateIndex
CREATE INDEX "_GameGenres_B_index" ON "public"."_GameGenres"("B");

-- CreateIndex
CREATE INDEX "_GamePlatforms_B_index" ON "public"."_GamePlatforms"("B");

-- CreateIndex
CREATE INDEX "_UserSavedGames_B_index" ON "public"."_UserSavedGames"("B");

-- AddForeignKey
ALTER TABLE "public"."UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Game" ADD CONSTRAINT "Game_ageRatingId_fkey" FOREIGN KEY ("ageRatingId") REFERENCES "public"."GameRating"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Game" ADD CONSTRAINT "Game_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "public"."Developers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Cover" ADD CONSTRAINT "Cover_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Screenshot" ADD CONSTRAINT "Screenshot_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_GameGenres" ADD CONSTRAINT "_GameGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_GameGenres" ADD CONSTRAINT "_GameGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_GamePlatforms" ADD CONSTRAINT "_GamePlatforms_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_GamePlatforms" ADD CONSTRAINT "_GamePlatforms_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserSavedGames" ADD CONSTRAINT "_UserSavedGames_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserSavedGames" ADD CONSTRAINT "_UserSavedGames_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
