import axios, { AxiosPromise } from 'axios';
import { Product } from '../interface/Product';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const deleteProduct = async (product: Product): AxiosPromise<any> => {
    const response = axios.delete(API_URL + '/products/' + product.id);

    return response;
}

export function removeProduct() {
    const queryClient = useQueryClient();
    const del = useMutation({
        mutationFn: deleteProduct,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['get-products']);
        }
    });

    return del;
}
