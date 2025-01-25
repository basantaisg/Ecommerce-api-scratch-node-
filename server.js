import http from 'http';
import { v4 as uuid } from 'uuid';

// product array!

const products = [];

const server = http.createServer((req, res) => {});

const port = 3000;

server.listen(port, () => console.log(`Server is running on port: ${port}`));
