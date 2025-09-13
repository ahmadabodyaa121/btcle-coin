/**
 * Страница "Whitepaper"
 * @module pages/whitepaper
 */
import { createLayout } from '../components/layout.js';
import { hideGlobalLoader } from '../components/loader.js';

// SVG иконки
const ICONS = {
  download: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" x2="12" y1="15" y2="3"></line>
  </svg>`,
  
  chevronDown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  
  brain: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
  </svg>`,
  
  trophy: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>`,
  
  code: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>`,
  
  shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>`,
  
  link: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>`,
  
  wind: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
  </svg>`,
  
  zap: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>`,
  
  gauge: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m12 14 4-4"></path>
    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
  </svg>`,
  
  globe: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" x2="22" y1="12" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>`,
  
  robot: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="16" height="16" x="4" y="6" rx="2"></rect>
    <path d="M12 2v4"></path>
    <path d="M10 16v.01"></path>
    <path d="M14 16v.01"></path>
    <path d="M8 22h8"></path>
    <path d="M12 18v4"></path>
  </svg>`,
  
  droplet: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </svg>`,
  
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>`,
  
  discord: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 10a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
    <path d="M15 10a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
    <path d="M9.5 15.5c1.5 1 3.5 1 5 0"></path>
    <path d="M18.5 8c.5 1.5 1 3.5 .5 6.5c-2 2 -4 3 -7 3s-5 -1 -7 -3c-.5 -3 0 -5 .5 -6.5c2 -3 6 -4 6.5 -4c.5 0 4.5 1 6.5 4"></path>
    <path d="M9 15l-1 5l5 -3l5 3l-1 -5"></path>
  </svg>`,
  
  telegram: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 12.2c0-3.2-4.4-5.2-7-3-2.5-2.2-6.8-.2-6.8 3v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5zm-7 1.7L10 12.2m1.8 1.7L14 12.2"></path>
  </svg>`,
  
  file: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
    <polyline points="14 2 14 10 20 10"></polyline>
  </svg>`,
  
  lock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 17v4"></path>
    <path d="M12 17a5 5 0 0 0-5-5"></path>
    <path d="M12 12a5 5 0 0 0-5-5"></path>
    <path d="M12 12a5 5 0 0 1 5-5"></path>
    <path d="M12 12a5 5 0 0 1 5 5"></path>
  </svg>`,
  
  star: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>`
};

