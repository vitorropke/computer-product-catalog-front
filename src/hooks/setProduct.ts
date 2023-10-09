import axios, { AxiosPromise } from 'axios';
import { Product } from '../interface/Product';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const postProduct = async (product: Product): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/products', product);

    return response;
}

export function setProduct() {
    const queryClient = useQueryClient();
    const post = useMutation({
        mutationFn: postProduct,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['get-products']);
        }
    });

    return post;
}
