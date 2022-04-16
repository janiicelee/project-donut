require('dotenv/config');
const pg = require('pg');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const uploadsMiddleware = require('./uploads-middleware');
// const ClientError = require('./client-error');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/dev',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.use(staticMiddleware);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

// GET items
app.get('/api/items', (req, res, next) => {
  const sql = `
    select "itemId",
           "title",
           "fileUrl",
           "userId",
           "content",
           "uploadedAt"
      from "items"
  `;

  db.query(sql)
    .then(result => {
      const items = result.rows;
      res.status(200).json(items);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });

});

// POST item
app.post('/api/uploads', uploadsMiddleware, (req, res, next) => {

  const { title, content, userId } = req.body;
  const imgUrl = `/images/${req.file.filename}`;
  const sql = `
    insert into "items" ("title", "fileUrl", "userId", "content", "uploadedAt")
    values ($1, $2, $3, $4, now())
    returning *
  `;

  const params = [title, imgUrl, userId, content];
  db.query(sql, params)
    .then(result => {
      const [file] = result.rows;
      res.status(201).json(file);
    })
    .catch(err => next(err));
});
