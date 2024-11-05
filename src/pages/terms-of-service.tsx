import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  margin: 50px auto;
  padding: 16px;
`;

const Text = styled.p<{ as?: string; fontWeight?: string }>`
  font-size: ${({ as }) => (as === 'h1' ? '2.25rem' : as === 'h3' ? '1.25rem' : '1rem')};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  opacity: ${({ as }) => (as === 'p' ? '0.94' : '1')};
  margin-bottom: ${({ as }) => (as === 'p' ? '1em' : '0')};
  line-height: ${({ as }) => (as === 'p' ? '24px' : 'normal')};
  margin: ${({ as }) => (as === 'h3' ? '1em 0 0.5em' : '0')};
  color: #444444;
`;

const Link = styled.a`
  display: inline !important;
  margin-left: 4px;
  margin-right: 4px;
  color: #F5A700;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;


export const Container = styled(Flex)`
  display: grid;
  max-width: 650px;
  margin: 50px auto;
  padding: 0px 16px;

  h1 {
    font-size: 2.25rem;
    font-width: bold;
  }

  h3 {
    margin: 1em 0px 0.5em;
    font-weight: bold;
  }

  p {
    opacity: 0.94;
    margin-bottom: 1em;
    line-height: 24px;
  }

  li {
    margin: 0.5em 0px 0px 1em;
${({ theme }) => theme.colors.text};
  }
`

