import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailerService {
    constructor(private readonly configService: ConfigService) { }

    
    /**
     * EMAIL SENDING WITH NODEMAILER SERVICE..
     * @param email
     * @param verificationUrl
     */
    public async sendMailVerification(
        email: string,
        verificationUrl: string,
        verificationCode: string,
    ) {
        const transport = nodemailer.createTransport({
            service: 'gmail',
            host: this.configService.get('MAIL_HOST'),
            port: this.configService.get('MAIL_PORT'),
            auth: {
                user: this.configService.get('MAIL_USER'),
                pass: this.configService.get('MAIL_PASS'),
            },
        });

        // Define the email content..
        const mailOptions = {
            from: `"MaiThai Kitchen Restaurant" <${this.configService.get('MAIL_USER')}>`,
            to: email,
            subject: 'Your account verification Link/Code',
            text: `Your verification code is: ${verificationCode}. Please use this code to verify your account: ${verificationUrl}`,
            html: `<h3>Your verification code is: ${verificationCode}</h3><br>Please use this code to verify your account: <a href="${verificationUrl}">${verificationUrl}</a>`,
        };

        // send the email..
        try {
            await transport.sendMail(mailOptions);
            console.log('Email verification sent successfully');

        } catch (error) {
            console.error('Error sending email verification: ', error);
            throw new HttpException('Failed to send email verification!', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /**
     * GENRATE THE VERIFICATION TOKEN..
     * @param length
     * @returns
     */
    public generateVerificationToken(length = 32): string {
        // Use cryptographically secure random number generation for security..
        const charecters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        const charectersLength = charecters.length;

        for (let i = 0; i < length; i++) {
            token += charecters.charAt(Math.floor(Math.random() * charectersLength));
        }

        return token;
    }


    /**
     * GENERATE THE VERIFICATION CODE..
     * @param length
     * @returns
     */
    public generateVerificationCode(length = 6): string {
        let code = '';

        for (let i = 0; i < length; i++) {
            code += Math.floor(Math.random() * 10).toString();
        }

        return code;
    }
}
