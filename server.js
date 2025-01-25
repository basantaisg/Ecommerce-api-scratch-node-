import http from 'http';
import { v4 as uuid } from 'uuid';
import 'dotenv/config';

// product array!

const products = [];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/products' && method === 'POST') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));

    req.on('end', () => {
      let id = uuid();
      const data = JSON.parse(body);
      const product = { id, ...data };
      console.log(`UUID IS: ${uuid()}`);
      products.push(product);
      res.writeHead(201, { 'CONTENT-TYPE': 'APPLICATION/JSON' });
      res.end(
        JSON.stringify({
          message: 'Product Added Sucessfully...',
          sucess: true,
        })
      );
    });
  } else if (url.startsWith('/products/') && method === 'PUT') {
    res.writeHead(200, { 'COntent-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Fetched All Products',
        products: products,
        sucess: true,
      })
    );
  }else if (url ==='/products')
});

const port = process.env.PORT;

server.listen(port, () => console.log(`Server is running on port: ${port}`));
