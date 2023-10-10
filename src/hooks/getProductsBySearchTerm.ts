import axios, { AxiosPromise } from 'axios';
import { Product } from '../interface/Product';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const fetchProducts = async (searchTerm: string): AxiosPromise<Product[]> => {
    const response = axios.get(API_URL + '/products/search/' + searchTerm);

    return response;
}

export function getProductsBySearchTerm(searchTerm: string) {
    const query = useQuery(
        ['get-products', searchTerm],
        () => fetchProducts(searchTerm), {
        retry: 2
    });

    return {
        ...query,
        filteredProducts: query.data?.data
    }
}
