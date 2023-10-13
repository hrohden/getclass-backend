-- CreateTable
CREATE TABLE "Moment" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "headline" TEXT,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "pictureUrl" TEXT,

    CONSTRAINT "Moment_pkey" PRIMARY KEY ("id")
);
