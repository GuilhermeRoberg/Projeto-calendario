-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "dateTime" DATETIME NOT NULL,
    "lastModified" DATETIME NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);
