import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4x6isow06ts01up3nwngjg5/master',
    cache: new InMemoryCache()
})