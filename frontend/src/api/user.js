import { cookies } from "next/headers";

async function getUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get("user_token")?.value || null;

    if (token) {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}user/me`, {
                headers: {
                    Authorization: token
                }
            });
            const response = await res.json();
            if (response.success) {
                return response.data;
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }
}

async function logout() {
    const cookieStore = await cookies();
    const token = cookieStore.get("user_token")?.value || null;

    if (token) {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}user/logout`, {
                headers: {
                    Authorization: token
                }
            });

        } catch (error) {
            return null;
        }
    }
}

export { getUser, logout };