import request from 'supertest';
import { app } from './src/server';

describe('Test get route', () => {
    it('should get id product', async () => {
        const res = await request(app).get('/produtos/1');

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('name');
    });

    it('should get all products', async () => {
        const res = await request(app).get('/produtos');

        expect(res.ok).toBe(true);
        expect(res.body).toBeInstanceOf(Array);
    })
});

describe('Test post route', () => {
    it('should post product', async () => {

        const res = await request(app)
        .post('/produtos/')
        .send({
            "name": "Produto teste",
            "price": 11,
        });

        expect(res.status).toBe(201);
        expect(res.body).toMatchObject({
            "name": "Produto teste",
            "price": "11",
        });

        const deleteRes = await request(app).delete(`/produtos/${res.body.id}`);

        expect(deleteRes.status).toBe(200);
        expect(deleteRes.body).toMatchObject({
            "id": res.body.id,
            "name": "Produto teste",
            "price": "11",
        })
    });
});

describe('Test delete route', () => {
    it('should delete product by id', async () => {
        const createRes = await request(app)
        .post('/produtos/')
        .send({
            "name": "Produto para deletar",
            "price": 20,
        });

        expect(createRes.status).toBe(201);

        const productId = createRes.body.id;

        const deleteRes = await request(app).delete(`/produtos/${productId}`)

        expect(deleteRes.status).toBe(200);
        expect(deleteRes.body).toMatchObject({
            "name": "Produto para deletar",
            "price": "20",
        })

        const getRes = await request(app).get(`/produtos/${productId}`)

        expect(getRes.status).toBe(404);
        expect(getRes.body).toMatchObject({
            message: 'Product not found'
        })
    })

    it('Should return 404 for non-existent product', async () => {
        const deleteRes = await request(app).delete('/produtos/9999');

        expect(deleteRes.status).toBe(404);
        expect(deleteRes.body).toMatchObject({
            message: 'Product not found'
        });
    });
});

describe('Test put route', () => {
    it('Must put product by id', async () => {
        const createRes = await request(app)
        .post('/produtos/')
        .send({
            "name": "Produto create atualização",
            "price": 11.0
        });

        expect(createRes.status).toBe(201);
        expect(createRes.body).toMatchObject({
            "name": "Produto create atualização",
            "price": "11"
        });

        const productId = createRes.body.id;

        const putRes = await request(app)
        .put(`/produtos/${productId}`)
        .send({
            "name": "Produto put atualizado",
            "price": 99.0
        });

        expect(putRes.status).toBe(200);
        expect(putRes.body).toMatchObject({
            "name": "Produto put atualizado",
            "price": "99"
        });
    });

    it('Should return 404 for non-existent product', async () => {
        const putRes = await request(app).put('/produtos/9999');

        expect(putRes.status).toBe(404);
        expect(putRes.body).toMatchObject({
            message: 'Product not found'
        });
    });
});
