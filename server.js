"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 5000;
app.use(express_1.default.json());
app.post('/webhook', function (req, res) {
    // Output received payload
    console.log('Payload:', req.body);
    // Store message
    var msg = String(req.body.secretMessage);
    if (msg) {
        console.log('Message received:', msg);
        res.status(200).send('Message received!');
    }
    else {
        res.status(400).send('No message found.');
    }
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
