// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
    const getone = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/safemoon-1996`,
        {
          method: 'GET',
          headers: {
            Accept: '*/*',
          },
        },
      )
  
      const data = await response.json()
     
  
      res.status(200).json({ data })
    }
  
    getone()
  }
  