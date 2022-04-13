set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";


 CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"email" TEXT NOT NULL UNIQUE,
	"hashedPassword" TEXT NOT NULL,
	"phoneNumber" TEXT NOT NULL UNIQUE,
	"joinedAt" timestamp with time zone NOT NULL,
	"location" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."items" (
	"itemId" serial NOT NULL,
	"title" TEXT NOT NULL,
	"fileUrl" TEXT NOT NULL,
	"userId" integer NOT NULL,
	"content" TEXT NOT NULL,
	"uploadedAt" timestamp with time zone NOT NULL,
	CONSTRAINT "items_pk" PRIMARY KEY ("itemId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."reviews" (
	"reviewId" serial NOT NULL,
	"content" TEXT NOT NULL,
	"userId" integer NOT NULL,
	"receivedItemId" integer NOT NULL,
	CONSTRAINT "reviews_pk" PRIMARY KEY ("reviewId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."receivedItems" (
	"receivedItemId" serial NOT NULL,
	"itemId" integer NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "receivedItems_pk" PRIMARY KEY ("receivedItemId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "items" ADD CONSTRAINT "items_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk1" FOREIGN KEY ("receivedItemId") REFERENCES "receivedItems"("receivedItemId");

ALTER TABLE "receivedItems" ADD CONSTRAINT "receivedItems_fk0" FOREIGN KEY ("itemId") REFERENCES "items"("itemId");
ALTER TABLE "receivedItems" ADD CONSTRAINT "receivedItems_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");
