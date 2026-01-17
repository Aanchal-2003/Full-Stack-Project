import axios from 'axios';
import { toast } from 'react-toastify';

const notify = (msg, flag) => toast(msg, { type: flag ? "success" : "error" })

function slugCreate(name) {

    const slug = name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

    return slug
}

const axiosAPIinstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

export { notify, slugCreate, axiosAPIinstance }