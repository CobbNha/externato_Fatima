# Externato Fátima — Website institucional

Website institucional de página única para o Externato Fátima, desenvolvido com React, TypeScript, Vite e Tailwind CSS v4. Preparado para versionamento no GitHub e publicação na Vercel.

## Tecnologias

- React + TypeScript
- Vite 8
- Tailwind CSS 4 (plugin oficial para Vite)
- Lucide React (ícones)
- Node.js 22 recomendado para desenvolvimento e compilação

## Requisitos

- Node.js 22.12 ou superior
- npm
- Git (para enviar o projecto ao GitHub)

## Executar localmente

Abra a pasta do projecto no VS Code e execute no terminal:

```bash
npm install
npm run dev
```

O Vite apresentará um endereço local, normalmente `http://localhost:5173`.

## Validar a versão de produção

```bash
npm run build
npm run preview
```

Os ficheiros finais são gerados na pasta `dist/`.

## Publicar no GitHub

Crie um repositório vazio no GitHub, por exemplo `externato-fatima-website`. Na pasta deste projecto, execute:

```bash
git init
git add .
git commit -m "Website institucional do Externato Fátima"
git branch -M main
git remote add origin https://github.com/SEU-UTILIZADOR/externato-fatima-website.git
git push -u origin main
```

Substitua `SEU-UTILIZADOR` pelo nome da sua conta GitHub. Se o repositório já existir e tiver ficheiros, clone-o primeiro ou confirme o conteúdo antes de fazer push.

## Publicar na Vercel

1. Entre em [vercel.com](https://vercel.com/) e autentique-se com GitHub.
2. Escolha **Add New → Project**.
3. Importe o repositório `externato-fatima-website`.
4. Confirme as definições: Framework **Vite**, Build Command `npm run build` e Output Directory `dist`.
5. Seleccione **Deploy**.

O ficheiro `vercel.json` já inclui estas definições. Depois da ligação inicial, cada `git push` para a branch de produção gera uma nova publicação. A Vercel também cria previews para outras branches/alterações, conforme as definições do projecto.

## Onde alterar os conteúdos

Os dados institucionais estão centralizados para facilitar futuras actualizações:

- `src/data/school.ts` — nome, endereço, telefone, e-mail, Instagram e navegação.
- `src/data/activities.ts` — actividades extracurriculares e galeria.
- `src/data/fees.ts` — tabela de emolumentos e notas de pagamento.
- `public/images/` — logótipo, cartazes e fotografias usadas no website.

Não é necessário alterar os componentes para actualizar os textos ou os valores que já estejam definidos nestes ficheiros de dados.

## Estrutura principal

```text
externato-fatima-website/
├── public/
│   └── images/
│       ├── galeria/
│       ├── logo-externato-fatima.jpg
│       ├── simbolo-externato-fatima.jpg
│       ├── cartaz-inscricoes-2027.jpg
│       └── cartaz-emolumentos-2027.jpg
├── src/
│   ├── data/
│   │   ├── activities.ts
│   │   ├── fees.ts
│   │   └── school.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig*.json
├── vercel.json
└── vite.config.ts
```

## Observações importantes antes da publicação oficial

1. **Emolumentos:** a tabela em `src/data/fees.ts` foi transcrita do cartaz de emolumentos fornecido. A Secretaria deve validar todos os valores e as condições antes de o website ser divulgado ao público. O cartaz de inscrições também apresenta uma chamada de 1.500 MT para inscrição/renovação; confirme com a Direcção como esta chamada se relaciona com os valores por classe no cartaz de emolumentos.
2. **Fotografias:** as imagens da galeria foram recortadas das fotografias que aparecem no cartaz de inscrições enviado. Recomenda-se substituir por fotografias originais em alta resolução, se disponíveis, e confirmar autorização para publicar imagens de alunos.
3. **Actividades:** o website apresenta as cinco actividades indicadas no pedido: Balé, Dança, Teatro, Xadrez e TIC. Confirme com a escola a disponibilidade, horários e condições para 2027.
4. **Inscrição:** o website não recolhe nem guarda candidaturas. Os botões encaminham o visitante para o WhatsApp ou para os contactos da Secretaria. O cartaz informa que o processo é presencial.
5. **Sem base de dados:** textos, tabela de emolumentos e imagens ficam em ficheiros do próprio projecto. Não existe painel administrativo ou armazenamento de dados de alunos.

## Notas técnicas

O Node.js é usado para instalar dependências, executar o ambiente de desenvolvimento e compilar o website. Como a versão inicial é estática e não recolhe dados, não é necessário manter um servidor Node.js nem uma base de dados em produção. WhatsApp, telefone, e-mail, Instagram e mapas são ligações externas.
