# TreinaSoft

Página institucional responsiva para cursos, palestras e consultorias em tecnologia, construída com HTML, CSS e JavaScript sem dependências de build.

## Executar localmente

Na pasta do projeto:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Acesse a porta 8000 em um navegador quando houver suporte de visualização no ambiente. Para verificação interna: `curl -I http://127.0.0.1:8000`.

## Funcionalidades

- Layout responsivo, menu móvel e navegação por seções.
- Filtros de cursos por categoria.
- Seleção de interesse a partir dos cartões.
- Formulário com validação nativa e download de um resumo em texto.
- Ilustrações em CSS, ícone SVG local e fontes Google com alternativas do sistema.

## Personalização e publicação

TreinaSoft é uma identidade inicial. Os cursos são propostas de conteúdo, sem datas ou inscrições confirmadas. Substitua marca e textos pelos dados reais antes de publicar.

O formulário não envia mensagens, não registra inscrições e não armazena dados. Para receber contatos, será necessário integrar um serviço de formulário ou backend e incluir as informações de privacidade correspondentes. Não há endereço de e-mail fictício configurado.

O site pode ser hospedado em qualquer serviço de arquivos estáticos, inclusive GitHub Pages. Enviar o código ao GitHub e publicar o site são etapas separadas.
