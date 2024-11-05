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
      <Text as="h1">Plexswap Termos de Serviço</Text>
      <Text as="h3">Última modificação: Nov 11, 2024</Text>
      <Text as="p">
        <Text as="span">
        Estes Termos de Serviço (o “Acordo”) estabelecem os termos e condições que regem seu acesso e uso da 
        Plataforma Plex, incluindo o site em
        </Text>
        <Link href="https://plexfinance.us">
          https://plexfinance.us 
        </Link>
        <Text as="span">
          e todos os subdomínios associados. Você deve ler atentamente este Acordo, pois ele regula o uso da 
          Plataforma. Ao acessar ou usar a Plataforma, você declara que leu, entendeu e concorda em estar 
          vinculado a este Acordo em sua totalidade. Caso não concorde, você não está autorizado a acessar ou 
          usar a Plataforma e deve abster-se de utilizá-la.
        </Text>
      </Text>

      <Text as="p" fontWeight="600">
        AVISO: Este Acordo contém informações importantes e inclui uma renúncia ao direito de buscar ação legal 
        em qualquer foro, o que pode impactar seus direitos em relação à resolução de disputas. A Plataforma 
        está disponível para você — e você deve acessá-la apenas — se concordar integralmente com estes termos.
      </Text>

      <Text as="h3">Introdução</Text>
      <Text as="p">
        A Plataforma oferece acesso a (a) um protocolo descentralizado em várias blockchains públicas, incluindo, 
        mas não se limitando, à BNB Chain e Ethereum, permitindo que os usuários negociem certos ativos digitais 
        compatíveis (o “Protocolo Plexswap” ou o “Protocolo”), entre outros serviços. A Plataforma é um, mas não 
        o único, meio de acessar o Protocolo.
      </Text>
      <Text as="p">
        Para acessar a Plataforma, você deve utilizar um software de carteira não custodial, que permite interagir 
        com blockchains públicas. Sua relação com o provedor de carteira não custodial é regida pelos termos de 
        serviço aplicáveis de terceiros, não por este Acordo. As carteiras não são operadas, mantidas ou afiliadas 
        a nós, e não temos custódia ou controle sobre o conteúdo de sua carteira, nem a capacidade de recuperar ou 
        transferir seus ativos. Ao conectar sua carteira à nossa Plataforma, você concorda em estar vinculado a 
        este Acordo e a todos os termos incorporados por referência.
      </Text>

      <Text as="h3">Modificação deste Acordo</Text>
      <Text as="p">
        <Text as="span">
          Reservamo-nos o direito de, a nosso exclusivo critério, modificar este Acordo periodicamente. Se realizarmos 
          modificações materiais, notificaremos você, atualizando a data no início do Acordo e mantendo uma versão 
          atual no endereço
        </Text>
        <Link href="https://docs-legal.plexfinance.us/termos-de-servico">
          https://docs-legal.plexfinance.us/termos-de-servico.
        </Link>
        <Text as="span">
          Todas as modificações entrarão em vigor quando publicadas, e seu acesso ou uso contínuo da Plataforma 
          confirmará sua aceitação das modificações. Caso não concorde com alguma modificação, você deve cessar 
          imediatamente o acesso e o uso da Plataforma.
        </Text>
      </Text>

      <Text as="h3">Descrição dos Serviços fornecidos pela Plataforma</Text>
      <Text as="p">A Plataforma oferece um meio web ou móvel de acesso ao Protocolo.</Text>

      <Text as="h3">Plataforma para acessar o Protocolo</Text>
      <Text as="p">
        A Plataforma é distinta do Protocolo e é um, mas não o único, meio de acesso ao Protocolo. O Protocolo 
        tem duas versões, designadas Core e Extended, cada uma composta de contratos inteligentes de código aberto 
        ou com código disponível, executados em várias blockchains públicas, como BNB Chain e Ethereum. A equipe 
        do Plexswap não controla nem opera qualquer versão do Protocolo em nenhuma rede blockchain. Ao utilizar 
        esta Plataforma, você reconhece que, com excessão do token PLEX-F e do token WAYA, você não está comprando 
        ou vendendo ativos digitais diretamente de nós. Nós não gerenciamos pools de liquidez nem controlamos a 
        execução de negociações no Protocolo. As taxas de negociação pagas pelos usuários são direcionadas a 
        provedores de liquidez independentes no Protocolo. A equipe do Plexswap tem uma política geral de não atuar 
        como provedora de liquidez em pools de liquidez do Protocolo, exceto em alguns pools que incluem o token 
        PLEX-F ou o token WAYA.
      </Text>

      <Text as="h3">Elegibilidade</Text>
      <Text as="p">
        Para acessar ou usar a Plataforma, você deve estar apto a firmar um contrato legalmente vinculativo conosco.
        Assim, você declara ter pelo menos a idade mínima para ser considerado maior de idade em sua jurisdição (por 
        exemplo, 18 anos no Brasil) e ter total direito, poder e autoridade para aceitar e cumprir os termos e 
        condições deste Acordo em seu nome e em nome de qualquer empresa ou entidade legal pela qual possa acessar 
        ou usar a Plataforma.
      </Text>
      <Text as="p">
        Além disso, você declara que não está (a) sujeito a sanções econômicas ou comerciais administradas ou aplicadas 
        por qualquer autoridade governamental, nem incluído em qualquer lista de partes proibidas ou restritas (incluindo, 
        mas não se limitando à lista mantida pelo Escritório de Controle de Ativos Estrangeiros do Departamento do 
        Tesouro dos EUA) ou (b) cidadão, residente ou registrado em uma jurisdição ou território sujeito a sanções 
        econômicas abrangentes impostas pelos Estados Unidos. Por fim, você declara que seu acesso e uso da Plataforma 
        estarão em total conformidade com todas as leis e regulamentos aplicáveis e que não utilizará a Plataforma para 
        conduzir, promover ou facilitar qualquer atividade ilegal.
      </Text>

      <Text as="h3">Direitos de Propriedade Intelectual</Text>
      <Text as="p">
        A Plataforma e as versões Core e Extended do Protocolo são compostas inteiramente por software de código aberto 
        ou com código disponível na plataforma GITHUB, operando em blockchains públicas.
      </Text>

      <Text as="h3">Direitos Adicionais</Text>
      <Text as="p">
        Reservamo-nos os seguintes direitos, que não constituem obrigações: (a) com ou sem notificação, modificar, 
        substituir, eliminar ou adicionar à Plataforma; (b) revisar, modificar, filtrar, desativar, excluir e remover 
        qualquer conteúdo e informações da Plataforma; e (c) cooperar com qualquer autoridade policial, ordem judicial 
        ou investigação governamental ou terceiro solicitando ou ordenando que divulguemos informações ou conteúdos 
        fornecidos por você.
      </Text>

      <Text as="h3">Atividades Proibidas</Text>
      <Text as="p">
        Você concorda em não se envolver, ou tentar se envolver, em qualquer uma das seguintes categorias de atividades 
        proibidas em relação ao seu acesso e uso da Plataforma:
      </Text>
      <ul>
        <li>
          Ocultação da Origem de Fundos. Atividade destinada a ocultar a origem de fundos, incluindo lavagem de dinheiro 
          ilícito e obtenção de benefícios por meio de evasão fiscal.
        </li>
        <li>
          Fraude e Distorção de Informações. Atividades fraudulentas ou enganosas, incluindo a apresentação de informações 
          falsas para obter propriedade de terceiros de forma ilícita.
        </li>
        <li>
          Manipulação de Mercado. Atividades que violam leis ou regulamentações aplicáveis à integridade dos mercados 
          de negociação, como práticas conhecidas como “rug pulls”, “pumping and dumping” e “wash trading”.
        </li>
        <li>
          Violação de Valores Mobiliários e Derivativos. Atividades que violam leis, regras ou regulamentos aplicáveis 
          ao comércio de valores mobiliários ou derivativos.
        </li>
        <li>
          Venda de Propriedade Roubada. Compra, venda ou transferência de itens roubados, fraudados ou obtidos sem 
          autorização.
        </li>
        <li>
          Mineração de Dados or Scraping. Uso de mineração de dados, robôs, "scraping" ou métodos similares de extração 
          de conteúdo ou informações da Plataforma.
        </li>
        <li>
          Qualquer Outra Conduta Ilegal. Atividades que violem leis, regras ou regulamentos aplicáveis do Brasil ou outra 
          jurisdição relevante.
        </li>
      </ul>

      <Text as="h3">Não Registrado na CVM ou Qualquer Outro Órgão</Text>
      <Text as="p">
        Nós não estamos registrados na Comissão de Valores Mobiliários do Brasil (CVM) ou qualquer outro órgão regulador.
        Você entende e reconhece que não intermediamos ordens de negociação em seu nome. Também não facilitamos a execução 
        ou liquidação de suas negociações, que ocorrem inteiramente nas blockchains públicas distribuídas, como Ethereum. 
        Como resultado, não garantimos (e não podemos) garantir os melhores preços de mercado ou a melhor execução por 
        meio da Plataforma ou ao usar nosso recurso de Roteador Inteligente, que roteia negociações apenas por meio de 
        pools de liquidez no Protocolo. Qualquer referência na Plataforma a “melhor preço” não constitui uma garantia 
        sobre os preços disponíveis através da Plataforma, no Protocolo ou em outro lugar.
      </Text>

      <Text as="h3">Não-Solicitação; Nenhum Conselho de Investimento</Text>
      <Text as="p">
        Você concorda e entende que: (a) todas as negociações que você enviar através da Plataforma são consideradas 
        não solicitadas, o que significa que são exclusivamente iniciadas por você; (b) você não recebeu nenhum conselho 
        de investimento de nossa parte em conexão com qualquer negociação, incluindo aquelas que você realiza por meio 
        da nossa API do Roteador Inteligente; e (c) nós não realizamos uma revisão de adequação de qualquer negociação 
        que você enviar.
      </Text>
      <Text as="p">
        Podemos fornecer informações sobre tokens na Plataforma obtidas a partir de dados de terceiros através de recursos 
        como avaliação de riscos e listas de tokens (que incluem a lista padrão de tokens da Plataforma). Também podemos 
        fornecer rótulos de aviso para certos tokens. A provisão de materiais informativos não torna as negociações desses 
        tokens solicitadas; não estamos tentando induzi-lo a realizar qualquer compra como resultado das informações 
        fornecidas. Todas essas informações fornecidas pela Plataforma são apenas para fins informativos e não devem ser 
        interpretadas como aconselhamento de investimento ou uma recomendação de que um determinado token seja um 
        investimento seguro ou sólido. Você não deve tomar, ou se abster de tomar, qualquer ação com base em qualquer 
        informação contida na Plataforma. Ao fornecer informações sobre tokens para sua conveniência, não fazemos nenhuma 
        recomendação de investimento para você, nem opinamos sobre os méritos de qualquer transação ou oportunidade. 
        Você é o único responsável por determinar se qualquer investimento, estratégia de investimento ou transação 
        relacionada é apropriada para você com base em seus objetivos de investimento pessoais, circunstâncias financeiras 
        e tolerância ao risco.
      </Text>

      <Text as="h3">Não-Custodiante e Nenhum Dever Fiduciário</Text>
      <Text as="p">
        A Plataforma é uma aplicação puramente não-custodial, o que significa que nunca temos custódia, posse ou controle 
        de seus ativos digitais em nenhum momento. Isso significa ainda que você é o único responsável pela custódia das 
        chaves privadas criptográficas das carteiras de ativos digitais que possui e nunca deve compartilhar suas 
        credenciais de carteira ou frase-semente com ninguém. Não aceitamos nenhuma responsabilidade por, ou obrigação 
        para com você, em conexão com o uso de uma carteira e não fazemos representações ou garantias sobre como a 
        Plataforma funcionará com qualquer carteira específica. Da mesma forma, você é o único responsável por qualquer 
        carteira associada e não somos responsáveis por quaisquer atos ou omissões de sua parte em conexão ou como 
        resultado de sua carteira ser comprometida.
      </Text>
      <Text as="p">
        Este Acordo não tem a intenção de, e não cria ou impõe, quaisquer deveres fiduciários sobre nós. Na máxima 
        extensão permitida por lei, você reconhece e concorda que não temos deveres ou responsabilidades fiduciárias 
        para com você ou qualquer outra parte, e que, na medida em que tais deveres ou responsabilidades possam ser 
        previstos por lei, esses deveres e responsabilidades são, por meio deste, irrevogavelmente renunciados e 
        eliminados. Você concorda ainda que os únicos deveres e obrigações que devemos a você são aqueles expressamente 
        estabelecidos neste Acordo.
      </Text>

      <Text as="h3">Conformidade e Obrigações Fiscais</Text>
      <Text as="p">
        A Plataforma pode não estar disponível ou apropriada para uso em sua jurisdição. Ao acessar ou usar a Plataforma, 
        você concorda que é o único e totalmente responsável pela conformidade com todas as leis e regulamentos que podem 
        se aplicar a você.
      </Text>
      <Text as="p">
        Especificamente, seu uso da Plataforma ou do Protocolo pode resultar em várias consequências fiscais, como 
        imposto de renda sobre ganho de capital, imposto sobre valor agregado, imposto sobre bens e serviços, ou 
        imposto sobre vendas em certas jurisdições. É sua responsabilidade determinar se os impostos se aplicam a quaisquer 
        transações que você inicie ou receba e, se sim, relatar e/ou remeter o imposto correto à autoridade fiscal apropriada.
      </Text>

      <Text as="h3">Assunção de Risco</Text>
      <Text as="p">
        Ao acessar e usar a Plataforma, você declara que é financeiramente e tecnicamente sofisticado o suficiente para 
        entender os riscos inerentes associados ao uso de sistemas de criptoativos, baseados em blockchain, e que possui 
        conhecimento prático sobre o uso e as complexidades de ativos digitais como ether (ETH) e outros tokens digitais, 
        como aqueles que seguem o Padrão de Token Ethereum (ERC-20), ou padrões de quaisquer outros tokens digitais que 
        são negociados na Plataforma.
      </Text>
      <Text as="p">
        Você reconhece que os mercados de ativos digitais ainda estão se desenvolvendo e são altamente voláteis, 
        influenciados por vários fatores de risco, incluindo adoção, especulação, tecnologia, segurança e regulação. 
        Você entende que qualquer pessoa pode criar tokens, incluindo versões falsificadas de tokens existentes ou 
        tokens que afirmam falsamente representar projetos legítimos, e aceita o risco de potencialmente negociar tais 
        tokens por engano. Além disso, os chamados "stablecoins" podem não ser tão estáveis quanto afirmado, podem 
        carecer de "colateralização" total ou adequada, e podem ser vulneráveis a pânicos ou súbitas corridas de liquidez.
      </Text>
      <Text as="p">
        Além disso, você entende que transações de contratos inteligentes se executam e se liquidam automaticamente, e que 
        transações baseadas em blockchain são irreversíveis quando confirmadas. Você reconhece e aceita que o custo e a 
        velocidade de transacionar com criptoativos, como Ethereum, são variáveis e podem aumentar drasticamente a qualquer 
        momento. Você também reconhece e aceita o risco de escolher negociar em Modos Especialistas, que podem expô-lo a 
        desvios de preços potencialmente significativos e custos mais altos.
      </Text>
      <Text as="p">
        Se você agir como um provedor de liquidez para o Protocolo através da Plataforma, você entende que seus ativos 
        digitais podem perder parte ou todo seu valor enquanto estão fornecidos ao Protocolo através da Plataforma devido 
        à flutuação dos preços dos tokens em um par de negociação ou pool de liquidez.
      </Text>
      <Text as="p">
        Finalmente, você entende que não criamos, possuímos ou operamos  cross-chain "Bridges" e não fazemos nenhuma 
        representação ou garantia sobre a segurança ou solidez de qualquer "Bridge", incluindo seu uso para governança 
        da Plataforma.
      </Text>
      <Text as="p">
        Em resumo, você reconhece que não somos responsáveis por nenhuma dessas variáveis ou riscos, não possuímos ou 
        controlamos o Protocolo e não podemos ser responsabilizados por quaisquer perdas resultantes que você experimente 
        ao acessar ou usar a Plataforma. Consequentemente, você entende e concorda em assumir total responsabilidade por 
        todos os riscos de acessar e usar a Plataforma para interagir com o Protocolo.
      </Text>

      <Text as="h3">Recursos e Promoções de Terceiros</Text>
      <Text as="p">
        A Plataforma pode incluir links ou referências a recursos de terceiros, como informações, produtos ou serviços, 
        que não possuímos nem controlamos, bem como promoções de terceiros. Não endossamos nem assumimos responsabilidade 
        por esses recursos ou promoções. Ao acessá-los ou participar de promoções relacionadas, você o faz por sua conta 
        e risco, reconhecendo que este Acordo não rege suas interações com terceiros. Você nos isenta expressamente de 
        qualquer responsabilidade decorrente de seu uso desses recursos ou participação em promoções.
      </Text>

      <Text as="h3">Renúncia à Reivindicações</Text>
      <Text as="p">
        Como abordado em detalhes, este Acordo estabelece uma limitação abrangente sobre a responsabilidade da Plataforma, 
        mesmo em casos em que resultados negativos possam surgir devido a quaisquer falhas ou malfuncionamentos da própria 
        Plataforma. Ao concordar com estes termos, o usuário renuncia expressamente a qualquer direito de buscar 
        reivindicações ou compensações contra quaisquer danos decorrentes ou, de qualquer forma, relacionados ao uso da 
        Plataforma em qualquer fórum judicial ou extrajudicial, incluindo, mas, não se limitando, os tribunais ordinários. 
        Em nenhuma circunstância a plataforma será responsabilizada por quaisquer consequências adversas decorrentes das 
        atividades de investimento do usuário ou de quaisquer problemas operacionais na plataforma. O usuário, assim, 
        assume total responsabilidade por todos os resultados associados ao uso da Plataforma.
      </Text>

      <Text as="h3">Sem Garantias</Text>
      <Text as="p">
        A Plataforma é fornecida na base "COMO ESTÁ" e "COMO DISPONÍVEL". NA MÁXIMA EXTENSÃO PERMITIDA POR LEI, ISENTAMOS 
        QUAISQUER REPRESENTAÇÕES E GARANTIAS DE QUALQUER NATUREZA, SEJAM ELAS EXPRESSAS, IMPLÍCITAS OU ESTATUTÁRIAS, 
        INCLUINDO (MAS NÃO SE LIMITANDO A) AS GARANTIAS DE COMERCIALIZAÇÃO E ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO. Você 
        reconhece e concorda que o uso da Plataforma é por sua conta e risco. Não representamos nem garantimos que o acesso 
        à Plataforma será contínuo, ininterrupto, oportuno ou seguro; que as informações contidas na Plataforma serão 
        precisas, confiáveis, completas ou atuais; ou que a Plataforma estará livre de erros, falhas, vírus ou outros 
        elementos prejudiciais. Nenhum conselho, informação ou declaração que fizermos deve ser interpretado como a criação 
        de qualquer garantia em relação à Plataforma. Não endossamos, garantimos ou assumimos responsabilidade por 
        quaisquer anúncios, ofertas ou declarações feitas por terceiros sobre a Plataforma.
      </Text>
      <Text as="p">
        Da mesma forma, o Protocolo é fornecido "COMO ESTÁ", por sua conta e risco, e sem garantias de qualquer tipo. 
        Embora tenhamos contribuído em parte do código do Protocolo, não fornecemos, possuímos ou controlamos o 
        Protocolo, que opera de forma autônoma por meio de contratos inteligentes implantados em várias blockchains. 
        Nenhum desenvolvedor ou entidade envolvida na criação do Protocolo será responsável por quaisquer reivindicações 
        ou danos associados ao seu uso, incapacidade de uso ou interação com outros usuários do Protocolo, incluindo 
        quaisquer danos diretos, indiretos, incidentais, especiais, exemplares, punitivos ou consequenciais, ou perda 
        de lucros, criptomoedas, tokens ou qualquer outra coisa de valor. Não endossamos, garantimos ou assumimos 
        responsabilidade por quaisquer anúncios, ofertas ou declarações feitas por terceiros sobre a Plataforma.
      </Text>

      <Text as="h3">Limitação de Responsabilidade</Text>
      <Text as="p">
         EM NENHUMA CIRCUNSTÂNCIA NÓS E TODO O TIME ENVOLVIDO COM A PLATAFORMA, INCLUINDO SUBSIDIÁRIAS, SEREMOS
         RESPONSÁVEIS PERANTE VOCÊ POR QUAISQUER DANOS INDIRETOS, PUNITIVOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS
         OU EXEMPLARES, INCLUINDO (MAS NÃO SE LIMITANDO A) DANOS POR PERDA DE LUCROS, DADOS OU OUTROS BENS INTANGÍVEIS, 
         DECORRENTES DE OU RELACIONADOS A QUALQUER ACESSO OU USO DA INTERFACE, NEM SEREMOS RESPONSÁVEIS POR QUAISQUER 
         DANOS, PERDAS OU LESÕES RESULTANTES DE HACKING, MANIPULAÇÃO OU OUTRO ACESSO OU USO NÃO AUTORIZADO DA INTERFACE 
         OU DAS INFORMAÇÕES CONTIDAS NELA. NÃO ASSUMIMOS NENHUMA RESPONSABILIDADE OU OBRIGAÇÃO POR QUAISQUER: 
         (A) ERROS OU INEXATIDÕES DE CONTEÚDO; (B) LESÕES PESSOAIS OU DANOS A PROPRIEDADE, DE QUALQUER NATUREZA, 
         RESULTANTES DE QUALQUER ACESSO OU USO DA INTERFACE; (C) ACESSO OU USO NÃO AUTORIZADO DE QUALQUER SERVIDOR OU 
         BANCO DE DADOS SEGURO SOB NOSSO CONTROLE, OU O USO DE QUALQUER INFORMAÇÃO OU DADOS ARMAZENADOS NELA; 
         (D) INTERRUPÇÃO OU CESSAÇÃO DA FUNÇÃO RELACIONADA À INTERFACE; (E) VÍRUS, CAVALOS DE TRÓIA OU SEMELHANTES QUE 
         POSSAM SER TRANSMITIDOS PARA OU ATRAVÉS DA INTERFACE; (F) ERROS OU OMISSÕES EM, OU PERDA OU DANOS INCORRIDOS 
         COMO RESULTADO DO USO DE, QUALQUER CONTEÚDO DISPONIBILIZADO ATRAVÉS DA INTERFACE; E (G) A CONDUTA DIFAMATÓRIA, 
         OFENSIVA OU ILEGAL DE QUALQUER TERCEIRO.
      </Text>

      <Text as="h3">Resolução de Disputas</Text>
      <Text as="p">
        Envidaremos todos os esforços razoáveis para resolver quaisquer disputas potenciais por meio de negociações 
        informais de boa-fé. Em caso de disputa, você deve entrar em contato conosco por e-mail em business@plexfinance.us 
        para iniciar este processo. Caso esses esforços não resultem em uma resolução, você reconhece e concorda 
        expressamente que este resultado será considerado final, e nenhuma ação adicional poderá ser buscada em qualquer 
        outro fórum legal.
      </Text>

      <Text as="h3">Acordo Integral</Text>
      <Text as="p">
        Estes termos constituem o acordo integral entre você e nós em relação ao objeto deste. Este Acordo substitui 
        todos e quaisquer acordos escritos e orais anteriores ou contemporâneos, comunicações e outros entendimentos
        (se houver) relacionados ao objeto dos termos.
      </Text>

      <Text as="p">
        Se o usuário encontrar alguma dificuldade na interpretação das limitações de seus direitos conforme descrito 
        neste acordo, é fortemente recomendado que consulte um profissional jurídico qualificado. Este passo é crucial 
        para garantir uma compreensão clara das obrigações e restrições do usuário.
      </Text>

      <Text as="h3">Reconhecimento da Responsabilidade</Text>
      <Text as="p">
        Caso, ao analisar este Acordo, você conclua que ele estabelece um quadro excessivamente severo em relação 
        ao usuário, isentando a Plataforma de quase todas as responsabilidades, isso indicará que você leu o Acordo com 
        atenção. Nessa hipótese, se você discordar dessa abordagem, deverá abster-se completamente de utilizar a Plataforma.
      </Text>

    </Container>
  )
}

export default TermsOfService
