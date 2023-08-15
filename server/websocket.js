const ws = require("ws");

const wss = new ws.Server(
	{
		port: 5000,
	},
	() => console.log("ss")
);

wss.on("connection", function connection(ws) {
	ws.on("message", (message) => {
		message = JSON.parse(message);
		switch (message.event) {
			case "message":
				break;
		}
	});
});

const message = {};
