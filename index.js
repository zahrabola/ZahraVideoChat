const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const { Socket } = require("socket.io");

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
res.send('server is Running')
})

//backend socket io 
 io.on('connection', (socket) => {
    socket.emit('me', socket.id) ///personalised id in frontend

    socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

    //callback function
	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

    socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});

});



server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));