import axios, { AxiosPromise } from 'axios';
import { Product } from '../interface/Product';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const putProduct = async (product: Product): AxiosPromise<any> => {
    const response = axios.put(API_URL + '/products/' + product.id, product);

    return response;
}

export function updateProduct() {
    const queryClient = useQueryClient();
    const put = useMutation({
        mutationFn: putProduct,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['get-products']);
        }
    });

    return put;
}