/**
 * Создает содержимое страницы "Whitepaper"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createWhitepaperPage(container) {
  // Создаем основной layout с шапкой и футером
  const layout = createLayout();
  
  // Создаем контейнер для контента
  const whitepaperContainer = document.createElement('div');
  whitepaperContainer.classList.add('section-container');
  whitepaperContainer.classList.add('whitepaper-container');
  
  // Краткое содержание Whitepaper -> Полный текст Whitepaper
  const whitepaperSummaryHtml = `
    <div class="summary-section">
      <p>Bitcoin Limited Edition (BTCLE) is a scarce, high-integrity digital asset created for those who value purpose over hype. With a strictly limited supply and uncompromising transparency, BTCLE embodies the original ethos of Bitcoin, decentralized, secure, and built to last. In a market saturated with speculation and noise, BTCLE is a deliberate, long-term asset for those who move with conviction and think beyond the trend cycle, because true value is never mass-produced.</p>
    </div>

     <div class="summary-section">
      <h3>THE BTCLE STORY</h3>
      <h4>A New Standard for a Decentralized Future</h4>
      <p>Ever wish you could rewind time, not to relive the past, but to act on what you now know? Maybe it was Bitcoin back in its early days. Maybe it was Ethereum before the ICO wave. Maybe it was that quiet voice telling you, this might be something, and the noise that drowned it out.</p>
      <p>We've all felt that moment. That pause in time where possibility stood just out of reach.</p>
      <p>But here's the truth: the past is gone. What matters now is what we choose to do with the lessons it left behind.</p>
      <p>Bitcoin Limited Edition (BTCLE) is not an attempt to rewrite history. It's a chance to respond to it. To finally act with intention, not regret.</p>
      <p>We didn't create BTCLE to chase a trend. We built it to reignite what crypto was meant to be. Somewhere between the memes, the scams, and the overnight millionaires, the soul of the space was lost.</p>
      <p><strong>BTCLE is a return to authenticity and purpose.</strong></p>
      <p>A scarce, fixed-supply token, 210,000 total, just like the original Bitcoin vision. No inflation. No manipulation. No shortcuts.</p>
      <p>A community launch built to block bots, limit snipers, and eliminate pre-mined advantage. A structure that honors time, trust, and real decentralization.</p>
      <p>This isn't just about code or tokenomics. It's about people. It's about building a system that respects the ones who show up early, not to dump, but to believe. We've seen what hype can do. Now we're here to see what honesty can build.</p>
      <p>BTCLE was made for those who missed their first chance, and for those who never stopped believing in decentralized money.</p>
      <p>It's a token, yes. But it's also a signal. A quiet reminder that something better is still possible.</p>
      <p>And we're not just protecting the token, we're protecting the ecosystem. No bots. No rugs. No manipulation. BTCLE is guarded from the beginning with fairness-first smart contracts and protective mechanics that give this launch meaning. We're here to build something that lasts.</p>
      <p>One more thing, because it matters.</p>
      <p>The BTCLE founding team has chosen to remain unknown, not for secrecy, but to keep the focus where it belongs: on the mission. Every element of BTCLE, from smart contracts to tokenomics, has been built with full transparency, fairness, and security at its core.</p>
      <p><strong>This is BTCLE.</strong></p>
      <p>Rare by Design. Secured by Structure. Driven by Collective Belief.</p>
      <p>Your second chance is here.</p>
      <p>Clean. Fair. Purpose-built.</p>
      <p>Welcome to the Future of Sound Money.</p>
    </div>

    <div class="summary-section">
      <h3>BTCLE Tokenomics</h3>
      <h4>Max Supply Overview</h4>
      <p>Bitcoin Limited Edition (BTCLE) is a fixed-supply crypto asset with a max supply of 210,000 BTCLE.</p>
      <p>This non-inflationary model reinforces BTCLE's mission of sustainable growth, transparent governance, and alignment with long-term holders.</p>
      <p>At the time of the Initial Token Distribution (ITD), 10% of the total supply (21,000 BTCLE) will be released to the public to support trading liquidity and early adoption.</p>
      <p>The remaining 90% (189,000 BTCLE) is locked and allocated for a long-term vesting plan governed by a smart contract.</p>
      <p>BTCLE's vesting does not include a cliff unlock period, and does not follow a linear vesting model. Instead, it employs a monthly declining unlock mechanism, where tokens are gradually released in decreasing amounts over a 10-year period, starting January 2026 and concluding December 2035.</p>
      <h4>Purpose of Distribution</h4>
      <p>To support responsible circulation, sustainable growth, and long-term value alignment, BTCLE's token distribution is structured as follows:</p>
      <table class="tokenomics-table">
        <thead>
          <tr>
            <th>Allocation</th>
            <th>Amount (BTCLE)</th>
            <th>% of Total Supply</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Initial Token Distribution (ITD)</td>
            <td>21,000</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>Locked Vesting Allocation (10-Year Vesting)</td>
            <td>189,000</td>
            <td>90%</td>
          </tr>
          <tr>
            <td><strong>Max Supply</strong></td>
            <td><strong>210,000</strong></td>
            <td><strong>100%</strong></td>
          </tr>
        </tbody>
      </table>
      <p>● 10% of the total supply will be made available at launch to provide public access and trading liquidity.<br>
      ● 90% of the supply is locked and released via a long-term vesting mechanism over 10 years.</p>
      <h4>Vesting Mechanics</h4>
      <p>● Vesting Start: January 2026<br>
      ● Vesting End: December 2035<br>
      ● Mechanism: Monthly token release via smart contract, following a gradually decreasing emission schedule during the initial phase.<br>
      ● Governance: Fully transparent and on-chain.</p>
      <p>This structure is designed to reduce short-term sell pressure and reward holders with a progressively deflationary release curve.</p>
      <h4>Annual Vesting Schedule (2026–2035)</h4>
      <div class="table-responsive-wrapper">
        <table class="tokenomics-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Monthly Unlock Range</th>
              <th>Annual Total</th>
              <th>Remaining Locked</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2026</td><td>3,800 → 2,700</td><td>39,000</td><td>150,000</td></tr>
            <tr><td>2027</td><td>2,650 → 2,100</td><td>28,500</td><td>121,500</td></tr>
            <tr><td>2028</td><td>2,075 → 1,800</td><td>23,250</td><td>98,250</td></tr>
            <tr><td>2029</td><td>1,785 → 1,620</td><td>20,430</td><td>77,820</td></tr>
            <tr><td>2030</td><td>1,610 → 1,500</td><td>18,660</td><td>59,160</td></tr>
            <tr><td>2031</td><td>1,495 → 1,440</td><td>17,610</td><td>41,550</td></tr>
            <tr><td>2032</td><td>1,420 → 1,200</td><td>15,720</td><td>25,830</td></tr>
            <tr><td>2033</td><td>1,000 → 835</td><td>11,010</td><td>14,820</td></tr>
            <tr><td>2034</td><td>700 → 645</td><td>8,070</td><td>6,750</td></tr>
            <tr><td>2035</td><td>600 → 425</td><td>6,750</td><td>0</td></tr>
          </tbody>
        </table>
      </div>
      <h4>2026 Vesting Breakdown (Monthly)</h4>
      <table class="tokenomics-table">
        <thead>
          <tr><th>Month</th><th>BTCLE Unlocked</th><th>Cumulative Total</th></tr>
        </thead>
        <tbody>
          <tr><td>January</td><td>3,800</td><td>3,800</td></tr>
          <tr><td>February</td><td>3,700</td><td>7,500</td></tr>
          <tr><td>March</td><td>3,600</td><td>11,100</td></tr>
          <tr><td>April</td><td>3,500</td><td>14,600</td></tr>
          <tr><td>May</td><td>3,400</td><td>18,000</td></tr>
          <tr><td>June</td><td>3,300</td><td>21,300</td></tr>
          <tr><td>July</td><td>3,200</td><td>24,500</td></tr>
          <tr><td>August</td><td>3,100</td><td>27,600</td></tr>
          <tr><td>September</td><td>3,000</td><td>30,600</td></tr>
          <tr><td>October</td><td>2,900</td><td>33,500</td></tr>
          <tr><td>November</td><td>2,800</td><td>36,300</td></tr>
          <tr><td>December</td><td>2,700</td><td>39,000</td></tr>
        </tbody>
      </table>
      <p>Remaining Locked Supply (as of December 2026): 150,000 BTCLE</p>
      <h4>Transparency & Governance Commitment</h4>
      <p>BTCLE's token release mechanism is designed for full transparency, security, and long-term sustainability. It is:</p>
      <p>● Immutable and automated via audited smart contracts.<br>
      ● Fully auditable, with all token movements visible on-chain in real-time.</p>
      <p>The team reserves the right to propose adjustments to the vesting schedule in response to regulatory changes or community governance proposals.<br>
      All modifications will be transparently disclosed and aligned with BTCLE's long-term mission and ecosystem development.<br>
      BTCLE follows a declining monthly issuance model, gradually reducing token release over time to support price stability and incentivize long-term participation.</p>
      <h4>Summary of Distribution Principles</h4>
      <p>● Max Supply: 210,000 BTCLE (non-inflationary).<br>
      ● ITD Circulation: 21,000 BTCLE (10% released for trading at launch).<br>
      ● Locked Supply: 189,000 BTCLE (90% locked over a 10-year vesting period).<br>
      ● Release Mechanism: Smart contract-based, deflationary model.</p>
    </div>

    <div class="summary-section">
      <h3>BTCLE Strategic Roadmap (Q1 2025 – Q2 2026)</h3>
      <p>Strategic Launch Plan for Sustainable Growth, Institutional Credibility, and Global Utility.</p>
      <p>BTCLE is more than a token, it is a next-generation financial instrument engineered for long-term value creation through decentralized innovation, real-world integration, and community-driven growth. Our roadmap establishes the critical foundations required to scale sustainably, build global trust, and deliver real-world utility.</p>
      <h4>Q1 2025: Pre-launch Audit & Foundation</h4>
      <p><strong>Objective:</strong> Establish ironclad security, regulatory alignment, and operational readiness before public launch.</p>
      <p>● Comprehensive Smart Contract Audits: Multiple independent audits by top-tier blockchain security firms (e.g., CertiK, Halborn) focusing on vulnerability detection, gas optimization, and logic verification. All audit reports published transparently.<br>
      ● Legal & Compliance Framework: Finalized legal opinions on token classification, jurisdictional analysis aligned with leading crypto regulatory frameworks and global best practices, and establishment of KYC/AML protocols compliant with international standards.<br>
      ● Core Team & Advisory Board Finalization: Onboarding key technical, financial, and marketing experts. Solidifying strategic advisory board with industry veterans.<br>
      ● Initial Partnership Agreements: Secured foundational partnerships for market making, initial liquidity provision, and technology integration.</p>
      <p><strong>Strategic Impact:</strong><br>
      Ensure maximum security, build foundational trust through transparency, and mitigate regulatory risks from day one.</p>
      <h4>Q2 2025: Mainnet Launch & Initial Liquidity Framework</h4>
      <p><strong>Objective:</strong> Execute a seamless public launch, establish initial trading liquidity, and enable early community access.</p>
      <p>● Initial Token Distribution (ITD): The first 10% of total supply is released, supporting early trading liquidity and market access in alignment with predefined tokenomics.<br>
      ● Initial Exchange Listings (Tier 2/3 & DEXs): Listing on select Tier 2/3 CEXs and major DEXs (e.g., Uniswap) to establish baseline liquidity and price discovery.<br>
      ● Liquidity Pool Seeding: Deployment of initial capital into DEX liquidity pools (e.g., BTCLE/USDT) to ensure a stable trading environment. Implementation of initial liquidity management strategy.<br>
      ● Community Launch & Early Access Program: Public announcement, launch of official website V2, social media channels, and community forums (Discord/Telegram). Optional community incentives under review, including early supporter recognition and contribution-based rewards (details TBD).<br>
      ● Website & Explorer Integration: Updated website with live token data, contract links, and integrated blockchain explorer views.</p>
      <p><strong>Strategic Impact:</strong><br>
      Establish BTCLE's public presence, ensure reliable trading access, and begin building a values-driven community aligned with long-term growth.</p>
      <h4>Q3 2025: Tier-1 Exchange Listings & Global Headquarters Establishment – Dubai Hub</h4>
      <p><strong>Objective:</strong> Secure listings on major global exchanges, establish a strategic operational base in a key crypto hub, and begin high-impact community building.</p>
      <p>● Tier-1 CEX Listings: Progressive listings on top-tier centralized exchanges (targeting OKX, Bybit, KuCoin, potentially initial talks with Coinbase/Binance depending on market conditions and regulatory clarity). Focus on exchanges with strong regional presence.<br>
      ● Launch of BTCLE Global Headquarters (Dubai): Establishment of a physical presence in Dubai. This includes office setup, local team hiring (community management, business development), and registration processes. Aligning with Dubai\'s crypto-forward regulatory framework (e.g., VARA).<br>
      ● MENA Community Activation Program: Initiate targeted community building efforts in the Middle East and North Africa region:<br>
      &nbsp;&nbsp;○ Host high-touch investor meetups and private briefings.<br>
      &nbsp;&nbsp;○ Run educational sessions on BTCLE's value model and tokenomics.<br>
      &nbsp;&nbsp;○ Form partnerships with regional influencers and crypto media.</p>
      <p><strong>Strategic Impact:</strong><br>
      Advance BTCLE's global footprint by securing high-liquidity exchange access, establishing a regulated presence in a top crypto jurisdiction, and activating grassroots momentum through community-led education and engagement across the region.</p>
      <h4>Q4 2025: BTCLE Pay Wallet – Real-World Utility Onramp</h4>
      <p><strong>Objective:</strong> Bridge the gap between digital assets and real-world spending, unlocking daily transactional utility for BTCLE.</p>
      <p>● BTCLE Pay Wallet Platform Launch (Beta): Initial release of the wallet application (iOS/Android/Web) featuring:<br>
      &nbsp;&nbsp;○ Secure storage and management of BTCLE and other major cryptocurrencies (BTC, ETH, stablecoins).<br>
      &nbsp;&nbsp;○ Integrated DEX aggregator for in-app swaps.<br>
      &nbsp;&nbsp;○ Core crypto-to-fiat off-ramp functionality via licensed partners.<br>
      ● Point-of-Sale Integration (Pilot Program): Partnership with select payment processors or POS providers to test seamless BTCLE spending at participating merchants in specific regions (potentially starting in Dubai). Focus on NFC/QR code payments.<br>
      ● Loyalty & Rewards Program Design: Design of BTCLE loyalty rewards structure, incentivizing holding, ecosystem spending, and future staking (if applicable), including cashback in BTCLE and tiered user benefits.<br>
      ● Global Payment Provider Partnerships: Early-stage exploration of integrations with global payment providers via crypto card issuers or fintech intermediaries, with the goal of enabling wider future BTCLE acceptance.</p>
      <p><strong>Strategic Impact:</strong><br>
      Accelerate BTCLE's adoption by grounding it in real-world usage, driving utility-based demand, and establishing it as a practical bridge between the crypto economy and everyday life.</p>
      <h4>Q1 2026: Community Governance Launch & BTCLE Chain Testnet</h4>
      <p><strong>Objective:</strong> Initiate decentralized governance and begin laying the technical groundwork for BTCLE's proprietary blockchain ecosystem.</p>
      <p>● Decentralized Governance Portal Launch (V1): Implementation of an on-chain voting platform allowing BTCLE holders to propose and vote on BTCLE Governance Proposals (BGPs) related to treasury allocation, protocol upgrades, and strategic initiatives. Initial focus on weighted voting based on holdings/staking.<br>
      ● BTCLE Chain (Proprietary Blockchain) - Testnet Launch: Public release of the BTCLE Chain testnet for developers and community members. Features include:<br>
      &nbsp;&nbsp;○ High-performance consensus mechanism (details TBD - PoS variant likely).<br>
      &nbsp;&nbsp;○ Native smart contract environment (EVM-compatible, Ethereum Virtual Machine).<br>
      &nbsp;&nbsp;○ Initial implementation of AI-driven fraud detection modules (for testing).<br>
      &nbsp;&nbsp;○ Basic block explorer and developer tooling.<br>
      ● Developer Outreach & Testnet Incentives: Initiate developer incentive programs, including bug bounties, testnet challenges, and grants for innovative dApp prototypes.<br>
      ● Ecosystem Expansion Strategy Finalization: Detailed plan for attracting projects, fostering dApp development, and ensuring interoperability post-mainnet launch of BTCLE Chain.</p>
      <p><strong>Strategic Impact:</strong><br>
      Lay the foundation for community-driven governance and blockchain self-sovereignty, while rigorously testing BTCLE's proprietary chain infrastructure and cultivating its developer ecosystem.</p>
      <h4>Q2 2026: Proprietary Blockchain Deployment – BTCLE Chain Launch</h4>
      <p><strong>Objective:</strong> Establish a high-performance, AI-integrated blockchain infrastructure that future-proofs BTCLE's ecosystem and enables next-generation decentralized applications.</p>
      <p>● Launch of BTCLE Chain Mainnet: Official deployment of the proprietary, AI-optimized blockchain following successful testnet phase and audits.<br>
      ● Key Technical Features Activated:<br>
      &nbsp;&nbsp;○ Native smart contract deployment capabilities (fully EVM compatible).<br>
      &nbsp;&nbsp;○ Activated machine learning modules for dynamic fraud detection and transaction pattern analysis/optimization.<br>
      &nbsp;&nbsp;○ High-throughput, low-energy consensus architecture operational for mass scalability.<br>
      &nbsp;&nbsp;○ Bridge infrastructure for seamless asset transfer between Ethereum and BTCLE Chain.<br>
      ● Ecosystem Acceleration Initiatives Launch:<br>
      &nbsp;&nbsp;○ Formal launch of developer grant programs to incentivize building on BTCLE Chain.<br>
      &nbsp;&nbsp;○ Strategic partnerships announced with projects migrating to or building natively on BTCLE Chain.<br>
      &nbsp;&nbsp;○ Rollout of cross-chain interoperability solutions beyond ETH (e.g., bridging to other major L1s/L2s).<br>
      ● Migration Plan Execution: Begin phased migration of key BTCLE functionalities (staking, governance, utility services) to the native chain infrastructure.</p>
      <p><strong>Strategic Impact:</strong><br>
      Establish long-term technological sovereignty, unlock revenue through dApp and transaction infrastructure, enable multi-chain interoperability, and position BTCLE at the forefront of AI-integrated decentralized architecture.</p>
      <p><strong>Milestone-Driven Growth, Real-World Utility, Future-Ready Innovation.</strong></p>
    </div>

    <div class="summary-section">
      <h3>The BTCLE Team: Vision Beyond Identity</h3>
      <p>In the spirit of BTCLE's unwavering commitment to decentralization, integrity, and collective growth, the founding team made a deliberate choice to remain anonymous during the project's inception.</p>
      <p>This strategic anonymity is not born from secrecy but is rather a purposeful decision to keep the focus squarely on the mission, the technology, and the community.</p>
      <p>Inspired by the original ethos of Bitcoin, our approach embodies the belief that true innovation is not defined by the identity of its creators but by the values it upholds. Much like the creator of Bitcoin, whose identity remains shrouded in mystery, BTCLE champions the principle that decentralization is about purpose over personal recognition.</p>
      <p>This strategy underscores BTCLE's fundamental belief in delivering value before visibility, allowing the project to prove its resilience, gain adoption, and showcase ethical governance on its own merits.</p>
      <p>BTCLE remains fully committed to achieving all milestones with the highest degree of transparency, audited systems, and governance that prioritizes the community.</p>
      <p><strong>BTCLE</strong><br>
      <strong>Purpose First. People Second. Trust Always.</strong></p>
    </div>

    <div class="summary-section">
      <h3>Why BTCLE</h3>
      <p>In a digital asset landscape saturated with hype cycles, inflated promises, and unsustainable tokenomics, Bitcoin Limited Edition (BTCLE) introduces a new paradigm: a scarce, auditable, and liquidity-backed asset, engineered with the rigor of institutional finance and the ethos of decentralized trust.</p>
      <p>BTCLE isn't just another token. It's a precision-engineered financial instrument, combining structural discipline with crypto-native ideals like transparency, decentralization, and user sovereignty.</p>
      <ol>
        <li><strong>Ultra-Scarce by Design — Built for Conviction, Not Hype</strong><br>
        With a hard-capped supply of 210,000 tokens, BTCLE enforces absolute scarcity, eliminating inflation risk while avoiding the typical pitfalls of cliff unlocks or sudden supply shocks.<br>
        Its declining issuance curve, embedded directly into audited smart contracts, is designed to reward long-term participation and disciplined holding. This is value earned through time, not manufactured by marketing.</li>
        <li><strong>On-Chain Integrity — Immutable, Non-Custodial, and Self-Enforcing</strong><br>
        Every element of BTCLE's supply logic, from launch through vesting, is governed by autonomous smart contracts, fully auditable and tamper-proof.<br>
        There are no manual overrides, no hidden reallocations, and no operational backdoors. Every token movement is transparently enforced on-chain, ensuring holders can trust the protocol by design, not by authority.</li>
        <li><strong>100% Liquidity-Backed — Not Synthetic. Not Illiquid. Not a Mirage.</strong><br>
        Every BTCLE token in circulation is supported by real, verifiable capital, secured in public liquidity pools designed for access across both decentralized and centralized trading environments.<br>
        This is not theoretical depth; it's tangible support designed to uphold price integrity, mitigate volatility, and instill confidence in long-term holders. Stability isn't aspirational, it's structural.</li>
        <li><strong>Legally Structured — Real Entity. Real Accountability. Real Standards.</strong><br>
        BTCLE is issued through a legally registered entity governed by a structured compliance framework and a clear operational charter.<br>
        While the team maintains principled anonymity in line with decentralized ideals, the project itself operates with institutional-grade integrity, meeting the expectations of serious investors while preserving the foundational values of decentralization and user sovereignty.</li>
        <li><strong>Built for the Next Era — Intelligent, Adaptive, and Community-Led</strong><br>
        BTCLE is not a static asset. The ecosystem is expanding with next-generation utility layers, including BTCLE AI and the introduction of Proof of Adaptive Intelligence (PoAI), aimed at unlocking purposeful real-world use cases and enhancing token velocity and relevance across decentralized networks.</li>
      </ol>
      <p><strong>BTCLE is Where Scarcity Meets Strategy, and Transparency Meets Trust.</strong></p>
    </div>

    <div class="summary-section">
      <h3>BTCLE Utility</h3>

      <h4>BTCLE Staking</h4>
      <p>BTCLE staking empowers token holders to lock their assets in designated vaults, thereby supporting ecosystem growth and liquidity while earning competitive yield returns over fixed commitment periods. The staking model is designed to incentivize long-term holding and provide consistent yield to participants.</p>
      <div class="table-responsive-wrapper">
        <table class="tokenomics-table">
          <thead>
            <tr>
              <th>Staking Tier</th>
              <th>BTCLE amount</th>
              <th>Lock Period</th>
              <th>Monthly Yield (MPY)</th>
              <th>Annual Yield (APY)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Essential</td><td>100</td><td>3 months</td><td>0.25%</td><td>3%</td></tr>
            <tr><td>Premium</td><td>250</td><td>6 months</td><td>0.375%</td><td>4.5%</td></tr>
            <tr><td>Executive</td><td>500</td><td>1 year</td><td>0.5%</td><td>6%</td></tr>
            <tr><td>Elite</td><td>800</td><td>3 years</td><td>0.625%</td><td>7.5%</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Staking Yield Calculation</strong></p>
      <p>Staking yields are dynamically calculated based on the locked token amount and the duration of the staking commitment. Payouts occur monthly, ensuring consistent and transparent distribution directly to the staker's wallet.</p>
      <p>By participating in BTCLE staking, holders not only secure competitive returns but also actively contribute to supporting BTCLE's liquidity infrastructure, reinforcing the stability and growth of the ecosystem.</p>

      <h4>BTCLE Pay Wallet</h4>
      <p>The BTCLE Pay Wallet is designed to be a pioneering crypto payment experience, offering seamless, fee-free services to BTCLE holders while integrating key crypto assets, including stablecoins and Bitcoin, with fiat payment capabilities. Positioned as a versatile and globally accessible platform, the wallet supports everyday financial transactions with crypto-to-fiat conversion, enabling practical utility beyond holding.</p>
      <h5>Core Features</h5>
      <ul class="core-features-list">
        <li><strong>Fee-Free Service:</strong>
          <ul>
            <li>The BTCLE Pay Wallet operates as a zero-fee service for BTCLE holders, promoting adoption and long-term usage.</li>
          </ul>
        </li>
        <li><strong>Multi-Asset Compatibility:</strong>
          <ul>
            <li>Supports BTCLE, stablecoins (USDT, USDC), and Bitcoin, allowing users to make payments or transfers with diverse digital assets.</li>
          </ul>
        </li>
        <li><strong>Crypto-to-Fiat Integration:</strong>
          <ul>
            <li>Enables real-time conversion from crypto assets (BTCLE, BTC, stablecoins) to major fiat currencies, enhancing usability for day-to-day transactions.</li>
          </ul>
        </li>
        <li><strong>Cross-Chain Accessibility:</strong>
          <ul>
            <li>The wallet supports multiple blockchain networks, allowing users to manage assets seamlessly across chains, improving accessibility and flexibility.</li>
          </ul>
        </li>
        <li><strong>Global Availability:</strong>
          <ul>
            <li>Designed to be accessible worldwide, promoting BTCLE adoption on a global scale.</li>
          </ul>
        </li>
        <li><strong>Security and Compliance:</strong>
          <ul>
            <li>Robust security protocols, including multi-factor authentication (MFA) and biometric login.</li>
            <li>Compliance with global regulations to ensure safe and legal transactions.</li>
          </ul>
        </li>
        <li><strong>User Incentive Programs:</strong>
          <ul>
            <li>Introduce wallet-specific perks, such as small cashback in BTCLE for transactions made using the wallet. This will enhance user engagement and foster long-term loyalty.</li>
          </ul>
        </li>
        <li><strong>Fiat On-Ramp and Off-Ramp:</strong>
          <ul>
            <li>The wallet will support direct purchases of BTCLE, BTC, and stablecoins using fiat via credit/debit cards.</li>
            <li>Additionally, users will be able to cash out their crypto assets to fiat and transfer the funds to linked bank accounts, offering full financial flexibility.</li>
          </ul>
        </li>
        <li><strong>Payment Gateway Integration:</strong>
          <ul>
            <li>Integration with leading crypto payment gateways to facilitate real-world transactions and merchant adoption. This feature will enhance the practical use of BTCLE and stablecoins as a means of payment.</li>
          </ul>
        </li>
      </ul>
      <p>The BTCLE Pay Wallet serves as a comprehensive digital payment solution, integrating crypto assets into practical, everyday use. By offering fee-free transactions and multi-asset support, the wallet addresses the needs of both crypto enthusiasts and mainstream users. Its global availability and cross-chain compatibility make it a versatile tool for managing digital assets efficiently.</p>
    </div>

    <div class="summary-section">
      <h3>Fundamental Goals</h3>
      <ul>
        <li>Achieve a target price of $25,000 per BTCLE.</li>
        <li>Cultivate and expand our global community to unprecedented levels.</li>
        <li>Establish BTCLE among the Top 10 cryptocurrencies worldwide.</li>
        <li>Build a legacy comparable to Bitcoin's, becoming a valid symbol of decentralized finance.</li>
        <li>Develop our headquarters and establish a specialized company dedicated to continuous innovation.</li>
      </ul>
    </div>
  `;

  // Основной HTML страницы
  whitepaperContainer.innerHTML = `
    <!-- Hero Section / Above-the-Fold - Обновленная секция -->
    <section class="hero-section">
      <div class="hero-content" id="whitepaper-hero-content">
        <h1 class="hero-title">Bitcoin Limited Edition (BTCLE)</h1>
        <p class="hero-subtitle">Rare by Design. Secured by Structure. Driven by Collective Belief.</p>
        
        <!-- УЛУЧШЕННАЯ КНОПКА -->
        <button id="view-wp-summary-btn" class="wp-summary-toggle-btn">
          <span class="btn-icon document-icon">${ICONS.file}</span>
          <span class="btn-text">View Whitepaper</span>
          <span class="chevron-icon">${ICONS.chevronDown}</span>
        </button>
        
        <!-- КОНТЕЙНЕР ДЛЯ АНИМАЦИИ РАСКРЫТИЯ -->
        <div id="wp-summary-container" class="wp-summary-container">
          <!-- СОДЕРЖИМОЕ -->
          <div class="wp-summary-content">
            ${whitepaperSummaryHtml}
          </div>
        </div>
        
      </div>
    </section>

    <!-- Остальные секции страницы (Core Principles, Key Features, etc.) -->
    <section class="core-tech-section">
      <div class="section-header">
        <h2>Core Principles</h2>
        <div class="header-line"></div>
      </div>
      <div class="tech-cards">
        <div class="tech-card">
          <div class="card-icon">${ICONS.brain}</div>
          <h3>Scarce, Fixed Supply</h3>
          <p>A strictly limited, non-inflationary total supply of 210,000 BTCLE, embodying the original ethos of Bitcoin.</p>
          <div class="card-glow"></div>
        </div>
        <div class="tech-card">
          <div class="card-icon">${ICONS.trophy}</div>
          <h3>Fair Community Launch</h3>
          <p>Built to block bots and eliminate pre-mined advantages, honoring trust and real decentralization.</p>
          <div class="card-glow"></div>
        </div>
      </div>
    </section>
    <section class="features-section">
      <div class="section-header">
        <h2>Key Features</h2>
        <div class="header-line"></div>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">${ICONS.code}</div>
          <h3>Immutable & Transparent</h3>
          <p>Audited smart contracts govern token release and vesting. All movements are visible on-chain.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">${ICONS.shield}</div>
          <h3>Launch Protection</h3>
          <p>Fairness-first smart contracts and protective mechanics guard the launch against manipulation.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">${ICONS.link}</div>
          <h3>Decentralized & Community-Driven</h3>
          <p>Focus on collective belief and building a system that respects long-term holders.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">${ICONS.wind}</div>
          <h3>Long-Term Vision</h3>
          <p>A deliberate, long-term asset designed for sustainable growth, beyond hype cycles.</p>
        </div>
      </div>
    </section>
    <section class="benefits-section">
      <div class="section-header">
        <h2>Tokenomics Highlights</h2>
        <div class="header-line"></div>
      </div>
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">${ICONS.zap}</div>
          <div class="benefit-counter" data-target="210000">0</div>
          <p>Fixed Max Supply (BTCLE)</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">${ICONS.gauge}</div>
          <div class="benefit-counter" data-target="21000">0</div>
          <p>Initial Circulating Supply (ITD)</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">${ICONS.shield}</div>
          <div class="benefit-counter" data-target="10">0</div>
          <p>Year Locked Supply Vesting Period</p>
        </div>
      </div>
    </section>
    <section class="market-section">
      <div class="section-header">
        <h2>Supply Distribution</h2>
        <div class="header-line"></div>
      </div>
      <div class="market-cards">
        <div class="market-card">
          <div class="market-icon">${ICONS.globe}</div>
          <h3>Max Supply</h3>
          <div class="market-value">210,000</div>
          <p>BTCLE (100%)</p>
          <svg class="circular-progress" viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="50"></circle><circle class="progress" cx="60" cy="60" r="50" data-value="100"></circle></svg>
        </div>
        <div class="market-card">
          <div class="market-icon">${ICONS.robot}</div>
          <h3>Locked Supply</h3>
          <div class="market-value">189,000</div>
          <p>BTCLE (90% - 10 Yr Vesting)</p>
          <svg class="circular-progress" viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="50"></circle><circle class="progress" cx="60" cy="60" r="50" data-value="90"></circle></svg>
        </div>
        <div class="market-card">
          <div class="market-icon">${ICONS.droplet}</div>
          <h3>ITD Supply</h3>
          <div class="market-value">21,000</div>
          <p>BTCLE (10% Circulating)</p>
          <svg class="circular-progress" viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="50"></circle><circle class="progress" cx="60" cy="60" r="50" data-value="10"></circle></svg>
        </div>
      </div>
    </section>
    <section class="roadmap-section">
      <div class="section-header">
        <h2>Roadmap Preview (Q1 2025 – Q2 2026)</h2>
        <div class="header-line"></div>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Q1 2025</div>
            <h3>Pre-launch Audit & Foundation</h3>
            <p>Security audits, legal framework, team finalization.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Q2 2025</div>
            <h3>Mainnet Launch & Initial Liquidity</h3>
            <p>Token distribution, initial exchange listings, community launch.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Q3 2025</div>
            <h3>Tier-1 Listings & Dubai HQ</h3>
            <p>Major exchange listings, Dubai HQ establishment, MENA community activation.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Q4 2025</div>
            <h3>BTCLE Pay Wallet Launch</h3>
            <p>Beta wallet, POS integration pilot, loyalty program design.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Q1 2026</div>
            <h3>Governance & BTCLE Chain Testnet</h3>
            <p>Governance portal, BTCLE Chain testnet launch.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-year">Q2 2026</div>
            <h3>BTCLE Chain Mainnet Launch</h3>
            <p>Proprietary blockchain deployment, ecosystem acceleration.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Home Button -->
    <a href="/" class="home-button" data-navigate>${ICONS.home}</a>
  `;
  
  // Добавляем контент в layout
  layout.mainContainer.appendChild(whitepaperContainer);
  
  // Добавляем layout в контейнер страницы
  container.appendChild(layout.container);
  
  // Инициализация интерактивных элементов
  loadStyles();
  initHeroAppearAnimation();
  initScrollAnimations();
  initWhitepaperSummaryToggle();
  initCounters();
  initCircularProgress();
  initWhitepaperEvents(container);
  
  // Скрываем лоадер
  setTimeout(() => {
    hideGlobalLoader();
    // Показываем кнопку "Домой"
    const homeButton = container.querySelector('.home-button'); // Ищем кнопку внутри container
    if(homeButton) homeButton.classList.add('visible');
  }, 500);
  
  return container;
}

/**
 * Загружает стили для страницы
 */
