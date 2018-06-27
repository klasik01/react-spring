import axios from 'axios';
import {FETCH_POSTS, GET_POST} from "./type";

const ROOT_URL = 'http://localhost:8090/';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/article/all`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/article/${id}`);

    return {
        type: GET_POST,
        payload: request
    };
}