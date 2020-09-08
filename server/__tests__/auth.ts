import createConnection from '../src/database';
import createApp from '../src/app';
import request from 'supertest';
import { Connection } from 'typeorm';
import { Server } from 'http';

describe('Auth', () => {
    let connection: Connection;
    let application: Server;

    beforeAll(async (done) => {
        connection = await createConnection();
        application = createApp().listen(5555, done);
    });

    afterAll(async () => {
        application.close();
        await connection.close();
    });

    describe('POST /register', () => {
        describe('when correct credentials', () => {
            it('should register user', async () => {
                const api = request(application);
                const credentials = {
                    email: 'asdasd@test.com',
                    password: '12345&Kasd',
                };
                const response = await api.post('/auth/register').send(credentials);

                expect(response.status).toBe(201);
                expect(response.body).toHaveProperty('id');
                expect(response.body).toHaveProperty('email');

                const { id, email } = response.body;
                const userRepository = connection.getRepository('User');
                await userRepository.delete({ id, email });
            });
        });

        describe('when incorrect email', () => {
            it('should throw 400 with correct message', async () => {
                const api = request(application);
                const credentials = {
                    email: 'qqwewqqwewqee',
                    password: '12321ewewqe&Ksadsa',
                };
                const response = await api.post('/auth/register').send(credentials);

                expect(response.status).toBe(400);
                expect(response.body.message).toBe('Incorrect email format');
            });
        });
    });
});