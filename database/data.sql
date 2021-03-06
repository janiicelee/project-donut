insert into "users" ("userId", "username", "email", "hashedPassword", "joinedAt", "latitude", "longitude", "location")
values (1, 'DemoUser', 'demo@demo.com', 'demouser', now(), 33.6545377, -117.6787014, 'Lake Forest, CA 92630, USA')
returning *;


insert into "items" ("title", "fileUrl", "userId", "content", "uploadedAt")
values ('Kirby Plush', '/images/kirby-plush.jpeg', 1, 'A cute kirby plush that will make you feel happy', now()),
       ('Vintage Sunglasses', 'images/sunglasses.webp', 1, 'A vintage sunglass that my ex-boyfriend left in my house', now()),
       ('Meow Slippers', 'images/slippers.jpg', 1, 'Cute slippers that will make your feet warm and look cute', now()),
       ('Orange Water Bottle', 'images/waterbottle.webp', 1, 'I have too many water bottles so I wanted to donate one of mine', now()),
       ('Pink Blanket', 'images/pink-blanket.webp', 1, 'This is a soft, fluffy pink blanket that I used for 2 years.', now()),
       ('Kirby T-shirt', 'images/kirby-tshirt.png', 1, 'Kirby T-shirt that I got from a friend 5 years ago', now())
returning *;
