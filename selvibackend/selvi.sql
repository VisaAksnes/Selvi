-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08-Set-2022 às 15:58
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `selvi`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `calçado`
--

CREATE TABLE `calçado` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) DEFAULT NULL,
  `descrição` varchar(300) DEFAULT NULL,
  `preço` float DEFAULT NULL,
  `id_tipo` int(11) DEFAULT NULL,
  `id_sexo` int(11) DEFAULT NULL,
  `img` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `calçado`
--

INSERT INTO `calçado` (`id`, `nome`, `descrição`, `preço`, `id_tipo`, `id_sexo`, `img`) VALUES
(1, 'Bota Catepillar cano Longo', 'A Bota Caterpillar em couro une o estilo e o conforto. Não perca a oportunidade de adquirir um produto de qualidade, pensamos em cada detalhe de todos os nossos modelos. Se surpreenda com nossos produtos.\r\n\r\nCaracterísticas do Produto:\r\n\r\nPalmilha: em gel\r\n\r\nMaterial: Couro.\r\n\r\nInterior: Algodão.\r\n\r', 1200, 2, 2, 'https://images-americanas.b2w.io/produtos/1329558763/imagens/bota-caterpillar-robust-em-couro-cinza/1329558931_1_large.jpg'),
(2, 'Sapato Nike', 'Indicado para: Dia a Dia\r\nMaterial: Têxtil\r\nComposição: Cabedal: Têxtil com calcanhar acolchoado e fecho em cadarço; Entressola: EVA; Solado: Borracha\r\nPisada: Neutra\r\nImportante: Para um melhor ajuste nos pés, recomendamos a compra de um tamanho maior do que o seu usual. Forma pequena.\r\nGarantia do', 320, 3, 1, 'https://images-americanas.b2w.io/produtos/5127765553/imagens/air-force-tenis-nike-1-branco/5127765596_1_large.jpg'),
(3, 'Bota Catepillar', 'Indicado para: Esportes\r\nMaterial: Têxtil e couro sintético\r\nComposição: Cabedal: Têxtil com calcanhar acolchoado e fecho em cadarço; Entressola: EVA; Solado: Borracha\r\nImportante: Para um melhor ajuste nos pés, recomendamos a compra de um tamanho maior do que o seu usual. Forma pequena.\r\nGarantia d', 980, 2, 1, 'https://images-submarino.b2w.io/produtos/451063051/imagens/coturno-bota-caterpillar-cat-feminino-original-nova-cat/451063115_1_large.jpg'),
(4, 'Chinelo Havaianas', 'Chinelo preto havaianas plástico resistente', 12, 1, 2, 'https://images-americanas.b2w.io/produtos/2521816427/imagens/chinelo-havaianas-brasil-preto-37-38/2521816443_1_large.jpg'),
(5, 'Bota Zaari preta Unissex Couro', 'Bota Zaari modelo Enfork, resistente e feita com couro natural bovino!', 910, 2, 3, 'https://images-americanas.b2w.io/produtos/36978563/imagens/bota-couro-steitz-unissex-impermeavel-cod-sti-1004/36978562_1_large.jpg'),
(6, 'Sapato Nike modelo esporte', 'Sapato nike feito para esportes de todos os tipos. Sapato resistente para caminhada, jogos, futebol e outros.', 240, 3, 1, 'https://cf.shopee.com.br/file/a646a7c29e7505244048d8453ff42af4');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sexo`
--

CREATE TABLE `sexo` (
  `id` int(11) NOT NULL,
  `sexo` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `sexo`
--

INSERT INTO `sexo` (`id`, `sexo`) VALUES
(1, 'F'),
(2, 'M'),
(3, 'N');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_calçado`
--

CREATE TABLE `tipo_calçado` (
  `id` int(11) NOT NULL,
  `tipo` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tipo_calçado`
--

INSERT INTO `tipo_calçado` (`id`, `tipo`) VALUES
(1, 'Chinelos'),
(2, 'Botas'),
(3, 'Sapatos');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `calçado`
--
ALTER TABLE `calçado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tipo` (`id_tipo`),
  ADD KEY `id_sexo` (`id_sexo`);

--
-- Índices para tabela `sexo`
--
ALTER TABLE `sexo`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tipo_calçado`
--
ALTER TABLE `tipo_calçado`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `calçado`
--
ALTER TABLE `calçado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `sexo`
--
ALTER TABLE `sexo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tipo_calçado`
--
ALTER TABLE `tipo_calçado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `calçado`
--
ALTER TABLE `calçado`
  ADD CONSTRAINT `calçado_ibfk_1` FOREIGN KEY (`id_tipo`) REFERENCES `tipo_calçado` (`id`),
  ADD CONSTRAINT `calçado_ibfk_2` FOREIGN KEY (`id_sexo`) REFERENCES `sexo` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
