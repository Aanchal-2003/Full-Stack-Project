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

const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "/_/backend/";

const axiosAPIinstance = axios.create({
    baseURL: apiBaseURL,
    withCredentials: true
});

function formatIndianCurrency(amount) {
    return amount?.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
    });
}

export { notify, slugCreate, axiosAPIinstance, formatIndianCurrency }