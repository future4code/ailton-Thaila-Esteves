import express from "express";
import { baseURL } from "./base-url"

// 1

// a

// O endpoint seria `${baseUrl}/subscribers`

// b

// Promise<any[]

// c

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
};

const main = async ():Promise<void> => {
    try {
        createNews(news)
        const subscribers = await getSubscribers()
        const subscribersIds = getSubscribersIds(subscribers)
        await notifyAllSubscribers(subscribersIds)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()