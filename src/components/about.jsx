import React, { useEffect } from "react";
import { AboutNav } from "../subcomponents/aboutnav";
import { Footer } from "../subcomponents/footer";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutNav></AboutNav>

      <div className="mt-[11vh] p-10">
        <div className="  pb-4  text-2xl md:text-3xl mb-7 text-fuchsia-700 uppercase font-bold ">
          <span className="text-black">About</span> Crypto
          <span className="text-amber-600">Coin</span>
        </div>
        <div className="mb-2  text-2xl">
          Blockchain networks use mining to create and validate new blocks of
          transactions and secure the network. In the process, the so-called
          miners use significant amounts of computational resources to create
          new units of cryptocurrencies, increasing their existing circulating
          supply. Bitcoin, Litecoin (LTC), and many other blockchain networks
          use the Proof of Work (PoW) consensus algorithm for cryptocurrency
          mining. PoW determines how a blockchain network reaches consensus
          across all the distributed participants without third-party
          intermediaries. In addition, it solves the double-spend problem,
          preventing the network participants from using the same funds more
          than once. PoW promotes good network participation by design. Miners
          compete by solving complex cryptographic puzzles with mining hardware
          to win the right to mine the next block. The first miner to find a
          valid solution and confirm their block of transactions receive
          rewards. Therefore, the process requires effort and is expensive, but
          it offers compensation for the work. PoW mining also makes a
          blockchain network more decentralized. A blockchain can function as a
          decentralized ledger because countless distributed computers (nodes)
          worldwide maintain it. Therefore rather than having a single database,
          these interconnected computers maintain a copy of the blockchain data
          and communicate with each other to continuously ensure the correct
          state of the blockchain. However, it's also possible to disrupt a
          blockchain with a so-called 51% attack. While very unlikely,
          especially for the larger blockchain networks, a single entity or
          organization could, in theory, take over 50% of the network's
          computing power. That amount of mining power would let the attacker
          intentionally exclude or alter the ordering of transactions, also
          enabling them to reverse their own transactions. Another potential
          issue regarding cryptocurrency mining relates to its sustainability
          and expenses. Cryptocurrency mining requires significant investment,
          not only in hardware but also in energy. As a result, many miners,
          especially those that mine bitcoin (BTC), consume massive amounts of
          electricity. In addition, if a miner doesn't have access to several
          mining rigs and cheap electricity, the mining will unlikely ever turn
          into a profit.
        </div>
        <div className="mb-2 mt-7  text-2xl">
          Smart Mining is a free Smart Mining platform developed by crypto
          enthusiastic.
        </div>

        <div className="mt-7 text-2xl ">
          Smart Mining team come from in blockchain industry and IT engineers,
          we have you covered with the knowledge and skills of our team,We got
          the lowest price on electricity and purchasing costs in the
          Cryptocurrency mining industry, especially in terms of electric
          energy. Smart Mining has high-quality wind energy, hydro energy, and
          solar energy. Most of Smart Mining's team are from top internet
          companies such as Amazon, Microsoft, Stanford. More than half of our
          team is R&D department, they have rich technical strength. Yue
          Mining's goal is to expand our business to the entire cryptocurrency
          industry chain in the future and serve global users through
          technological innovation。 Since Smart Mining was established in 2018,
          our specialized mining team has been dedicated to making free Smart
          Mining to people worldwide in the last 3 years.
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
