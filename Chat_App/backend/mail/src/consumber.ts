import amqp from "amqplib"

import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config();



export const startSenderOtpConsumber=async()=>{
    try {

        const connnection=await amqp.connect({
            protocol:"amqp",
            hostname:process.env.RABBITMQ_HOST,
            port:Number(process.env.RABBITMQ_PORT),
            username:process.env.RABBITMQ_USER,
            password:process.env.RABBITMQ_PASS
            
        })

        const channel=await connnection.createChannel();

        const queueName="sendOTP";
        await channel.assertQueue(queueName,{durable:true});

        console.log("✅ Mail service consumer started and listening for otp mails");
        
        channel.consume(queueName,async(msg)=>{
            if(msg)
                {
                    try {
                        const {to,subject,body}=JSON.parse(msg.content.toString());

                        const transporter=nodemailer.createTransport({
                            host:"smtp.gmail.com",
                            port:465,
                            auth:{
                                user:process.env.MAIL_USER,
                                pass:process.env.MAIL_PASS
                            }
                        })

                        await transporter.sendMail({
                            from:"K-Chat",
                            to,
                            subject,
                            text:body
                        })

                        console.log(`OTP mail sent to ${to} successfull`)
                        channel.ack(msg);
                        
                    } catch (error) {
                        console.log("failed to send otp");
                        
                    }
                }
        })
        
    } catch (error) {
        console.log("failed to start mail consumer",error);
        
    }
}
