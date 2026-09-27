(function () {
    function tpl(str, data) {
        return str.replace(/\{\{\s*(\w+)\s*\}\}/g, function (_, key) {
            return (data[key] !== undefined && data[key] !== null) ? data[key] : '';
        });
    }
    // EDITE ESTES DADOS: nomes, IPs e enderecos ficam todos neste bloco.
    // Para incluir um item, copie um objeto. Use href: '' enquanto ainda nao tiver o link.
    var content = {
        drivers: [
            { nome: 'Brother DCP-L5652DN', href: '../assets/drivers/dcp-l5652dn.EXE' },
            { nome: 'JetDesign T250 - Plotter', href: '../assets/drivers/jetdesign-plotter.exe'},
        ],
        printers: [
            { nome: 'Konica Color c287 - 01', ip: '192.168.1.129' },
            { nome: 'konica Color c227 - 02', ip: '192.168.1.158' },
            { nome: 'Konica P/B e364 - 01', ip: '192.168.1.246' },
            { nome: 'Konica P/B e364 - 02', ip: '192.168.1.60' },
            { nome: 'Konica P/B 458e - 03', ip: '192.168.1.146' },
            { nome: 'Konica P/B 458e - 04', ip: '192.168.1.193' },
            { nome: 'HP DesignJet T250 - Protter', ip: '192.168.1.108' },
        ],
        linkGroups: [
            {
                nome: 'CERTIDÕES NEGATIVAS',
                open: true,
                links: [
                    { nome: 'NEGATIVA ESTADUAL', href: 'https://sistemas.tjes.jus.br/certidaonegativa/sistemas/certidao/CERTIDAOPESQUISA.cfm ' },
                    { nome: 'NEGATIVA FEDERAL UNIFICADA', href: 'https://certidao-unificada.cjf.jus.br/#/solicitacao-certidao ' },

                    { nome: '*CERTIDÕES NEGATIVAS INDIVIDUAIS*' },


                    { nome: 'TRF1', href: 'https://sistemas.trf1.jus.br/certidao/#/solicitacao' },
                    { nome: 'TRF2', href: 'https://certidoes.trf2.jus.br/certidoes/#/principal/solicitar' },
                    { nome: 'TRF3', href: 'https://web.trf3.jus.br/certidao-regional/CertidaoCivelEleitoralCriminal/SolicitarDadosCertidao' },
                    { nome: 'TRF4', href: 'https://www2.trf4.jus.br/trf4/processos/certidao/index.php' },
                    { nome: 'TRF5', href: 'https://certidoes.trf5.jus.br/certidoes2022/' },
                    { nome: "SITUAÇÃO CADASTRAL CPF", href: "https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp" },
                    { nome: "QUITAÇÃO ELEITORAL", href: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/certidoes-eleitor" },
                    { nome: "ANTECEDENTES CRIMINAIS ESTADUAL", href: "https://ssp.sesp.es.gov.br/rgantecedentes/xhtml/pesquisaantecedentes.jsf" },
                    { nome: "ANTECEDENTES CRIMINAIS FEDERAL", href: "https://servicos.pf.gov.br/epol-sinic-publico/" },
                    { nome: "COREN-ES", href: "https://facil-es.coren-sp.gov.br/auth/login" },
                    { nome: "REGULARIDADE FISCAL DA RECEITA FEDERAL", href: "https://servicos.receitafederal.gov.br/servico/certidoes/#/home#" },
                    { nome: "REGULARIDADE FISCAL DA PESSOA JURIDICA", href: "https://servicos.receitafederal.gov.br/servico/certidoes/#/home/cnpj" },
                    { nome: "CONSULTA DE REGULARIDADE DO EMPREGADOR", href: "https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf" },
                    { nome: "DÉBITOS TRABALHISTAS", href: "https://cndt-certidao.tst.jus.br/" }

                ]
            },
            {
                nome: 'RESULTADO DE EXAMES',
                open: false,
                links: [
                    { nome: "MERIDIONAL", href: "https://redemeridional.com.br/RESULTADOS-DE-EXAMES/" },
                    { nome: "REGIONAL", href: "https://regionalaboratorio.com.br/" },
                    { nome: "MAIA", href: "https://exames.laboratoriomaia.com.br:8082/shift/lis/maia/elis/s01.iu.web.Login.cls" },
                    { nome: "CDM", href: "https://web.clinux.com.br/portal/cdmimagem/resultados" }
                ]
            },
            {
                nome: 'PORTAIS DE SERVIÇOS',
                open: false,
                links: [
                    { nome: "PREFEITURA DE PINHEIROS PROCESSO SELETIVO", href: "https://www.pinheiros.es.gov.br/selecao" },
                    { nome: "SIAPEC 3", href: "https://siapec3.idaf.es.gov.br/siapec3/login.wsp" },
                    { nome: "SISLAME", href: "https://sislameesm.caedufjf.net/sislameesm/login.faces" },
                    { nome: "ACESSO CIDADÃO", href: "https://login.acessocidadao.es.gov.br/" }
                ]
            },
            {
                nome: 'BOLETOS',
                open: false,
                links: [
                    { nome: "MEI", href: "https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao" },
                    { nome: "SAAE SÃO MATEUS", href: "https://www.avsanegraph.com.br/av/sane/index.php" },
                    { nome: "FIES", href: "https://login.caixa.gov.br/auth/realms/internet/protocol/openid-connect/auth?response_type=code&client_id=cli-web-fesdevops&redirect_uri=https%3A%2F%2Ffies.caixa.gov.br%2Ffes-web%2Findex.html&state=8545a037-a336-41b0-90f315347b1a0b5e&login=true&scope=openid" },
                    { nome: "UNIMED", href: "https://www.unimed.coop.br/site/web/nortecapixaba/cliente" }
                ]
            },
            {
                nome: 'SEGUNDA VIA',
                open: false,
                links: [
                    { nome: "CPF", href: "https://servicos.receita.fazenda.gov.br/servicos/cpf/impressaocomprovante/consultaimpressao.asp" },
                    { nome: "TÍTULO DE ELEITOR", href: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/" }
                ]
            },
            {
                nome: 'SERVIÇOS DO GOVERNO FEDERAL',
                open: false,
                links: [
                    { nome: "Carteira do Idoso", href: "https://www.gov.br/pt-br/servicos/adquirir-carteira-do-idoso" }
                ]
            }
        ],
        docs: [
            { nome: 'Contrato de Permuta de bens imoveis comercial', tipo: '.docx', thumb: '../assets/imagens/docxs/CONTRATO_DE_PERMUTA_DE_BENS_IMÓVEIS_COMERCIAL.png', href: '../assets/docxs/CONTRATO_DE_PERMUTA_DE_BENS_IMÓVEIS_COMERCIAL.docx' },
        ],
        prices: [
            { id: 'pb-a4', nome: 'P&B', formato: 'A4', valor: null, tiers: [{ min: 1, max: 5, valor: 1.00 }, { min: 6, max: 10, valor: 0.75 }, { min: 11, max: 30, valor: 0.50 }, { min: 31, max: 50, valor: 0.45 }, { min: 51, max: 100, valor: 0.40 }, { min: 101, max: null, valor: 0.35 }] },
            { id: 'pb-a3', nome: 'P&B', formato: 'A3', valor: null, tiers: [{ min: 1, max: 1, valor: 1.50 }, { min: 2, max: 10, valor: 1.30 }, { min: 11, max: 30, valor: 1.10 }, { min: 31, max: 50, valor: 0.90 }, { min: 51, max: 100, valor: 0.70 }, { min: 101, max: null, valor: 0.65 }] },
            { id: 'color-a4', nome: 'Colorido', formato: 'A4', valor: null, tiers: [{ min: 1, max: 15, valor: 2.50 }, { min: 16, max: 25, valor: 2.35 }, { min: 26, max: 40, valor: 2.20 }, { min: 41, max: 50, valor: 2.00 }, { min: 51, max: 99, valor: 1.85 }, { min: 100, max: null, valor: 1.50 }] },
            { id: 'color-a3', nome: 'Colorido', formato: 'A3', valor: null, tiers: [{ min: 1, max: 15, valor: 4.50 }, { min: 16, max: 25, valor: 4.35 }, { min: 26, max: 40, valor: 4.15 }, { min: 41, max: 50, valor: 4.00 }, { min: 51, max: 99, valor: 3.85 }, { min: 100, max: null, valor: 3.50 }] },
            { id: 'a2-pb', nome: 'P&B', formato: 'A2', valor: 15.00 },
            { id: 'a2-color', nome: 'Colorido', formato: 'A2', valor: 15.00 },
            { id: 'a1-pb', nome: 'P&B', formato: 'A1', valor: 25.00 },
            { id: 'a1-color', nome: 'Colorido', formato: 'A1', valor: 25.00 },
            { id: 'cartolina-a4', nome: 'Cartolina', formato: 'A4', valor: 0.60 },
            { id: 'cartolina-a3', nome: 'Cartolina', formato: 'A3', valor: 1.20 },
            { id: 'opaline-a4', nome: 'Opaline', formato: 'A4', valor: 0.80 },
            { id: 'verge-a4', nome: 'Vergê', formato: 'A4', valor: 0.80 },
            { id: 'offset-180-a4', nome: 'Off-set 180g', formato: 'A4', valor: 0.50 },
            { id: 'photo-gloss-a4', nome: 'Fotográfico brilhoso', formato: 'A4', valor: 0.90 },
            { id: 'photo-gloss-a3', nome: 'Fotográfico brilhoso', formato: 'A3', valor: 1.80 },
            { id: 'photo-matte-a4', nome: 'Fotográfico fosco', formato: 'A4', valor: 0.50 },
            { id: 'couche-90-a4', nome: 'Couchê 90g', formato: 'A4', valor: null },
            { id: 'couche-90-a3', nome: 'Couchê 90g', formato: 'A3', valor: null },
            { id: 'couche-170-a4', nome: 'Couchê 170g', formato: 'A4', valor: 0.60 },
            { id: 'couche-250-a4', nome: 'Couchê 250g', formato: 'A4', valor: 1.40 },
            { id: 'couche-250-a3', nome: 'Couchê 250g', formato: 'A3', valor: 2.80 },
            { id: 'adhesive-a4', nome: 'Adesivo', formato: 'A4', valor: 1.70 },
            { id: 'adhesive-a3', nome: 'Adesivo', formato: 'A3', valor: 3.40 },
            { id: 'photo-adhesive-a4', nome: 'Adesivo fotográfico', formato: 'A4', valor: null },
            { id: 'photo-adhesive-a3', nome: 'Adesivo fotográfico', formato: 'A3', valor: null },
            { id: 'vinyl-clear-a4', nome: 'Adesivo vinil transparente', formato: 'A4', valor: 4.50 },
            { id: 'vinyl-white-a4', nome: 'Adesivo vinil branco brilhante', formato: 'A4', valor: 3.50 },
            { id: 'vinyl-holo-a4', nome: 'Adesivo vinil holográfico estrelas', formato: 'A4', valor: 3.50 },
            { id: 'vinyl-laser-a4', nome: 'Adesivo vinil laser branco brilhante', formato: 'A4', valor: 5.90 },
            { id: 'transparency-a4', nome: 'Transparência', formato: 'A4', valor: 4.95 },
            { id: 'pearl-a4', nome: 'Perolizado (sem textura)', formato: 'A4', valor: 2.00 },
            { id: 'colored-paper-a4', nome: 'A4 colorido', formato: 'A4', valor: 0.15 }
        ],
        // EDITE ESTES DADOS: mesma organização e ordem do documento "TABELA DE VALORES".
        serviceGroups: {
            gov: [
                { nome: 'Recuperar / criar senha / aumentar nível da conta', valor: 'R$ 10,00 – R$ 15,00' },
                { nome: 'Agendamentos', valor: 'R$ 10,00 – R$ 15,00' },
                { nome: 'Seguro-desemprego', valor: 'R$ 30,00' },
                { nome: 'Carteira de trabalho digital', valor: 'R$ 20,00' },
                { nome: 'CRLV eletrônico', valor: 'R$ 15,00' },
                { nome: 'Cópia declaração/recibo imposto de renda', valor: 'R$ 15,00' },
                { nome: 'Desbloquear benefício INSS', valor: 'R$ 15,00' },
                { nome: 'Atualizar guia GPS - INSS', valor: 'R$ 2,00 (unitário) · R$ 15,00 (os 12 meses)' },
                { nome: 'Emitir Carteirinha de Idoso', valor: 'R$ 5,00' }
            ],
            arte: [
                { nome: 'Topper de bolo sem corte', valor: 'R$ 8,00 (+ impressão)' },
                { nome: 'Topper de bolo com corte', valor: 'R$ 30,00' },
                { nome: 'Flyer rede social simples', valor: 'R$ 8,00' },
                { nome: 'Flyer rede social complexo', valor: 'R$ 15,00 – R$ 30,00' },
                { nome: 'Cardápio', valor: 'R$ 15,00 – R$ 30,00 (+ impressão)' },
                { nome: 'Propaganda/anúncio', valor: 'R$ 10,00 – R$ 30,00 (+ impressão)' },
                { nome: 'Convite interativo', valor: 'R$ 25,00 – R$ 40,00' },
                { nome: 'Placas diversas simples', valor: 'R$ 2,00 (+ impressão)' },
                { nome: 'Placas diversas complexas', valor: 'R$ 5,00 – R$ 8,00 (+ impressão)' },
                { nome: 'Adesivos para material escolar', valor: 'R$ 8,00 (+ corte e + impressão)' },
                { nome: 'Cartão de visita simples', valor: 'R$ 10,00 (+ impressão)' },
                { nome: 'Cartão de visita complexo', valor: 'R$ 10,00 – R$ 30,00 (+ impressão)' },
                { nome: 'Capas diversas (cartão de vacina, caderno...)', valor: 'R$ 10,00 – R$ 20,00 (+ impressão)' },
                { nome: 'Certificados', valor: 'R$ 10,00 – R$ 20,00 (+ impressão)' },
                { nome: 'Outras artes', valor: 'R$ 15,00 – R$ 30,00 (+ impressão)' }
            ],
            digitacao: [
                { nome: 'Simples', valor: 'R$ 6,00 (folha) (+ impressão)' },
                { nome: 'Complexa', valor: 'R$ 10,00 – R$ 15,00 (+ impressão)' }
            ],
            outros: [
                { nome: 'Contrato (compra e venda, aluguel...)', valor: 'R$ 30,00 – a depender do serviço' },
                { nome: 'Declarações (viagem, estoque...)', valor: 'R$ 10,00 – R$ 15,00' },
                { nome: 'Boletos em geral/resultado de exames', valor: 'R$ 1,00 (+ impressão)' },
                { nome: 'Pesquisa rápida', valor: 'R$ 1,00 (+ impressão)' },
                { nome: 'Pesquisa longa', valor: 'R$ 5,00 (+ impressão)' },
                { nome: 'Certidões da internet', valor: 'R$ 2,00 (+ impressão)' },
                { nome: '2ª via de CPF', valor: 'R$ 8,00' },
                { nome: 'Carteirinha de visita', valor: 'R$ 15,00 (+ scanner)' },
                { nome: 'Currículo', valor: 'R$ 6,00 – R$ 8,00 (+ impressão)' },
                { nome: 'Scanner', valor: 'R$ 1,00 por folha' },
                { nome: 'QRCode Pix / Wi-Fi', valor: 'R$ 8,00' },
                { nome: 'Inscrições para processo seletivo', valor: 'R$ 10,00 – R$ 15,00 (+ scanner)' },
                { nome: 'Carteirinha de visita ao CPD', valor: 'R$ 20,00' },
                { nome: 'Carteirinha de identificação (autismo/TDAH e outros)', valor: 'R$ 10,00' },
                { nome: 'Nota fiscal', valor: 'R$ 5,00 (+ impressão)' },
                { nome: 'Carteira nacional docente', valor: 'R$ 10,00' },
                { nome: 'Criar e-mail', valor: 'R$ 5,00' },
                { nome: 'Corte na refiladora', valor: 'R$ 1,00 – R$ 1,50 por folha' },
                { nome: 'Corte na máquina de corte', valor: 'R$ 3,00 por folha (a depender da quantidade)' }
            ]
        }
    };

    function downloader_drivers() {
        content.drivers.forEach(function (driver) {
            var link = document.createElement('a');

            link.textContent = driver.nome;
            link.href = driver.href;
            link.download = '';

            document.body.appendChild(link);
        });
    }

    var moneyFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    function getUnitPrice(paper, quantity) {
        if (paper.tiers) {
            var tier = paper.tiers.find(function (range) {
                return quantity >= range.min && (range.max === null || quantity <= range.max);
            });
            return tier ? tier.valor : null;
        }
        return paper.valor;
    }

    function formatPaperPrices(paper) {
        if (paper.tiers) {
            return paper.tiers.map(function (range) {
                var quantityLabel = range.max === range.min ? String(range.min) :
                    range.max === null ? range.min + '+' : range.min + '-' + range.max;
                return quantityLabel + ': ' + moneyFormat.format(range.valor);
            }).join(' | ');
        }
        return paper.valor === null ? 'A definir' : moneyFormat.format(paper.valor);
    }
    var printPaperIds = ['pb-a4', 'pb-a3', 'color-a4', 'color-a3', 'a2-pb', 'a2-color', 'a1-pb', 'a1-color'];
    var printRows = [
        { key: 'pb-a4', label: 'P&B A4', paperId: 'pb-a4' },
        { key: 'pb-a3', label: 'P&B A3', paperId: 'pb-a3' },
        { key: 'color-a4', label: 'Colorido A4', paperId: 'color-a4' },
        { key: 'color-a3', label: 'Colorido A3', paperId: 'color-a3' },
        { key: 'a2', label: 'A2', choices: [{ id: 'a2-pb', label: 'P&B' }, { id: 'a2-color', label: 'Colorido' }] },
        { key: 'a1', label: 'A1', choices: [{ id: 'a1-pb', label: 'P&B' }, { id: 'a1-color', label: 'Colorido' }] }
    ];

    function updateCount(name, count) {
        document.querySelectorAll('[data-count="' + name + '"]').forEach(function (counter) {
            counter.textContent = String(count).padStart(2, '0');
        });
    }

    var priceTpl = '<tr><td>{{ nome }}</td><td>{{ formato }}</td><td class="mono {{ status }}">{{ valor }}</td></tr>';

    function renderDrivers() {
        var container = document.getElementById('drivers-list');
        container.replaceChildren();
        content.drivers.forEach(function (driver, index) {
            var row = document.createElement('p');
            row.className = 'static-driver';
            row.dataset.searchTarget = 'driver:' + index;
            var name = document.createElement('strong');
            name.textContent = driver.nome + ': ';
            row.appendChild(name);
            if (driver.href) {
                var link = document.createElement('a');
                link.href = driver.href;
                link.textContent = 'Download do driver';
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                row.appendChild(link);
            } else {
                var placeholder = document.createElement('span');
                placeholder.textContent = 'link do driver para preencher no código';
                row.appendChild(placeholder);
            }
            container.appendChild(row);
        });
    }

    function renderPrinters() {
        var container = document.getElementById('printer-list');
        container.replaceChildren();
        content.printers.forEach(function (printer, index) {
            var row = document.createElement('p');
            row.className = 'static-printer';
            row.dataset.searchTarget = 'printer:' + index;
            var name = document.createElement('strong');
            name.textContent = printer.nome + ': ';
            var ip = document.createElement('span');
            ip.textContent = 'IP ' + printer.ip;
            row.append(name, ip);
            container.appendChild(row);
        });
    }

    function renderLinkGroups() {
        var container = document.getElementById('links-list');
        container.replaceChildren();
        var totalLinks = 0;

        content.linkGroups.forEach(function (group, groupIndex) {
            totalLinks += group.links.length;
            var details = document.createElement('details');
            details.className = 'link-group';
            details.open = group.open !== false;
            details.dataset.searchGroup = String(groupIndex);
            var summary = document.createElement('summary');
            summary.textContent = group.nome;
            details.appendChild(summary);

            group.links.forEach(function (item, linkIndex) {
                var paragraph = document.createElement('p');
                paragraph.className = 'static-link';
                paragraph.dataset.searchTarget = 'link:' + groupIndex + ':' + linkIndex;
                paragraph.appendChild(document.createTextNode(item.nome + ': '));
                var link = document.createElement('a');
                link.href = item.href;
                link.textContent = item.href;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                paragraph.appendChild(link);
                details.appendChild(paragraph);
            });
            container.appendChild(details);
        });
        updateCount('links', totalLinks);
    }

    renderDrivers();
    renderPrinters();
    renderLinkGroups();

    // tabelas de impressão por faixa de quantidade (iguais ao docx)
    var tierTpl = '<tr><td>{{ faixa }}</td><td class="mono">{{ valor }}</td></tr>';
    function renderTierTable(elId, paperId) {
        var paper = content.prices.find(function (p) { return p.id === paperId; });
        var rows = paper.tiers.map(function (range) {
            var faixa = range.max === range.min ? range.min + ' LAUDA' :
                range.max === null ? range.min + ' >' : range.min + ' - ' + range.max + ' LAUDAS';
            return tpl(tierTpl, { faixa: faixa, valor: moneyFormat.format(range.valor) });
        }).join('');
        document.getElementById(elId).innerHTML = '<tr><th>Quantidade</th><th>Valor unitário</th></tr>' + rows;
    }
    renderTierTable('tier-pb-a4', 'pb-a4');
    renderTierTable('tier-color-a4', 'color-a4');
    renderTierTable('tier-pb-a3', 'pb-a3');
    renderTierTable('tier-color-a3', 'color-a3');

    // tabela "tipo de papel" (A4/A3 lado a lado, igual a foto que o usuário mandou)
    var paperGridOrder = [];
    var paperGridMap = {};
    content.prices.forEach(function (p) {
        if (printPaperIds.indexOf(p.id) !== -1) return; // já aparece nas tabelas de impressão acima
        if (p.id.indexOf('a1-') === 0 || p.id.indexOf('a2-') === 0) return; // vai para "formato grande"
        if (!paperGridMap[p.nome]) { paperGridMap[p.nome] = {}; paperGridOrder.push(p.nome); }
        paperGridMap[p.nome][p.formato] = p.valor;
    });
    var paperGridTpl = '<tr><td>{{ nome }}</td><td class="mono">{{ a4 }}</td><td class="mono">{{ a3 }}</td></tr>';
    document.getElementById('paper-grid-table').innerHTML =
        '<tr><th>Tipo de papel</th><th>A4</th><th>A3</th></tr>' + paperGridOrder.map(function (nome) {
            var v = paperGridMap[nome];
            return tpl(paperGridTpl, {
                nome: nome,
                a4: v.A4 !== undefined ? (v.A4 === null ? '—' : moneyFormat.format(v.A4)) : '',
                a3: v.A3 !== undefined ? (v.A3 === null ? '—' : moneyFormat.format(v.A3)) : ''
            });
        }).join('');

    // formato grande (A1/A2), para não perder esses valores
    var largeFormatTpl = '<tr><td>{{ formato }}</td><td class="mono">{{ pb }}</td><td class="mono">{{ color }}</td></tr>';
    document.getElementById('large-format-table').innerHTML = '<tr><th>Formato</th><th>P&amp;B</th><th>Colorido</th></tr>' +
        ['A2', 'A1'].map(function (f) {
            var pb = content.prices.find(function (p) { return p.id === (f === 'A2' ? 'a2-pb' : 'a1-pb'); });
            var color = content.prices.find(function (p) { return p.id === (f === 'A2' ? 'a2-color' : 'a1-color'); });
            return tpl(largeFormatTpl, { formato: f, pb: moneyFormat.format(pb.valor), color: moneyFormat.format(color.valor) });
        }).join('');

    // tabelas de serviço (mesmas categorias e ordem do docx)
    var serviceTpl = '<tr><td>{{ nome }}</td><td class="mono">{{ valor }}</td></tr>';
    function renderServiceTable(elId, items) {
        document.getElementById(elId).innerHTML = '<tr><th>Serviço</th><th>Valor</th></tr>' +
            items.map(function (item) { return tpl(serviceTpl, item); }).join('');
    }
    renderServiceTable('service-gov-table', content.serviceGroups.gov);
    renderServiceTable('service-arte-table', content.serviceGroups.arte);
    renderServiceTable('service-digitacao-table', content.serviceGroups.digitacao);
    renderServiceTable('service-outros-table', content.serviceGroups.outros);

    var grid = document.getElementById('doc-grid');
    grid.innerHTML = content.docs.map(function (d, i) {
        var inner = d.thumb ? '<img src="' + d.thumb + '" alt="">' : d.tipo.replace('.', '').toUpperCase();
        return '<div class="doc-card" data-search-target="doc:' + i + '"><div class="doc-thumb" data-doc="' + i + '">' + inner + '</div>' +
            '<div class="doc-body"><strong>' + d.nome + '</strong><a class="btn" href="' + d.href + '">Baixar ' + d.tipo + '</a></div></div>';
    }).join('');
    updateCount('drivers', content.drivers.length);
    updateCount('printers', content.printers.length);
    updateCount('docs', content.docs.length);
    updateCount('prices', content.prices.length);

    var noteStorageKey = 'bb-notinha-v2';
    var noteState = { servicePrice: 0, printQuantities: {}, printTypes: {}, papers: [] };
    try {
        var savedNote = JSON.parse(localStorage.getItem(noteStorageKey) || 'null');
        if (savedNote && typeof savedNote === 'object') {
            noteState.servicePrice = Number.isFinite(Number(savedNote.servicePrice)) ? Math.max(0, Number(savedNote.servicePrice)) : 0;
            noteState.printQuantities = savedNote.printQuantities && typeof savedNote.printQuantities === 'object' ? savedNote.printQuantities : {};
            noteState.printTypes = savedNote.printTypes && typeof savedNote.printTypes === 'object' ? savedNote.printTypes : {};
            noteState.papers = Array.isArray(savedNote.papers) ? savedNote.papers.filter(function (line) {
                return line && content.prices.some(function (paper) { return paper.id === line.paperId && printPaperIds.indexOf(paper.id) === -1; }) &&
                    Number.isFinite(Number(line.quantity)) && Number(line.quantity) > 0;
            }).map(function (line) { return { paperId: line.paperId, quantity: Number(line.quantity) }; }) : [];
        }
    } catch (e) { }

    var paperLines = document.getElementById('note-paper-lines');
    var printLines = document.getElementById('note-print-lines');
    var noteTotal = document.getElementById('note-total');
    var servicePriceInput = document.getElementById('note-service-price');
    var noteCount = document.querySelector('[data-count="note"]');
    var pendingWarning = document.getElementById('note-pending-warning');
    document.getElementById('note-date').textContent = new Intl.DateTimeFormat('pt-BR').format(new Date());
    servicePriceInput.value = noteState.servicePrice || '';

    function saveNote() {
        try { localStorage.setItem(noteStorageKey, JSON.stringify(noteState)); } catch (e) { }
    }

    function updateNoteTotal() {
        var total = Number(noteState.servicePrice) || 0;
        var selectedCount = 0;
        var hasPendingPrice = false;
        printRows.forEach(function (row) {
            var quantity = Number(noteState.printQuantities[row.key]) || 0;
            var paperId = row.paperId || noteState.printTypes[row.key] || '';
            var paper = content.prices.find(function (item) { return item.id === paperId; });
            var line = printLines.querySelector('[data-print-key="' + row.key + '"]');
            var amount = line.querySelector('.print-line-amount');
            var subtotal = line.querySelector('.print-line-subtotal');
            var unitPrice = paper ? getUnitPrice(paper, quantity) : null;

            amount.textContent = quantity > 0 ? (unitPrice === null ? 'A definir' : moneyFormat.format(unitPrice)) :
                paper && paper.tiers ? 'por faixa' : paper && paper.valor !== null ? moneyFormat.format(paper.valor) : 'A definir';
            if (quantity > 0) {
                selectedCount++;
                if (unitPrice === null) {
                    hasPendingPrice = true;
                    subtotal.textContent = 'A definir';
                } else {
                    var printSubtotal = unitPrice * quantity;
                    total += printSubtotal;
                    subtotal.textContent = moneyFormat.format(printSubtotal);
                }
            } else {
                subtotal.textContent = moneyFormat.format(0);
            }
        });

        noteState.papers.forEach(function (line, index) {
            var paper = content.prices.find(function (item) { return item.id === line.paperId; });
            var unitPrice = paper ? getUnitPrice(paper, Number(line.quantity)) : null;
            var subtotal = unitPrice === null ? 0 : unitPrice * Number(line.quantity);
            if (paper && unitPrice !== null) { selectedCount++; total += subtotal; }
            else if (paper && Number(line.quantity) > 0) { hasPendingPrice = true; }
            var subtotalElement = paperLines.querySelector('[data-line-index="' + index + '"] .paper-subtotal');
            if (subtotalElement) { subtotalElement.textContent = !paper ? '' : unitPrice !== null ? moneyFormat.format(subtotal) : 'A definir'; }
        });
        noteTotal.textContent = moneyFormat.format(total);
        noteCount.textContent = String(selectedCount).padStart(2, '0');
        pendingWarning.hidden = !hasPendingPrice;
    }

    function renderPrintLines() {
        printLines.replaceChildren();
        printRows.forEach(function (printRow) {
            var row = document.createElement('div');
            row.className = 'receipt-print-line';
            row.dataset.printKey = printRow.key;
            var label = document.createElement('strong');
            label.textContent = printRow.label;

            var typeSelect = null;
            if (printRow.choices) {
                typeSelect = document.createElement('select');
                typeSelect.setAttribute('aria-label', 'Tipo de impressão ' + printRow.label);
                var prompt = document.createElement('option');
                prompt.value = '';
                prompt.textContent = 'P&B ou colorido';
                typeSelect.appendChild(prompt);
                printRow.choices.forEach(function (choice) {
                    var option = document.createElement('option');
                    option.value = choice.id;
                    option.textContent = choice.label;
                    typeSelect.appendChild(option);
                });
                typeSelect.value = noteState.printTypes[printRow.key] || '';
                row.append(label, typeSelect);
            } else {
                row.appendChild(label);
            }

            var quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.min = '0';
            quantityInput.step = '1';
            quantityInput.value = String(Number(noteState.printQuantities[printRow.key]) || 0);
            quantityInput.setAttribute('aria-label', 'Quantidade ' + printRow.label);
            row.appendChild(quantityInput);

            var amount = document.createElement('span');
            amount.className = 'print-line-amount';
            var subtotal = document.createElement('strong');
            subtotal.className = 'print-line-subtotal';
            row.append(amount, subtotal);

            if (typeSelect) {
                typeSelect.addEventListener('change', function () {
                    noteState.printTypes[printRow.key] = typeSelect.value;
                    saveNote();
                    updateNoteTotal();
                });
            }
            quantityInput.addEventListener('input', function () {
                noteState.printQuantities[printRow.key] = Math.max(0, Number(quantityInput.value) || 0);
                saveNote();
                updateNoteTotal();
            });
            printLines.appendChild(row);
        });
        updateNoteTotal();
    }

    function renderPaperLines() {
        paperLines.replaceChildren();
        if (!noteState.papers.length) { noteState.papers.push({ paperId: '', quantity: 1 }); }

        noteState.papers.forEach(function (line, index) {
            var row = document.createElement('div');
            row.className = 'paper-line';
            row.dataset.lineIndex = index;

            var paperLabel = document.createElement('label');
            paperLabel.className = 'paper-type';
            paperLabel.textContent = 'Folha';
            var select = document.createElement('select');
            select.setAttribute('aria-label', 'Escolher folha');
            var prompt = document.createElement('option');
            prompt.value = '';
            prompt.textContent = 'Escolher folha';
            select.appendChild(prompt);
            content.prices.filter(function (paper) { return printPaperIds.indexOf(paper.id) === -1; }).forEach(function (paper) {
                var option = document.createElement('option');
                option.value = paper.id;
                option.disabled = paper.valor === null && !paper.tiers;
                option.textContent = paper.nome + ' ' + paper.formato + ' · ' + (paper.tiers ? 'preço por quantidade' : paper.valor === null ? 'preço a definir' : moneyFormat.format(paper.valor));
                select.appendChild(option);
            });
            select.value = line.paperId;
            paperLabel.appendChild(select);

            var quantityLabel = document.createElement('label');
            quantityLabel.className = 'paper-quantity';
            quantityLabel.textContent = 'Qtd.';
            var quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.min = '1';
            quantityInput.step = '1';
            quantityInput.value = String(line.quantity);
            quantityInput.setAttribute('aria-label', 'Quantidade de folhas');
            quantityLabel.appendChild(quantityInput);

            var subtotal = document.createElement('strong');
            subtotal.className = 'paper-subtotal';
            subtotal.textContent = moneyFormat.format(0);
            var removeButton = document.createElement('button');
            removeButton.type = 'button';
            removeButton.className = 'paper-remove';
            removeButton.textContent = '×';
            removeButton.title = 'Remover folha';
            removeButton.setAttribute('aria-label', 'Remover folha desta linha');

            select.addEventListener('change', function () { line.paperId = select.value; saveNote(); updateNoteTotal(); });
            quantityInput.addEventListener('input', function () {
                line.quantity = Math.max(0, Number(quantityInput.value) || 0);
                saveNote();
                updateNoteTotal();
            });
            removeButton.addEventListener('click', function () {
                noteState.papers.splice(index, 1);
                saveNote();
                renderPaperLines();
            });

            row.append(paperLabel, quantityLabel, subtotal, removeButton);
            paperLines.appendChild(row);
        });
        updateNoteTotal();
    }

    servicePriceInput.addEventListener('input', function () {
        noteState.servicePrice = Math.max(0, Number(servicePriceInput.value) || 0);
        saveNote();
        updateNoteTotal();
    });
    document.getElementById('note-add-paper').addEventListener('click', function () {
        noteState.papers.push({ paperId: '', quantity: 1 });
        saveNote();
        renderPaperLines();
        paperLines.lastElementChild.querySelector('select').focus();
    });
    document.getElementById('note-clear').addEventListener('click', function () {
        noteState = { servicePrice: 0, printQuantities: {}, printTypes: {}, papers: [] };
        servicePriceInput.value = '';
        saveNote();
        renderPrintLines();
        renderPaperLines();
    });
    renderPrintLines();
    renderPaperLines();

    // prévia
    var overlay = document.getElementById('preview-overlay');
    grid.addEventListener('click', function (e) {
        var t = e.target.closest('[data-doc]');
        if (!t) return;
        var d = content.docs[t.dataset.doc];
        document.getElementById('preview-img').innerHTML = d.thumb ? '<img src="' + d.thumb + '" alt="">' : d.tipo.replace('.', '').toUpperCase();
        document.getElementById('preview-name').textContent = d.nome;
        document.getElementById('preview-meta').textContent = 'Documento Word ' + d.tipo;
        document.getElementById('preview-download').href = d.href;
        overlay.classList.add('open');
    });
    document.getElementById('preview-close').addEventListener('click', function () { overlay.classList.remove('open'); });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) overlay.classList.remove('open'); });

    // zoom da imagem do modelo
    var zoomOverlay = document.getElementById('zoom-overlay');
    var zoomImg = document.getElementById('zoom-img');
    document.getElementById('preview-img').addEventListener('click', function (e) {
        var img = e.target.closest('img');
        if (!img) return;
        zoomImg.src = img.src;
        zoomOverlay.classList.add('open');
    });
    zoomOverlay.addEventListener('click', function () { zoomOverlay.classList.remove('open'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { zoomOverlay.classList.remove('open'); } });

    // navegação
    var tabButtons = document.querySelectorAll('#tabs button');
    var topbar = document.querySelector('.topbar');
    var mobileMenuToggle = document.getElementById('mobile-menu-toggle');

    function setMobileMenuOpen(isOpen) {
        topbar.classList.toggle('menu-open', isOpen);
        mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
        mobileMenuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    }

    mobileMenuToggle.addEventListener('click', function () {
        setMobileMenuOpen(mobileMenuToggle.getAttribute('aria-expanded') !== 'true');
    });

    function activateTab(id) {
        tabButtons.forEach(function (button) { button.classList.toggle('active', button.dataset.tab === id); });
        document.querySelectorAll('main section').forEach(function (section) { section.classList.toggle('active', section.id === id); });
        setMobileMenuOpen(false);
    }
    tabButtons.forEach(function (btn) {
        btn.addEventListener('click', function () { activateTab(btn.dataset.tab); });
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { setMobileMenuOpen(false); }
    });
    document.querySelectorAll('[data-open-tab]').forEach(function (button) {
        button.addEventListener('click', function () { activateTab(button.dataset.openTab); });
    });

    // busca rapida em todos os recursos
    var searchInput = document.getElementById('quick-search');
    var searchResults = document.getElementById('search-results');
    var searchItems = [];

    var tierPaperIds = ['pb-a4', 'pb-a3', 'color-a4', 'color-a3'];
    var largeFormatIds = ['a2-pb', 'a2-color', 'a1-pb', 'a1-color'];

    function priceSearchTarget(item) {
        if (tierPaperIds.indexOf(item.id) !== -1) { return 'table:tier-' + item.id; }
        if (largeFormatIds.indexOf(item.id) !== -1) { return 'table:large-format-table'; }
        return 'table:paper-grid-table';
    }

    function rebuildSearchItems() {
        searchItems = [];
        content.drivers.forEach(function (driver, index) { searchItems.push({ title: driver.nome, detail: 'Driver de impressora', tab: 'drivers', target: 'driver:' + index }); });
        content.printers.forEach(function (printer, index) { searchItems.push({ title: printer.nome, detail: 'IP ' + printer.ip, tab: 'drivers', target: 'printer:' + index }); });
        content.docs.forEach(function (item, index) { searchItems.push({ title: item.nome, detail: 'Modelo ' + item.tipo, tab: 'art', target: 'doc:' + index }); });
        content.prices.forEach(function (item) {
            searchItems.push({ title: item.nome + ' ' + item.formato, detail: formatPaperPrices(item), tab: 'precos', target: priceSearchTarget(item) });
        });
        content.linkGroups.forEach(function (group, groupIndex) {
            group.links.forEach(function (link, linkIndex) {
                searchItems.push({ title: link.nome, detail: group.nome + ' · ' + link.href, tab: 'links', target: 'link:' + groupIndex + ':' + linkIndex });
            });
        });
    }
    rebuildSearchItems();

    function showSearchResults() {
        var query = searchInput.value.trim().toLocaleLowerCase('pt-BR');
        searchResults.replaceChildren();
        if (!query) { searchResults.hidden = true; return; }
        var matches = searchItems.filter(function (item) {
            return (item.title + ' ' + item.detail).toLocaleLowerCase('pt-BR').includes(query);
        }).slice(0, 8);
        if (!matches.length) {
            var empty = document.createElement('p');
            empty.className = 'search-empty';
            empty.textContent = 'Nenhum recurso encontrado.';
            searchResults.appendChild(empty);
        }
        matches.forEach(function (item) {
            var result = document.createElement('button');
            result.type = 'button';
            result.className = 'search-result';
            var title = document.createElement('strong');
            var detail = document.createElement('span');
            title.textContent = item.title;
            detail.textContent = item.detail;
            result.append(title, detail);
            result.addEventListener('click', function () {
                activateTab(item.tab);
                searchInput.value = '';
                searchResults.hidden = true;
                flashSearchTarget(item.target);
            });
            searchResults.appendChild(result);
        });
        searchResults.hidden = false;
    }

    function flashSearchTarget(target) {
        if (!target) return;
        var parts = target.split(':');
        var kind = parts[0];
        var el = null;

        if (kind === 'table') {
            var table = document.getElementById(parts[1]);
            el = table ? table.closest('.printer-section') || table : null;
        } else if (kind === 'link') {
            var groupDetails = document.querySelector('[data-search-group="' + parts[1] + '"]');
            if (groupDetails) { groupDetails.open = true; }
            el = document.querySelector('[data-search-target="' + target + '"]');
        } else {
            el = document.querySelector('[data-search-target="' + target + '"]');
        }
        if (!el) return;

        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.remove('search-flash-target');
        // força reinício da animação caso o mesmo item seja buscado de novo
        void el.offsetWidth;
        el.classList.add('search-flash-target');
        setTimeout(function () { el.classList.remove('search-flash-target'); }, 3000);
    }

    searchInput.addEventListener('input', showSearchResults);
    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { searchInput.value = ''; searchResults.hidden = true; searchInput.blur(); }
        if (e.key === 'Enter' && searchResults.querySelector('.search-result')) { searchResults.querySelector('.search-result').click(); }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
            e.preventDefault();
            searchInput.focus();
        }
    });
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.global-search')) { searchResults.hidden = true; }
    });

    // tema
    var themeBtn = document.getElementById('theme-toggle');
    function applyTheme(t) {
        if (t) { document.documentElement.setAttribute('data-theme', t); }
        else { document.documentElement.removeAttribute('data-theme'); }
    }
    var saved = null;
    try { saved = localStorage.getItem('bb-theme-red'); } catch (e) { }
    if (saved) { applyTheme(saved); }
    themeBtn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem('bb-theme-red', next); } catch (e) { }
    });
})();