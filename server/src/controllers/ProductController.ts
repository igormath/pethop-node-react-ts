import { Request, Response } from "express";
import { prisma } from "../database";

export default {
    async getProduct(request: Request, response: Response) {
        try {
            if (request.params.id) {
                const productId = parseInt(request.params.id, 10);
                const product = await prisma.product.findFirst({ where: { id: productId } });
                if (product) {
                    return response.json(product);
                } else {
                    return response.status(404).json({ message: 'Product not found' });
                }
            } else {
                const productsList = await prisma.product.findMany();
                return response.json(productsList);
            }
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    },

    async postProduct(request: Request, response: Response){
        try{
            const {name, price} = request.body;
            const product = await prisma.product.create({
                data: {
                  name: name,
                  price: price,
                },
              })

              return response.status(201).json(product);
        } catch(error){
            return response.status(500).json({ message: error.message });
        }
    },

    async putProduct(request: Request, response: Response){
        try{
            const {name, price} = request.body;
            const productId = parseInt(request.params.id, 10)
            const product = await prisma.product.findFirst({where: {id: productId}})
            if (product){
                const updateProduct = await prisma.product.update({
                    where: {
                        id: productId
                    },
                    data: {
                        name: name,
                        price: price,
                    }
                })

                return response.status(200).json(updateProduct);
            } else{
                return response.status(404).json({ message: 'Product not found' });
            }
        } catch(error){
            return response.status(500).json({message: error.message});
        }
    },

    async deleteProduct(request: Request, response: Response){
        try{
            const productId = parseInt(request.params.id)
            const product = await prisma.product.findFirst({where: {id: productId}})
            if (product){
                const deleteProduct = await prisma.product.delete({
                    where: {
                      id: productId,
                    },
                  })

                  return response.status(200).json(deleteProduct);
            } else{
                return response.status(404).json({ message: 'Product not found' });
            }
        } catch(error){
            return response.status(500).json({message: error.message});
        }
    },
}
