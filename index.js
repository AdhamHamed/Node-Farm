const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");
const replaceTemplate = require("./modules/replaceTemplate");

// SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const tempOverview = fs.readFileSync(
	`${__dirname}/templates/template-overview.html`,
	"utf-8"
);
const tempCard = fs.readFileSync(
	`${__dirname}/templates/template-card.html`,
	"utf-8"
);
const tempProduct = fs.readFileSync(
	`${__dirname}/templates/template-product.html`,
	"utf-8"
);
const errorPage = fs.readFileSync(`${__dirname}/404page.html`, "utf-8");
const dataObj = JSON.parse(data);
const slugs = dataObj.map((el) => slugify(el.productName), { lower: true });

const server = http.createServer((req, res) => {
	const { query, pathname } = url.parse(req.url, true);

	// OVERVIEW PAGE
	if (pathname === "/" || pathname === "/overview") {
		res.writeHead(200, {
			"Content-type": "text/html",
		});
		const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el));
		const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
		res.end(output);
	}

	// PRODUCT PAGE
	else if (pathname === "/product") {
		res.writeHead(200, {
			"Content-type": "text/html",
		});
		const product = dataObj[query.id];
		const output = replaceTemplate(tempProduct, product);
		res.end(output);
	}

	// API
	else if (pathname === "/api") {
		res.end(data);
	}

	// NOT FOUND PAGE
	else {
		res.writeHead(404, {
			"Content-type": "text/html",
		});
		res.end(errorPage);
	}
});

server.listen(8000, "nodejsfarm.netlify.app", () => {
	console.log("Listening to requests on port 8000");
});
