import axios, { AxiosPromise } from 'axios';
import { Product } from '../interface/Product';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const fetchProduct = async (): AxiosPromise<Product[]> => {
    const response = axios.get(API_URL + '/products');

    return response;
}

export function getProducts() {
    const query = useQuery({
        queryFn: fetchProduct,
        queryKey: ['get-products'],
        retry: 2
    });

    return {
        ...query,
        products: query.data?.data
    }
}