function loadStyles() {
  if (!document.getElementById('whitepaper-css')) {
    const linkElement = document.createElement('link');
    linkElement.id = 'whitepaper-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = '/css/pages/whitepaper.css'; // Используем новый CSS файл
    document.head.appendChild(linkElement);
  }
}

/**
 * Инициализирует анимацию появления Hero Section
 */
function initHeroAppearAnimation() {
  const heroContent = document.getElementById('whitepaper-hero-content');
  if (heroContent) {
    // Добавляем класс с небольшой задержкой для плавности
    setTimeout(() => {
      heroContent.classList.add('hero-appear-active');
    }, 100);
  }
}

/**
 * Инициализирует анимации при скролле
 */
function initScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll('.section-header, .tech-card, .feature-card, .benefit-card, .market-card, .timeline-item');
  if (!elementsToAnimate.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.animationDelay || '0';
        entry.target.style.transitionDelay = `${delay}s`;
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Инициализирует переключение видимости краткого содержания Whitepaper
 */
function initWhitepaperSummaryToggle() {
  const button = document.getElementById('view-wp-summary-btn');
  const container = document.getElementById('wp-summary-container');
  const content = document.querySelector('.wp-summary-content');
  const floatingIcons = document.querySelectorAll('.floating-icon');
  
  if (!button || !container || !content) {
    console.warn('Whitepaper summary toggle elements not found');
    return;
  }

  const chevron = button.querySelector('.chevron-icon svg');
  
  // Первоначально скрываем контейнер
  container.style.height = '0';
  container.style.overflow = 'hidden';
  
  // Отслеживаем состояние
  let isExpanded = false;
  
  // Анимируем иконки с разной задержкой
  const animateIcons = (show) => {
    floatingIcons.forEach((icon, index) => {
      setTimeout(() => {
        if (show) {
          icon.classList.add('visible');
          icon.style.animationDelay = `${index * 0.2}s`;
        } else {
          icon.classList.remove('visible');
        }
      }, index * 100);
    });
  };
  
  button.addEventListener('click', () => {
    isExpanded = !isExpanded;
    
    // Анимируем кнопку
    button.classList.toggle('active', isExpanded);
    
    // Плавно вращаем иконку
    if (chevron) {
      chevron.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      chevron.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
    }
    
    if (isExpanded) {
      // Показываем декоративные элементы с задержкой
      container.classList.add('expanded');
      
      // Устанавливаем высоту и прозрачность одновременно для плавной анимации
      const contentHeight = content.scrollHeight;
      container.style.height = `${contentHeight}px`;
      container.style.overflow = 'hidden';
      content.style.opacity = '1';
      
      // Запускаем анимацию декораций
      setTimeout(() => {
        const leftDeco = document.querySelector('.left-deco');
        const rightDeco = document.querySelector('.right-deco');
        if (leftDeco) leftDeco.classList.add('visible');
        if (rightDeco) rightDeco.classList.add('visible');
      }, 200);
      
      // Запускаем анимацию иконок
      setTimeout(() => animateIcons(true), 400);
      
      // Добавляем золотое свечение для кнопки
      button.classList.add('glow');
      
      // Меняем текст кнопки с эффектом затухания/появления
      const btnText = button.querySelector('.btn-text');
      if (btnText) {
        btnText.style.opacity = '0';
        setTimeout(() => {
          btnText.textContent = 'Hide Whitepaper';
          btnText.style.opacity = '1';
        }, 200);
      }
      
    } else {
      // Плавно изменяем прозрачность и высоту одновременно
      content.style.transition = 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      content.style.opacity = '0';
      container.style.height = '0';
      
      // Останавливаем анимации
      animateIcons(false);
      const leftDeco = document.querySelector('.left-deco');
      const rightDeco = document.querySelector('.right-deco');
      if (leftDeco) leftDeco.classList.remove('visible');
      if (rightDeco) rightDeco.classList.remove('visible');
      
      // Удаляем золотое свечение с кнопки
      button.classList.remove('glow');
      
      // Меняем текст кнопки обратно
      const btnText = button.querySelector('.btn-text');
      if (btnText) {
        btnText.style.opacity = '0';
        setTimeout(() => {
          btnText.textContent = 'View Whitepaper';
          btnText.style.opacity = '1';
        }, 200);
      }
      
      // Удаляем класс expanded после завершения анимации
      setTimeout(() => {
        container.classList.remove('expanded');
      }, 600); // Увеличиваем тайм-аут для соответствия длительности анимации
    }
  });
  
  // Обрабатываем изменение размера окна для корректной высоты
  window.addEventListener('resize', () => {
    if (isExpanded) {
      const contentHeight = content.scrollHeight;
      container.style.height = `${contentHeight}px`;
    }
  });
}

/**
 * Инициализирует анимированные счетчики
 */
function initCounters() {
  const counters = document.querySelectorAll('.benefit-counter');
  if (!counters.length) return;
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const targetValue = parseInt(counter.dataset.target, 10);
        if (isNaN(targetValue)) return; // Пропускаем, если не число

        let currentValue = 0;
        const duration = 1500; // Длительность анимации в мс
        const increment = targetValue / (duration / 16); // ~60fps

        const updateCounter = () => {
          currentValue += increment;
          if (currentValue < targetValue) {
            counter.textContent = Math.ceil(currentValue).toLocaleString(); // Округляем вверх и форматируем
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = targetValue.toLocaleString(); // Конечное значение
          }
        };

        requestAnimationFrame(updateCounter);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}

/**
 * Инициализирует круговые индикаторы прогресса
 */
function initCircularProgress() {
  const progressCircles = document.querySelectorAll('.circular-progress .progress');
  if (!progressCircles.length) return;

  const radius = progressCircles[0].r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const circle = entry.target;
        const value = parseInt(circle.dataset.value, 10);
        if (!isNaN(value)) { // Проверяем, что значение - число
          const offset = circumference - (value / 100) * circumference;
          circle.style.strokeDashoffset = offset;
        }
        observer.unobserve(circle);
      }
    });
  }, { threshold: 0.5 });
  
  progressCircles.forEach(circle => {
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference; // Начинаем с 0
    observer.observe(circle);
  });
}

/**
 * Создает кнопку возврата на главную страницу
 * @returns {HTMLElement} Кнопка возврата
 */
function createHomeButton() {
  const button = document.createElement('a');
  button.href = '/';
  button.setAttribute('data-navigate', '');
  button.classList.add('home-button'); // Стили применяются из CSS
  button.innerHTML = ICONS.home; // Используем иконку из констант
  button.title = 'Back to Home';
  return button;
}

/**
 * Инициализирует обработчики событий на странице Whitepaper
 * @param {HTMLElement} container - Контейнер страницы
 */
function initWhitepaperEvents(container) {
  // Можно добавить другие обработчики, если нужно
}

// Экспорт функции по умолчанию
export default createWhitepaperPage; 