const TermsOfService = () => {
  return (
    <Container>
      <Text as="h1">Plexswap Terms of Service</Text>
      <Text as="h3">Last modified: Nov 11, 2024</Text>
      <Text as="p">
        <Text as="span">
        These Terms of Service (the “Agreement”) outline the terms and conditions governing your access to and use 
        of the Plex Platform, which includes the website at
        </Text>
        <Link href="https://plexfinance.us">
          https://plexfinance.us 
        </Link>
        <Text as="span">
          and all associated subdomains. You must read this Agreement carefully as it governs your use
          of the Platform. By accessing or using the Platform, you signify that you have read, understand, and agree 
          to be bound by this Agreement in its entirety. If you do not agree, you are not authorized to access or 
          use the Platform and should not use the Platform.
        </Text>
      </Text>

      <Text as="p" fontWeight="600">
        NOTICE: This Agreement includes critical information and a waiver of the right to pursue legal action in any 
        forum, affecting your rights concerning the resolution of disputes. The Platform is only available to you — and 
        you should only access the Platform — if you agree completely with these terms.
      </Text>

      <Text as="h3">Introduction</Text>
      <Text as="p">
        The Platform provides access to (a) a decentralized protocol on various public blockchains, including but not
        limited to BNB Chain and Ethereum, that allow users to trade certain compatible digital assets (“the
        Plexswap protocol” or the “Protocol”), among other services. The Platform is one, but not the exclusive, means
        of accessing the Protocol.
      </Text>
      <Text as="p">
        To access the Platform, you must use non-custodial wallet software, which allows you to interact with public
        blockchains. Your relationship with that non-custodial wallet provider is governed by the applicable terms of
        service of that third party, not this Agreement. Wallets are not operated by, maintained by, or affiliated with
        us, and we do not have custody or control over the contents of your wallet and have no ability to retrieve or
        transfer its contents. By connecting your wallet to our Platform, you agree to be bound by this Agreement and all
        of the terms incorporated herein by reference.
      </Text>

      <Text as="h3">Modification of this Agreement</Text>
      <Text as="p">
        <Text as="span">
          We reserve the right, in our sole discretion, to modify this Agreement from time to time. If we make any
          material modifications, we will notify you by updating the date at the top of the Agreement and by maintaining
          a current version of the Agreement at
        </Text>
        <Link href="https://docs-legal.plexfinance.us/terms-of-service">
          https://docs-legal.plexfinance.us/terms-of-service.
        </Link>
        <Text as="span">
          All modifications will be effective when they are posted, and your continued accessing or use of the Platform
          will serve as confirmation of your acceptance of those modifications. If you do not agree with any
          modifications to this Agreement, you must immediately stop accessing and using the Platform.
        </Text>
      </Text>

      <Text as="h3">Description of Services provided through the Platform</Text>
      <Text as="p">The Platform provides a web or mobile-based means of accessing the Protocol.</Text>

      <Text as="h3">Platform for accessing Protocol</Text>
      <Text as="p">
        The Platform is distinct from the Protocol and is one, but not the exclusive, means of accessing the Protocol.
        The Protocol itself has two versions, designated as Core and Extended, each of which comprises open-source or
        source-available self-executing smart contracts that are deployed on various public blockchains, such as BNB
        Chain and Ethereum. Plexswap team does not control or operate any version of the Protocol on any blockchain
        network. By using this Platform, you acknowledge that, apart from the PLEX-F token, you are not buying or selling 
        digital assets directly from us. We do not manage liquidity pools or control trade execution within the 
        Protocol. Trade fees paid by users are directed to liquidity providers on the Protocol, who are independent 
        third parties. The Plexswap team has a general policy of not acting as a liquidity provider in any of the 
        Protocol's liquidity pools, with the exception of some pools that include the PLEX-F token or WAYA token.
      </Text>

      <Text as="h3">Eligibility</Text>
      <Text as="p">
        To access or use the Platform, you must be able to form a legally binding contract with us. Accordingly, you
        represent that you are at least the age of majority in your jurisdiction (e.g., 18 years old in the United
        States) and have the full right, power, and authority to enter into and comply with the terms and conditions of
        this Agreement on behalf of yourself and any company or legal entity for which you may access or use the
        Platform.
      </Text>
      <Text as="p">
        You further represent that you are not (a) the subject of economic or trade sanctions administered or enforced
        by any governmental authority or otherwise designated on any list of prohibited or restricted parties (including
        but not limited to the list maintained by the Office of Foreign Assets Control of the U.S. Department of the
        Treasury) or (b) a citizen, resident, or organized in a jurisdiction or territory that is the subject of
        comprehensive country-wide, territory-wide, or regional economic sanctions by the United States. Finally, you
        represent that your access and use of the Platform will fully comply with all applicable laws and regulations,
        and that you will not access or use the Platform to conduct, promote, or otherwise facilitate any illegal
        activity.
      </Text>

      <Text as="h3">Intellectual Property Rights</Text>
      <Text as="p">
        The Platform and the versions Core and Extended of the Protocol are comprised entirely of open-source or
        source-available software running on public blockchains.
      </Text>

      <Text as="h3">Additional Rights</Text>
      <Text as="p">
        We reserve the following rights, which do not constitute obligations of ours: (a) with or without notice to you,
        to modify, substitute, eliminate or add to the Platform; (b) to review, modify, filter, disable, delete and
        remove any and all content and information from the Platform; and (c) to cooperate with any law enforcement,
        court or government investigation or order or third party requesting or directing that we disclose information
        or content or information that you provide.
      </Text>

      <Text as="h3">Prohibited Activity</Text>
      <Text as="p">
        You agree not to engage in, or attempt to engage in, any of the following categories of prohibited activity in
        relation to your access and use of the Platform:
      </Text>
      <ul>
      <li>
          Conceal Origin of Funds. Activity aimed at obscuring the origin of funds, including the laundering of illicit 
          funds and the pursuit of benefits through tax evasion from tax authorities.
        </li>
        <li>
          Fraud and Misrepresentation. Activity that seeks to defraud us or any other person or entity, including (but
          not limited to) providing any false, inaccurate, or misleading information in order to unlawfully obtain the
          property of another.
        </li>
        <li>
          Market Manipulation. Activity that violates any applicable law, rule, or regulation concerning the integrity
          of trading markets, including (but not limited to) the manipulative tactics commonly known as “rug pulls”,
          pumping and dumping, and wash trading.
        </li>
        <li>
          Securities and Derivatives Violations. Activity that violates any applicable law, rule, or regulation
          concerning the trading of securities or derivatives, including (but not limited to) the unregistered offering
          of securities and the offering of leveraged and margined commodity products to retail customers in the United
          States.
        </li>
        <li>
          Sale of Stolen Property. Buying, selling, or transferring of stolen items, fraudulently obtained items, items
          taken without authorization, and/or any other illegally obtained items.
        </li>
        <li>
          Data Mining or Scraping. Activity that involves data mining, robots, scraping, or similar data gathering or
          extraction methods of content or information from the Platform.
        </li>
        <li>
          Any Other Unlawful Conduct. Activity that violates any applicable law, rule, or regulation of the United
          States or another relevant jurisdiction, including (but not limited to) the restrictions and regulatory
          requirements imposed by U.S. law.
        </li>
      </ul>

      <Text as="h3">Not Registered with the SEC or Any Other Agency</Text>
      <Text as="p">
        We are not registered with the U.S. Securities and Exchange Commission as a national securities exchange or in
        any other capacity. You understand and acknowledge that we do not broker trading orders on your behalf. We also
        do not facilitate the execution or settlement of your trades, which occur entirely on the public distributed
        blockchains like Ethereum. As a result, we do not (and cannot) guarantee market best pricing or best execution
        through the Platform or when using our Smart Router feature, which routes trades across liquidity pools on the
        Protocol only. Any references in the Platform to “best price” do not constitute a representation or warranty
        about pricing available through the Platform, on the Protocol, or elsewhere.
      </Text>

      <Text as="h3">Non-Solicitation; No Investment Advice</Text>
      <Text as="p">
        You agree and understand that: (a) all trades you submit through the Platform are considered unsolicited, which
        means that they are solely initiated by you; (b) you have not received any investment advice from us in
        connection with any trades, including those you place via our Smart Router API; and (c) we do not conduct a
        suitability review of any trades you submit.
      </Text>
      <Text as="p">
        We may provide information about tokens in the Platform sourced from third-party data partners through features
        such as rarity scores, token explorer or token lists (which includes the Plexswap default token list and
        Plexswap expanded list). We may also provide warning labels for certain tokens. The
        provision of informational materials does not make trades in those tokens solicited; we are not attempting to
        induce you to make any purchase as a result of information provided. All such information provided by the
        Platform is for informational purposes only and should not be construed as investment advice or a recommendation
        that a particular token is a safe or sound investment. You should not take, or refrain from taking, any action
        based on any information contained in the Platform. By providing token information for your convenience, we do
        not make any investment recommendations to you or opine on the merits of any transaction or opportunity. You
        alone are responsible for determining whether any investment, investment strategy or related transaction is
        appropriate for you based on your personal investment objectives, financial circumstances, and risk tolerance.
      </Text>

      <Text as="h3">Non-Custodial and No Fiduciary Duties</Text>
      <Text as="p">
        The Platform is a purely non-custodial application, meaning we do not ever have custody, possession, or control
        of your digital assets at any time. It further means you are solely responsible for the custody of the
        cryptographic private keys to the digital asset wallets you hold and you should never share your wallet
        credentials or seed phrase with anyone. We accept no responsibility for, or liability to you, in connection with
        your use of a wallet and make no representations or warranties regarding how the Platform will operate with any
        specific wallet. Likewise, you are solely responsible for any associated wallet and we are not liable for any
        acts or omissions by you in connection with or as a result of your wallet being compromised.
      </Text>
      <Text as="p">
        This Agreement is not intended to, and does not, create or impose any fiduciary duties on us. To the fullest
        extent permitted by law, you acknowledge and agree that we owe no fiduciary duties or liabilities to you or any
        other party, and that to the extent any such duties or liabilities may exist at law or in equity, those duties
        and liabilities are hereby irrevocably disclaimed, waived, and eliminated. You further agree that the only
        duties and obligations that we owe you are those set out expressly in this Agreement.
      </Text>

      <Text as="h3">Compliance and Tax Obligations</Text>
      <Text as="p">
        The Platform may not be available or appropriate for use in your jurisdiction. By accessing or using the Platform,
        you agree that you are solely and entirely responsible for compliance with all laws and regulations that may
        apply to you.
      </Text>
      <Text as="p">
        Specifically, your use of the Platform or the Protocol may result in various tax consequences, such as income or
        capital gains tax, value-added tax, goods and services tax, or sales tax in certain jurisdictions.It is your
        responsibility to determine whether taxes apply to any transactions you initiate or receive and, if so, to
        report and/or remit the correct tax to the appropriate tax authority.
      </Text>

      <Text as="h3">Assumption of Risk</Text>
      <Text as="p">
        By accessing and using the Platform, you represent that you are financially and technically sophisticated enough
        to understand the inherent risks associated with using cryptographic and blockchain-based systems, and that you
        have a working knowledge of the usage and intricacies of digital assets such as ether (ETH), so-called
        stablecoins, and other digital tokens such as those following the Ethereum Token Standard (ERC-20), or standards
        of any other digital tokens which are transacted on Plexswap.
      </Text>
      <Text as="p">
        You acknowledge that the markets for digital assets are still developing and highly volatile, influenced by 
        various risk factors, including adoption, speculation, technology, security, and regulation. You understand that 
        anyone can create tokens, including counterfeit versions of existing tokens or tokens that falsely claim to 
        represent legitimate projects, and you accept the risk of potentially trading such tokens by mistake. 
        Additionally, so-called stablecoins may not be as stable as claimed, may lack full or adequate collateralization, 
        and could be vulnerable to panics or sudden liquidity runs.
      </Text>
      <Text as="p">
        Further, you understand that smart contract transactions automatically execute and settle, and that
        blockchain-based transactions are irreversible when confirmed. You acknowledge and accept that the cost and
        speed of transacting with cryptographic and blockchain-based systems such as Ethereum are variable and may
        increase dramatically at any time. You further acknowledge and accept the risk of selecting to trade in Expert
        Modes, which can expose you to potentially significant price slippage and higher costs.
      </Text>
      <Text as="p">
        If you act as a liquidity provider to the Protocol through the Platform, you understand that your digital assets
        may lose some or all of their value while they are supplied to the Protocol through the Platform due to the
        fluctuation of prices of tokens in a trading pair or liquidity pool.
      </Text>
      <Text as="p">
        Finally, you understand that we do not create, own, or operate cross-chain bridges and we do not make any
        representation or warranty about the safety or soundness of any cross-chain bridge, including its use for
        Plexswap governance.
      </Text>
      <Text as="p">
        In summary, you acknowledge that we are not responsible for any of these variables or risks, do not own or
        control the Protocol, and cannot be held liable for any resulting losses that you experience while accessing or
        using the Platform. Accordingly, you understand and agree to assume full responsibility for all of the risks of
        accessing and using the Platform to interact with the Protocol.
      </Text>

      <Text as="h3">Third-Party Resources and Promotions</Text>
      <Text as="p">
        The Platform may include links or references to third-party resources, such as information, products, or services, 
        that we neither own nor control, as well as third-party promotions. We do not endorse or assume responsibility 
        for these resources or promotions. By accessing them or participating in related promotions, you do so at your
        own risk, acknowledging that this Agreement does not govern your interactions with third parties. You expressly 
        release us from any liability arising from your use of such resources or participation in promotions.
      </Text>

      <Text as="h3">Release of Claims</Text>
      <Text as="p">
        As demonstrated in detail, this Agreement sets forth a comprehensive limitation on the Platform's liability, 
        even in instances where negative outcomes may arise due to any failures or malfunctions of the Platform itself. 
        By agreeing to these terms, the user expressly waives any right to pursue claims or remedies against any damages 
        arising from or, in any way, relating to your use of the Platform in any judicial or extrajudicial forum, including 
        but not limited to ordinary courts. Under no circumstances shall the platform be held liable for any adverse 
        consequences stemming from the user's investment activities or from any operational issues on the platform. The 
        user thereby assumes full responsibility for all results associated with their use of the Platform.
      </Text>

      <Text as="h3">Indemnity</Text>
      <Text as="p">
        You agree to hold harmless, release, defend, and indemnify us and our officers, directors, employees,
        contractors, agents, affiliates, and subsidiaries from and against all claims, damages, obligations, losses,
        liabilities, costs, and expenses arising from: (a) your access and use of the Platform; (b) your violation of any
        term or condition of this Agreement, the right of any third party, or any other applicable law, rule, or
        regulation; and (c) any other party's access and use of the Platform with your assistance or using any device or
        account that you own or control.
      </Text>

      <Text as="h3">No Warranties</Text>
      <Text as="p">
        The Platform is provided on an "AS IS" and "AS AVAILABLE" basis. TO THE FULLEST EXTENT PERMITTED BY LAW, WE
        DISCLAIM ANY REPRESENTATIONS AND WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING (BUT
        NOT LIMITED TO) THE WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. You acknowledge and
        agree that your use of the Platform is at your own risk. We do not represent or warrant that access to the
        Platform will be continuous, uninterrupted, timely, or secure; that the information contained in the Platform will
        be accurate, reliable, complete, or current; or that the Platform will be free from errors, defects, viruses, or
        other harmful elements. No advice, information, or statement that we make should be treated as creating any
        warranty concerning the Platform. We do not endorse, guarantee, or assume responsibility for any advertisements,
        offers, or statements made by third parties concerning the Platform.
      </Text>
      <Text as="p">
        Similarly, the Protocol is provided "AS IS", at your own risk, and without warranties of any kind. Although we
        contributed to the initial code for the Protocol, we do not provide, own, or control the Protocol, which is run
        autonomously without any headcount by smart contracts deployed on various blockchains.  No developer or entity 
        involved in creating the Protocol will be liable for any claims or damages whatsoever
        associated with your use, inability to use, or your interaction with other users of, the Protocol, including any
        direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits,
        cryptocurrencies, tokens, or anything else of value. We do not endorse, guarantee, or assume responsibility for
        any advertisements, offers, or statements made by third parties concerning the Platform.
      </Text>

      <Text as="h3">Limitation of Liability</Text>
      <Text as="p">
        UNDER NO CIRCUMSTANCES SHALL WE OR ANY OF OUR OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, AFFILIATES,
        OR SUBSIDIARIES BE LIABLE TO YOU FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY
        DAMAGES, INCLUDING (BUT NOT LIMITED TO) DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE
        PROPERTY, ARISING OUT OF OR RELATING TO ANY ACCESS OR USE OF THE INTERFACE, NOR WILL WE BE RESPONSIBLE FOR ANY
        DAMAGE, LOSS, OR INJURY RESULTING FROM HACKING, TAMPERING, OR OTHER UNAUTHORIZED ACCESS OR USE OF THE INTERFACE
        OR THE INFORMATION CONTAINED WITHIN IT. WE ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY: (A) ERRORS, MISTAKES,
        OR INACCURACIES OF CONTENT; (B) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM ANY
        ACCESS OR USE OF THE INTERFACE; (C) UNAUTHORIZED ACCESS OR USE OF ANY SECURE SERVER OR DATABASE IN OUR CONTROL,
        OR THE USE OF ANY INFORMATION OR DATA STORED THEREIN; (D) INTERRUPTION OR CESSATION OF FUNCTION RELATED TO THE
        INTERFACE; (E) BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH THE INTERFACE;
        (F) ERRORS OR OMISSIONS IN, OR LOSS OR DAMAGE INCURRED AS A RESULT OF THE USE OF, ANY CONTENT MADE AVAILABLE
        THROUGH THE INTERFACE; AND (G) THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY.
      </Text>

      <Text as="h3">Dispute Resolution</Text>
      <Text as="p">
        We will make all reasonable efforts to resolve any potential disputes through informal, good-faith negotiations. 
        In the event of a dispute, you are required to contact us by email at business@plexfinance.us to initiate this 
        process. Should these efforts not result in a resolution, you expressly acknowledge and agree that this outcome 
        shall be deemed final, and no further action may be pursued in any other legal forum.
      </Text>

      <Text as="h3">Entire Agreement</Text>
      <Text as="p">
        These terms constitute the entire agreement between you and us with respect to the subject matter hereof. This
        Agreement supersedes any and all prior or contemporaneous written and oral agreements, communications and other
        understandings (if any) relating to the subject matter of the terms.
      </Text>

      <Text as="p">
        If the user encounters any difficulty in interpreting the limitations of their rights as outlined in this agreement, 
        it is strongly recommended to consult a qualified legal professional. This step is crucial to ensure a clear 
        understanding of the user’s obligations and restrictions.
      </Text>

      <Text as="h3">Acknowledgment of Responsibility</Text>
      <Text as="p">
        If, upon reviewing this Agreement, you determine that it establishes an excessively stringent framework towards 
        the user, exempting the Platform from nearly all responsibilities, it will indicate that you have read the Agreement 
        thoroughly. In such case, if you disagree with this approach, you must refrain entirely from using the Platform.
      </Text>
    </Container>
  )
}

export default TermsOfService
