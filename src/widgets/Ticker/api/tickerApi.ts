'use server'

import axios from "axios";

const tickerApi = axios.create({
    baseURL: 'https://api.twelvedata.com'
})

const TICKERS = ["AAPL", "TSLA", "MSFT", "GOOGL", "NVDA"];

type TickerResponse = {
    name: string,
    close: string,
    percent_change: string,
    currency: string,
}

export type GetTickerResponse = {
    name: string,
    price: string,
    precent: string,
    currency: string,
    changeType: 'negative' | 'positive'
}



export const getTickers = async (): Promise<GetTickerResponse[]> => (
    new Promise((resolve, reject) => {
        (async () => {
            try {
                const promisesData = Promise.all(
                    TICKERS.map(
                        (symbol) => (
                            tickerApi.get<TickerResponse>(
                                `/quote`,
                                {
                                    params: {
                                        apikey: process.env.TWELVEDATA_SECRET_KEY,
                                        symbol
                                    }
                                }
                            )
                        )
                    )
                )

                const tickers: GetTickerResponse[] = (await promisesData)
                    .map(
                        ({ data }): GetTickerResponse => ({
                            name: data.name,
                            price: Number(data.close).toFixed(2),
                            precent: Number(data.percent_change).toFixed(2),
                            currency: data.currency,
                            changeType: Number(data.percent_change) > 0 ? 'positive' : 'negative'
                        })
                    )

                resolve(tickers)
            } catch (error) {
                reject(`Error ${error}`)
            }

        })()
    })
)