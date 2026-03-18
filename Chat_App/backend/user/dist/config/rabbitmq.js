import amqp from "amqplib";
let channel;
export const connectRabbitMQ = async () => {
    try {
        const connnection = await amqp.connect({
            protocol: "amqp",
            hostname: process.env.RABBITMQ_HOST,
            port: Number(process.env.RABBITMQ_PORT),
            username: process.env.RABBITMQ_USER,
            password: process.env.RABBITMQ_PASS
        });
        channel = await connnection.createChannel();
        console.log("✅ RabbitMQ connected");
    }
    catch (error) {
        console.error("❌ failed to connect rabbitMQ", error);
    }
};
export const publisToQueue = async (queueName, meggase) => {
    if (!channel) {
        console.log("Rabbitmq channel is not initailzed");
        return;
    }
    await channel.assertQueue(queueName, { durable: true });
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(meggase)), { persistent: true });
};
