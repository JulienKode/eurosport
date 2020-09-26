import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'

const endpoint = 'https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/'

export const useHeadToHead = () => {
  return useQuery('headToHead', async () => {
    const { headToHead } = await request(
      endpoint,
      gql`
        query {
          headToHead{
            firstname
            lastname
            picture{
              url
            }
            country{
              picture{
                url
              }
            }
            stats{
              rank
              points
              age
            }
          }
        }
      `,
    )
    return headToHead
  })
}
