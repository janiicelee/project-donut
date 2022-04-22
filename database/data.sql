insert into "users" ("userId", "username", "email", "hashedPassword", "joinedAt", "latitude", "longitude", "location")
values (1, 'demouser', 'demo@demo.com', 'demouser', now(), null, null, null)
returning *;


insert into "items" ("title", "fileUrl", "userId", "content", "uploadedAt")
values ('Kirby Plush', '/images/kirby-plush.jpeg', 1, 'A cute kirby plush that will make you feel happy', now()),
       ('Vintage Sunglasses', 'images/sunglasses.webp', 1, 'A vintage sunglass that my ex-boyfriend left in my house', now()),
       ('Meow Slippers', 'images/slippers.jpg', 1, 'Cute slippers that will make your feet warm and look cute', now()),
       ('Orange Water Bottle', 'images/waterbottle.webp', 1, 'I have too many water bottles so I wanted to donate one of mine', now())
returning *;
