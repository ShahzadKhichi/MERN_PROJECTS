"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startSenderOtpConsumber = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const startSenderOtpConsumber = async () => {
    try {
        const connnection = await amqplib_1.default.connect({
            protocol: "amqp",
            hostname: process.env.RABBITMQ_HOST,
            port: Number(process.env.RABBITMQ_PORT),
            username: process.env.RABBITMQ_USER,
            password: process.env.RABBITMQ_PASS
        });
        const channel = await connnection.createChannel();
        const queueName = "sendOTP";
        await channel.assertQueue(queueName, { durable: true });
        console.log("✅ Mail service consumer started and listening for otp mails");
        channel.consume(queueName, async (msg) => {
            if (msg) {
                try {
                    const { to, subject, body } = JSON.parse(msg.content.toString());
                    const transporter = nodemailer_1.default.createTransport({
                        host: "smtp.gmail.com",
                        port: 465,
                        auth: {
                            user: process.env.MAIL_USER,
                            pass: process.env.MAIL_PASS
                        }
                    });
                    await transporter.sendMail({
                        from: "K-Chat",
                        to,
                        subject,
                        text: body
                    });
                    console.log(`OTP mail sent to ${to} successfull`);
                    channel.ack(msg);
                }
                catch (error) {
                    console.log("failed to send otp");
                }
            }
        });
    }
    catch (error) {
        console.log("failed to start mail consumer", error);
    }
};
exports.startSenderOtpConsumber = startSenderOtpConsumber;
