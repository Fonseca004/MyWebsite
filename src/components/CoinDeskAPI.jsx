import { useEffect, useState } from "react";

export const CoinDeskAPI = () => {
  const [btcData, setBtcData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin data');
        }
        const data = await response.json();
        setBtcData(data);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <article className="flex flex-col gap-2 flex-grow rounded-md border border-neutral-700 p-6">
      <header className="flex w-full flex-row justify-between gap-2">
        <h3 className="text-xl text-neutral-950">
          API Testing (<a className="hover:text-blue-500 after:content-['_↗']" href="https://api.coindesk.com/v1/bpi/currentprice.json" target="_blank" rel="noreferrer"> CoinDeskAPI</a>)
        </h3>
      </header>
      <p className="w-auto leading-6 text-base">Displaying live BTC values, first API test! Refresh to update values.</p>
      {btcData && (
        <p className="w-auto leading-6 text-base">{btcData.disclaimer}</p>
      )}
      
      <article class="flex flex-col gap-8 md:flex-row md:justify-between md:gap-12 mt-8 md:mt-8">
        {btcData && ( <article class="text-base">
          ({btcData.bpi.EUR.code}): {btcData.bpi.EUR.rate}
        </article>)}
        {btcData && ( <article class="text-base">
          ({btcData.bpi.USD.code}): {btcData.bpi.USD.rate}
        </article>)}
        {btcData && ( <article class="text-base">
          ({btcData.bpi.GBP.code}): {btcData.bpi.GBP.rate}
        </article>)}

      </article>

    </article>
  );
};
